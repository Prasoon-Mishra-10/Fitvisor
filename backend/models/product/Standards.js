const mongoose = require("mongoose");
const { Schema } = mongoose;

const standardschema = new Schema(
    {
        Category: {
            type: String,
            required: true
        },
        energy: {
            type: Number,

        },
        protein: {
            type: Number,

        },
        carbohydrate: {
            type: Number,

        },
        total_sugars: {
            type: Number,

        },
        total_fat: {
            type: Number,

        },
        ash: {
            type: Number,

        },
        moisture: {
            type: Number,

        },
        sodium: {
            type: Number,

        },
        iron: {
            type: Number,

        },



    }
)
const Standard = mongoose.model('Standard', standardschema);

module.exports = Standard;