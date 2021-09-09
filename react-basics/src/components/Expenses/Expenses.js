import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = function (props) {
  const expenses = props.expensesArray;
  const filterYearHandler = (filterYear) => {
    console.log("expenses component");
    console.log(filterYear);
  };
  return (
    <div>
      <ExpenseFilter onFilterYear={filterYearHandler} />
      <Card className="expenses">
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
    </div>
  );
};

export default Expenses;
