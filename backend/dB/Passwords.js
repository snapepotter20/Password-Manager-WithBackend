const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema(
    {
        site:String,
        username:String,
        password:String,
    }
);

const passwordModel = mongoose.model("passwords",passwordSchema);

module.exports = passwordModel;