const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// transactions => field => ['name', 'type', 'amount', 'date']
const transactionSchema = new mongoose.Schema({
    name: {type: String, default:"Anonymous"},
    type: {type: String, default:"Investment"},
    Amount: {type: Number},
    Date: {type: Date, default: Date.now},
})


module.exports = mongoose.model("transaction_model", transactionSchema);
