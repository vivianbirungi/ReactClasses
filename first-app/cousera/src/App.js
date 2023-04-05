import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/main";
import About from "./components/about";
import NotFound from "./components/notfound";
import Contact from "./components/contact";
import Category from "./components/category";
import Entertainment from "./components/Entertainment";
import Grocery from "./components/Grocery";
import Utilities from "./components/Utilities";

import CreationExpenseForm from "./components/creation";
import Expense from "./components/expense";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Category />}>
          <Route path="utilities" element={<Utilities />} />
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="grocery" element={<Grocery />} />
        </Route>
        <Route path="/expenses" element={<Expense />} />
        <Route path="/create" element={<CreationExpenseForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
{
  /* <Route path="users/*" element={</>} /> */
}

export default App;
