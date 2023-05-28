require('dotenv').config();
const jsonProducts = require('./users.json');

const connectDB = require("../db/connect");

const Users = require('../models/User');


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        const products = await Users.insertMany(jsonProducts);
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}


start()