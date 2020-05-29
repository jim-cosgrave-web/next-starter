import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default async function login(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method != 'POST') {
        res.json({status: 'POST only'});
        return;
    }

    const email: string = req.body.email;
    const password: string = req.body.password;

    //
    // Validate that parameters were supplied
    //
    if (!email || email.trim().length == 0 || !password || password.trim().length == 0) {
        res.json({ status: 'Name, email, and password are all required' });
        return;
    }

    if (!client.isConnected()) {
        await client.connect();
    }

    const db = client.db('groceriesDB');
    const existingUser = await db.collection('users').findOne({ "email": email });

    if (!existingUser) {
        res.json({ status: 'Unsuccessful login' });
    } else {
        compare(password, existingUser.password, function(err, result) {
            //
            // result will be true/false
            //
            if(!err && result) {
                //
                // Create json token here
                //
                const claims = { sub: existingUser._id, name: existingUser.name, email: existingUser.email };
                const jwt = sign(claims, process.env.JWT_SECRET, { expiresIn: '1h' });

                res.json({ authToken: jwt });
            } else {
                res.json( {status: 'Oops.  Something went wrong'});
            }
        });
    }
}