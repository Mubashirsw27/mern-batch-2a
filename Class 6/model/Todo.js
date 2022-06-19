const mongoose = require("mongoose");

module.exports = mongoose.model("Todo", {
    title: { type: String, required: true },
    list: {
        type: [String],
        required: true,
        validate: [(value) => value.length > 0, 'No Todos Found'],
    },
    delete: { type: Boolean, default: false }
});

