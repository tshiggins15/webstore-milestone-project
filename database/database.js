const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDataBase() {
    const client = await MongoClient.connect('mongodb+srv://tshiggins15:tshiggins15@cluster76260.iookalx.mongodb.net/');
    database = client.db('online-shop');
}

function getDb() {
    if (!database) {
        throw new Error('You must connect first!');
    }

    return database;
}

module.exports = {
    connectToDataBase: connectToDataBase,
    getDb: getDb
};
