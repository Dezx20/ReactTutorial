import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    const title = event.target.value;
    setEnteredTitle(title);

    /*
    This below method may lead to unknown state updation as we depends on prev-State
    */
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: title,
    // });
    /*
     This below method resolve the above issue.
    */
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: title };
    // });
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    const amount = event.target.value;
    setEnteredAmount(amount);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: amount,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: amount };
    // });
  };
  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    const date = event.target.value;
    setEnteredDate(date);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: date,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: date };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    if (enteredAmount && enteredDate && enteredTitle)
      props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
