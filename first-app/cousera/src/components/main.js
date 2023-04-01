import React, { useState } from "react";
import CreationExpenseForm from "./creation";
import Expense from "./expense";
import Category from "./category";
import { Link } from "react-router-dom";

function MainPage() {
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
      <ul>
        <li>
          <Link to="/about"> Move to about</Link>
        </li>
      </ul>
      <CreationExpenseForm action={getExpenses} />
      <Expense data={expenses} />
      <Category cat={categories} />
    </>
  );
}
export default MainPage;
