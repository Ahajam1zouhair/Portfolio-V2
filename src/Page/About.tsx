import { useEffect } from "react";
import Chat from "../componentsPage/About/chat";
import Index from "../componentsPage/About/Index";
import Timeline from "../componentsPage/About/Timeline";
import Aos from "aos";
export default function About() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
    Aos.init();
  }, []);
  return (
    <div>
      <section className="py-8">
        <div className="max-w-screen-xl text-4xl text-gray-800 mx-auto  md:px-8 ">
          <div
            className="flex justify-center min-h-screen  flex-col mt-8 "
            data-aos="fade-up"
          >
            <Index />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <Timeline />
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Chat />
          </div>
        </div>
        <div
          className="absolute   inset-0    max-w-md mx-auto h-72 blur-[118px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
          }}
        ></div>
      </section>
    </div>
  );
}
