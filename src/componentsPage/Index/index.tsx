import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./stayle/deer.css";
import Aos from "aos";
import "aos/dist/aos.css"; // Ensure you import the AOS CSS
import { DockDemo } from "./DockDemo";
import { RootState } from "../../Redux/store";

export default function Index() {
  const value = useSelector((state: RootState) => state.mode.value);
  const [text] = useTypewriter({
    words: ["Zouhair Ahajam", "Developer Full Stack"],
    typeSpeed: 200,
  });

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="">
      <main className="flex items-center justify-center min-h-screen  flex-col mt-20 md:mt-15">
        <div className="avatar">
          <div className="w-32 rounded-full bg-white mb-4">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTmqtskMNv9eMqcdAgPx74DhB2W2mpzeDcWrZNDhTV5FxYOlSP"
              alt="Avatar"
            />
          </div>
        </div>
        <p
          className={`flex items-center font-medium mb-4 ${
            value ? "text-black" : "text-white"
          }`}
        >
          👋 Hi, Welcome There!
        </p>
        <h1
          className={`text-2xl font-bold md:text-5xl ${
            value ? "text-black" : "text-white"
          }`}
        >
          I'm
          <span
            className={`opacity-80 text-2xl font-bold md:text-5xl ${
              value ? "text-text" : "text-white"
            }`}
          >
            {" "}
            {text}
          </span>
          <span className="Cursor">
            <Cursor cursorColor="#06b6d4" cursorStyle="|" />
          </span>
        </h1>
        <p
          className={`md:text-2xl w-11/12 md:w-6/12 mt-10 ${
            value ? "text-black" : "text-white"
          }`}
        >
           I'm a full-stack developer with a passion for creating seamless
          and innovative digital experiences. Skilled in both front-end and
          back-end development, I am dedicated to building responsive and
          high-performing websites and applications. With a strong foundation in
          a variety of technologies, I bring creativity, precision, and a
          problem-solving approach to every project. Let's collaborate to
          transform your ideas into reality.
        </p>
        <div>
          <a className="Download-button mt-12 " href="ZOUHAIR-AHAJAM.pdf"   target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 640 512"
            >
              <path
                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                fill="white"
              ></path>
            </svg>
            <span>Download CV</span>
          </a>
        </div>

        <div className="mt-4">
          <DockDemo />
        </div>
      </main>
    </section>
  );
}
