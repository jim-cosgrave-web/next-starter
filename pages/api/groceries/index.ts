import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { MongoClient } from 'mongodb';
import { verify } from 'jsonwebtoken';
import { authenticate } from '../../../middleware/authenticate';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default authenticate(async function groceriesList(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != 'GET') {
        res.json({ status: 'GET only' });
        return;
    }

    if (!client.isConnected()) {
        await client.connect();
    }

    const db = client.db('groceriesDB');
    const groceries = await db.collection('groceries').find().toArray();

    res.json(groceries);
});