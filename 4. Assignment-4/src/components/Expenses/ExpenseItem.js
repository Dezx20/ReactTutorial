import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseAmount = props.amount;
  const [expenseTitle, setExpenseTitle] = useState(props.title);
  const clickHandler = () => {
    setExpenseTitle("updated!");
    // console.log(expenseTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
        <button onClick={clickHandler}>button</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
