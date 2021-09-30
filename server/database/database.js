require('dotenv').config();
const mongoose = require('mongoose');

const {MONGO_URI} = process.env

exports.connect = () => {
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('DB Connected...')
    })
    .catch((err) => {
        console.log('DB Connection Failed...')
        console.error(err)
        process.exit(1)
    })
}