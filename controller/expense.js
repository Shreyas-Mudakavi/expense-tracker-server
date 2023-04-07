const Expenses = require("../models/Expense");

exports.addExpense = async (req, res, next) => {
  const { description, amount, date } = req.body;

  console.log("description ", description);

  try {
    const newExpense = new Expenses({
      description: description,
      amount: amount,
      date: date,
    });

    const savedExpense = await newExpense.save();
    res.status(200).json(savedExpense);
  } catch (error) {
    console.log("err from add expense server ", error);
    res.status(500).json({ msg: "Error from server!" });
  }
};

exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expenses.find();

    res.status(200).json(expenses);
  } catch (error) {
    console.log("err from get expenses server ", error);
    res.status(500).json({ msg: "Error from server!" });
  }
};

exports.updateExpense = async (req, res, next) => {
  const { description, date, amount } = req.body;

  try {
    const updatedExpense = await Expenses.findByIdAndUpdate(
      req.params.id,
      {
        description,
        amount,
        date,
      },
      { new: true }
    );

    res.status(200).json(updatedExpense);
  } catch (error) {
    console.log("err from update expenses server ", error);
    res.status(500).json({ msg: "Error from server!" });
  }
};

exports.removeExpense = async (req, res, next) => {
  try {
    const deletedExpense = await Expenses.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedExpense);
  } catch (error) {
    console.log("err from delete expenses server ", error);
    res.status(500).json({ msg: "Error from server!" });
  }
};
