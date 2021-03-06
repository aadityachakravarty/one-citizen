const mongoose = require('mongoose');
const schema = mongoose.Schema;

const financial = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    card: Number,
    points: {
        type: Number,
        default: 10000
    },
    transactions: []
});

module.exports = mongoose.model('financial', financial);