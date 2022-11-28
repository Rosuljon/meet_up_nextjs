import {  MongoClient} from 'mongodb'
import mongoose from 'mongoose';


async function handler (req, res) {
    if(req.method === 'POST'){
        const data = req.body;

        // const client = await MongoClient.connect('mongodb+srv://RonnyDev7:RonnyDev7@meetup.zzxbj4g.mongodb.net/meetup?retryWrites=true&w=majority');
        // const db = client.db();

        // const meetupsCollection = db.collection('meetup')
        // const result = await meetupsCollection.insertOne(data);
        // console.log(result);
        // client.close();
        const conn = await mongoose.connect('mongodb+srv://RonnyDev7:RonnyDev7@meetup.zzxbj4g.mongodb.net/meetup?retryWrites=true&w=majority');
        console.log(`connected: ${conn.connection.host}`);
        const db = mongoose.connection.db;
        const meetupsCollection = db.collection('meetup')
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        res.status(201).json({message: 'meetup inserted'});
    }
}

// const connectDB = async () =>{
//     try {
//        const conn = await mongoose.connect(process.env.MONGO_URI);
//        console.log(`connected: ${conn.connection.host}`.cyan.underline); 
//     } catch (error) {
//         console.log(error);
//         process.exit(1)
//     }
// }

export default handler;