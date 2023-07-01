const mongoose = require('mongoose');

// Define the budget item schema
const TransactionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  day: {
    type: String,
    default: function() {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return daysOfWeek[this.date.getDay()];
    }
  }
});

// Create the budget item model
module.exports = mongoose.model('Transaction', TransactionSchema);

