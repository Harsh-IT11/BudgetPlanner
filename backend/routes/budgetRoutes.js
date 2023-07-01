const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetcontroller');

// Create a new budget item
router.post('/budget-items', budgetController.createTransaction);

// Delete a budget item
router.delete('/budget-items/:id', budgetController.deleteTransaction);

// Get the sum of all amounts category-wise
router.get('/budget-items/category-wise-amount-sum', budgetController.getCategoryWiseAmountSum);

// Get the total amount
router.get('/budget-items/total-amount', budgetController.getTotalAmount);

//get all the transactions list
router.get('/budget-items/get-total-transaction-list', budgetController.getAllTransactions);

//add income
router.post('/budget-items/add-income', budgetController.addIncome)

// get the total income
router.get('/budget-items/get-total-income', budgetController.getTotalIncome);

//Get all the income transactions list
router.get('/budget-items/get-total-income-list', budgetController.getAllIncomeTransactions);

//Get Weekly sum by category
router.get('/budget-items/get-weekly-sumbycategory',budgetController.getWeeklySumByCategory)

module.exports = router;
