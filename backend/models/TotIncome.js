const mongoose = require('mongoose');

// Define the budget item schema
const IncomeSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

// Create the budget item model
module.exports = mongoose.model('TotIncome', IncomeSchema);

