const { Schema, model } = require("mongoose");

let contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }, email: {
        type: String,
        required: true,
        unique: true
    }, message: {
        type: String,
        required: true

    }
}, {
    timestamps: true
});
let contactModel = model("contacts", contactSchema);
module.exports = contactModel;
