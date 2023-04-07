const express = require("express");

const {
  addExpense,
  getExpenses,
  updateExpense,
  removeExpense,
} = require("../controller/expense");

const router = express.Router();

router.post("/add-expense", addExpense);

router.get("/getAll-expense", getExpenses);

router.put("/update-expense/:id", updateExpense);

router.delete("/delete-expense/:id", removeExpense);

module.exports = router;
