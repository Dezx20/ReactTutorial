import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  // const [title, setTitle] = useState("");
  // const inputState = useState({
  //   title: "",
  //   amount: "",
  // });
  // const [inputState, setInputState] = useState({ title: "", amount: "" });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              // value={inputState[0].title}
              // value={inputState.title}
              value={enteredTitle}
              onChange={(event) => {
                const newTitle = event.target.value;
                // inputState[1]((prevInputState) => ({
                // setInputState((prevInputState) => ({
                //   title: newTitle,
                //   amount: prevInputState.amount,
                // }));
                setEnteredTitle(newTitle);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              // value={inputState[0].amount}
              // value={inputState.amount}
              value={enteredAmount}
              onChange={(event) => {
                const newAmount = event.target.value;
                // setInputState((prevInputState) => ({
                //   // inputState[1]((prevInputState) => ({
                //   amount: newAmount,
                //   title: prevInputState.title,
                // }));
                setEnteredAmount(newAmount);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
