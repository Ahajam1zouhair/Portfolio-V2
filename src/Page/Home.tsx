import { useSelector } from "react-redux";
import Index from "../componentsPage/Index";
import MyServices from "../componentsPage/Index/myServices";
import { IconCloudDemo } from "../componentsPage/Index/MySkills";
import Aos from "aos";
import { useEffect } from "react";
import Works from "../componentsPage/Index/works";
import { LampDemo } from "../componentsPage/Index/LampDemo";
import { RootState } from "../Redux/store";


export default function Home() {
  const value = useSelector((state: RootState) => state.mode.value);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
    Aos.init();
  }, []);

  return (
    <div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Index />
      </div>

      <div className="mb-12">
        <Works />
      </div>

      <div className="max-w-screen-xl mx-auto  rounded-t-full   ">
        <h2
          className={`text-2xl font-extrabold mt-8   text-center md:text-4xl px-4  col ${
            value ? `colwhite` : ` coldarck `
          } `}
        >
          <span className="text-cyan-700  ">&lt;</span>MY SERVICES{" "}
          <span className="text-cyan-700">/&gt;</span>
        </h2>
        <div
          className={`max-w-screen-xl mx-auto px-4 py-12 md:py-24 gap-12   col-start-2  md:px-8 items-center justify-center `}
        >
          <MyServices />
        </div>
      </div>
      <LampDemo />
      <div className={` mx-auto gap-12  md:px-8 md:flex   justify-center  `}>
        <div data-aos="zoom-in-right" data-aos-duration="3000">
          <IconCloudDemo />
        </div>
      </div>
      <div
        className="absolute   inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
      
    </div>
  );
}
