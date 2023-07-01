const Transaction = require('../models/Transaction');
const TotIncome = require('../models/TotIncome')

// Create a new budget item
const createTransaction = async (req, res) => {
  try {
    const { category, amount } = req.body;

    const newItem = new Transaction({
      category: category,
      amount: amount
    });

    await newItem.save();
    res.status(200).json(newItem);
  } catch (error) {
    console.error('Error saving budget item:', error);
    res.status(500).json({ error: 'Failed to save budget item' });
  }
};

// Delete a budget item
const deleteTransaction = async (req, res) => {
  try {
    const itemId = req.params.id;

    const deletedItem = await Transaction.findByIdAndRemove(itemId);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Budget item not found' });
    }
    res.status(200).json(deletedItem);
  } catch (error) {
    console.error('Error deleting budget item:', error);
    res.status(500).json({ error: 'Failed to delete budget item' });
  }
};

// Get the sum of all amounts category-wise
const getCategoryWiseAmountSum = async (req, res) => {
  try {
    const result = await Transaction.aggregate([
      {
        $group: {
          _id: '$category',
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error retrieving category-wise amount sum:', error);
    res.status(500).json({ error: 'Failed to retrieve category-wise amount sum' });
  }
};

// Get the total amount
const getTotalAmount = async (req, res) => {
  try {
    const result = await Transaction.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);

    res.status(200).json(result[0].totalAmount);
  } catch (error) {
    console.error('Error retrieving total amount:', error);
    res.status(500).json({ error: 'Failed to retrieve total amount' });
  }
};

//get total income
const getTotalIncome = async(req,res)=>{
  try {
    const result = await TotIncome.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);
    res.status(200).json(result[0].totalAmount);
  } catch (error) {
    console.error('Error getting total income:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });   
  }
};

//Getting all the transactions
const getAllTransactions=async(req,res)=>{
  try {
    const result = await Transaction.find({})
    res.status(200).json(result);
  } catch (error) {
    console.error('Error in getting all the transactions',error);
    res.status(500).json({error : 'Failde to retrieve all the transactions,Internal server error'})
  }
}

//Gettign all the income transactions
const getAllIncomeTransactions=async(req,res)=>{
  try {
    const result = await TotIncome.find({})
    res.status(200).json(result);
  } catch (error) {
    console.error('Error in getting all the Income transactions',error);
    res.status(500).json({success : false,error : 'Internal Server Error'});    
  }
}


//adds total income : for initialising to 0
const addIncome = async(req,res)=>{
  try {
    const { category, amount } = req.body;
    const newIncome = new TotIncome({
      category : category,
      amount : amount
    });
    await newIncome.save();
    res.status(200).json(newIncome);
  } catch (error) {
    console.error('Error adding total income:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });   
  }
};

const getWeeklySumByCategory=async(req, res)=>{
  try {
    // Fetch all transactions from the transaction model
    const transactions = await Transaction.find();

    // Transform the transactions to include the desired fields
    const transformedTransactions = transactions.map((transaction) => {
      // Calculate the week number based on the transaction's date
      const transactionDate = new Date(transaction.date);
      const weekNumber = Math.ceil(
        ((transactionDate - new Date(transactionDate.getFullYear(), 0, 1)) / 86400000 +
          new Date(transactionDate.getFullYear(), 0, 1).getDay() +
          1) /
          7
      );

      // Extract the desired fields from the transaction object
      const { amount, category, day } = transaction;

      // Return the transformed transaction object
      return { amount, category, weekNumber, day };
    });

    // Send the transformed transactions as the response
    res.json(transformedTransactions);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
  // try {
  //   const startDate = new Date(); // Set the start date to the current date
  //   startDate.setDate(startDate.getDate() - 7); // Subtract 7 days to get the start of the week

  //   const endDate = new Date(); // Set the end date to the current date

  //   const result = await Transaction.aggregate([
  //     {
  //       $match: {
  //         date: {
  //           $gte: startDate,
  //           $lte: endDate
  //         }
  //       }
  //     },
  //     {
  //       $group: {
  //         _id: {
  //           category: '$category',
  //           week: { $week: '$date' }
  //         },
  //         totalAmount: { $sum: '$amount' }
  //       }
  //     },
  //     {
  //       $project: {
  //         _id: 0,
  //         category: '$_id.category',
  //         week: '$_id.week',
  //         totalAmount: 1
  //       }
  //     }
  //   ]);

  //   res.json(result);
  // } catch (error) {
  //   res.status(500).json({ error: 'An error occurred' });
  // }
}


module.exports = {
    createTransaction,
    deleteTransaction,
    getCategoryWiseAmountSum,
    getTotalAmount,
    getTotalIncome,
    addIncome,
    getAllTransactions,
    getAllIncomeTransactions,
    getWeeklySumByCategory
}
