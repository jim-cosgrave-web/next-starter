import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { hash } from 'bcrypt';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default async function signup(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method != 'POST') {
        res.json({status: 'POST only'});
        return;
    }

    const name: string = req.body.name;
    const email: string = req.body.email;
    const password: string = req.body.password;

    //
    // Validate that parameters were supplied
    //
    if (!name || name.trim().length == 0 || !email || email.trim().length == 0 || !password || password.trim().length == 0) {
        res.json({ status: 'Name, email, and password are all required' });
        return;
    }

    //
    // Validate password length
    //
    if(password.length < 10) {
        res.json({ status: 'Password must be at least 10 characters long'});
        return;
    }

    if (!client.isConnected()) {
        await client.connect();
    }

    const db = client.db('groceriesDB');
    const existingUser = await db.collection('users').findOne({ "email": email });

    if (existingUser) {
        res.json({ status: 'Email address already in use' });
    } else {
        hash(req.body.password, 10, async function (err, hash) {
            const user = {
                username: email,
                email: email,
                name: name,
                password: hash,
                stores: []
            };

            await db.collection('users').insertOne(user);

            res.json({status: 'ok'});
        });
    }
}