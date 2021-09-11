import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helper/Wrapper";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input.",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid Age.",
        message: "Please enter valid age (>0).",
      });
      return;
    }
    // console.log(nameInputRef.current.value);
    props.onAddUser(enteredName, enteredUserAge);
    // setEnterAge("");
    // setEnteredUserName("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    // <div>
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Year)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
    // </div>
  );
};

export default AddUser;
