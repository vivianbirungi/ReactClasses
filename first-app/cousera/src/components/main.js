import React from "react";
import CreationExpenseForm from "./creation";
import Expense from "./expense";
import Category from "./category";

const categories = ["Grocery", "Utilities", "Entertainment"];

const expenses = [
  { name: "Water", category: "Utilities", amount: 10000 },
  { name: "Milk", category: "Grocery", amount: 1600 },
  { name: "Electricity", category: "Utilities", amount: 16000 },
];
function MainPage() {
  return (
    <>
      <CreationExpenseForm />
      <Expense data={expenses} />
      <Category cat={categories}/>
    </>
  );
}
export default MainPage;
