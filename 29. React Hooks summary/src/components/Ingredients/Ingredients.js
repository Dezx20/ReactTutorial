import React, { useEffect, useCallback, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ig) => ig.id !== action.id);
    default:
      throw new Error("ingredientReducer Error");
  }
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...curHttpState, error: null };
    default:
      throw new Error("httpReducer Error");
  }
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    console.log("Rendering Ingredients");
  });

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = (ingredient) => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      "https://react-tutorial-8b4c3-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        return response.json();
      })
      .then((responseData) => {
        // setIngredients((prevIngredients) => [
        //   ...prevIngredients,
        //   { id: responseData.name, ...ingredient },
        // ]);
        dispatch({
          type: "ADD",
          ingredient: { id: responseData.name, ...ingredient },
        });
      })
      .catch((err) => {
        dispatchHttp({ type: "ERROR", errorMessage: err.message });
        // setError(err.message);
        // setIsLoading(false);
      });
  };
  const removeIngredientHandler = (ingredientId) => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://react-tutorial-8b4c3-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        // setIngredients((prevIngredients) =>
        //   prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
        // );
        dispatch({ type: "DELETE", id: ingredientId });
      })
      .catch((err) => {
        // setError(err.message);
        // setIsLoading(false);
        dispatchHttp({ type: "ERROR", errorMessage: err.message });
      });
  };

  const clearError = () => {
    // setError(null);
    dispatchHttp({ type: "CLEAR" });
  };

  return (
    <div className="App">
      {/* {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>} */}
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onLoadIngredient={filteredIngredientsHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
