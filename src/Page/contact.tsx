import { useSelector } from "react-redux";
import FomrContact from "../componentsPage/Contact/formContact";
import IconsContact from "../componentsPage/Contact/IconsContact";
import Aos from "aos";
import { useEffect } from "react";
import { RootState } from "../Redux/store";

export default function Contact() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
    Aos.init();
  }, []);

  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <section className="py-20" data-aos="fade-up">
      <h2
        className={`text-2xl font-extrabold mt-8 md:mb-8   text-center md:text-4xl px-4  col ${
          value ? `colwhite` : ` coldarck `
        } `}
      >
        <span className="text-cyan-700  ">&lt;</span>CONTACT ME{" "}
        <span className="text-cyan-700">/&gt;</span>
      </h2>
      <div className="w-full  px-2  md:mb-4 md:flex flex-wra justify-center">
        <FomrContact />
        <div
          className="py-20"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <IconsContact />
        </div>
      </div>
    </section>
  );
}
