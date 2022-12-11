import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27018/ehrmongodb';
const client = new MongoClient(url);

export const saveRegistrationData = async (registrationData) => {
    const database = client.db("ehrmongodb");
    const registration = database.collection("registration");   
    const result = await registration.insertOne(registrationData);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
}

export const searchByUserNamePassword = async (loginData) => {
    const database = client.db("ehrmongodb");
    const registration = database.collection("registration");
    const query = { username: loginData.username, type: loginData.type };
    const options = {
        limit: 1
      };
    return registration.findOne(query, options);
}

