import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const navigate = useNavigate();
  const [expenses, setExpense] = useState([
    { expenseName: "Water", category: "Utilities", amount: 10000 },
    { expenseName: "Milk", category: "Grocery", amount: 1600 },
    { expenseName: "Electricity", category: "Utilities", amount: 16000 },
  ]);
  const categories = ["Grocery", "Utilities", "Entertainment"];

  const getExpenses = (values) => {
    console.log(...expenses, ...values);
    //create a new array and add all the data in it
    const newArray = [...expenses, ...values];
    //set the array to the new array
    setExpense(newArray);
  };
  return (
    <>
      <button onClick={() => navigate("/create")}>Create Expenses</button>
      <button onClick={() => navigate("/expenses")}>View Expenses</button>
      <button onClick={() => navigate("/categories")}>View categories</button>
    </>
  );
}
export default MainPage;
