import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../Redux/store";

export default function NavBar() {
  const value = useSelector((state: RootState) => state.mode.value);

  return (
    <div className="flex justify-center">
      <nav
        className={`flex space-x-2 mx-2 md:w-3/6 w-11/12  text-white mt-4  h-12 md:h-16  border-2 rounded-full fixed  z-50 transition-all  ${
          value ? "bg-zinc-100 border-black" : " bg-rgb border-accent"
        }`}
      >
        <Link
          to="/"
          className={`basis-0 hover:scale-110 px-1   transition-all grow font-extrabold inline-flex justify-center items-center gap-2 text-center text-sm md:text-xl  rounded-lg ${
            value ? "text-black" : "text-white"
          }`}
          aria-current="page"
        >
          Home
        </Link>
        <Link
          className={`basis-0 hover:scale-110 px-1  transition-all grow font-extrabold inline-flex justify-center items-center gap-2 text-center text-sm md:text-xl rounded-lg ${
            value ? "text-black" : "text-white"
          }`}
          to="about"
        >
          About
        </Link>
        <Link
          className={`basis-0 hover:scale-110 px-1  transition-all grow font-extrabold inline-flex justify-center items-center gap-2 text-center text-sm md:text-xl rounded-lg ${
            value ? "text-black" : "text-white"
          }`}
          to="projects"
        >
          Projects
        </Link>
        <Link
          className={`basis-0 hover:scale-110 px-1  transition-all grow font-extrabold inline-flex justify-center items-center gap-2 text-center text-sm md:text-xl rounded-lg ${
            value ? "text-black" : "text-white"
          }`}
          to="contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
