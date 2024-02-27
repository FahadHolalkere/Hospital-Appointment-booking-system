const mongoose = require("mongoose");
require('dotenv').config();

const mongodb_api= process.env.MONGODB_CREDENTIALS
mongoose.connect(mongodb_api
).then(() => {
    console.log('connection successful');
}).catch((e) => {
    console.log(e);
})