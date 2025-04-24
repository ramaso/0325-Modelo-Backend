const mongoose = require ("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({

    fullname: {type: String, required: true, minLength: 3, maxLength: 80},
    email: {type: String, required: true, unique: true, minLength: 5, maxLength: 100},
    password: {type: String, required: true, minLength: 4, maxLength: 50},
    bornDate: {type: Number, required: true},
    location: {type: String},
    role: {type: String, default: "CLIENT_ROLE", enum:["ADMIN_ROLE", "CLIENT_ROLE", "USER_ROLE"]}
})

module.exports = mongoose.model("User", userSchema)