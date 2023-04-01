import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/main";
import About from "./components/about";
import NotFound from "./components/notfound";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/users/*" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
{
  /* <Route path="users/*" element={</>} /> */
}

export default App;
