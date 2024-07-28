import { useSelector } from "react-redux";
import Button from "./componentsPage/Layouts/Button";
import NavBar from "./componentsPage/Layouts/NavBar";
import Home from "./Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./componentsPage/Layouts/footer";
import "aos/dist/aos.css";
import About from "./Page/About";
import Projects from "./Page/Projects";
import Contact from "./Page/contact";
import { RootState } from "./Redux/store";

function App() {
  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <div className={value ? `bg-zinc-100` : `bg-rgb`}>
      <BrowserRouter>
        <NavBar />
        <Button />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
