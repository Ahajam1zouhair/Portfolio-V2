import { useSelector } from "react-redux";
import Button from "./componentsPage/Layouts/Button";
import NavBar from "./componentsPage/Layouts/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./componentsPage/Layouts/footer";
import "aos/dist/aos.css";

// import Home from "./Page/Home";
// import About from "./Page/About";
// import Projects from "./Page/Projects";
// import Contact from "./Page/contact";
import { RootState } from "./Redux/store";
import React from "react";
import Loading from "./componentsPage/loading/loading";

const HomeLoding = React.lazy(() => import("./Page/Home"));
const AboutLoding = React.lazy(() => import("./Page/About"));
const ProjectsLoding = React.lazy(() => import("./Page/Projects"));
const ContactLoding = React.lazy(() => import("./Page/contact"));

function App() {
  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <div className={value ? `bg-zinc-100` : `bg-rgb`}>
      <BrowserRouter>
        <NavBar />
        <Button />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <HomeLoding />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<Loading />}>
                <AboutLoding />
              </React.Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <React.Suspense fallback={<Loading />}>
                <ProjectsLoding />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense fallback={<Loading />}>
                <ContactLoding />
              </React.Suspense>
            }
          />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
