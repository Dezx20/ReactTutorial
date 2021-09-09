import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = function (props) {
  const expenses = props.expensesArray;
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    console.log("Express.js");
    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  };
  return (
    // <div>
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      >
        {" "}
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      >
        {" "}
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      >
        {" "}
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      >
        {" "}
      </ExpenseItem>
    </Card>
    // </div>
  );
};

export default Expenses;
