import { useSelector } from "react-redux";
import "./stayle/card.css";
import { useEffect } from "react";
import Aos from "aos";
import { FaCode } from "react-icons/fa";
import { PiBrowser } from "react-icons/pi";
import { SiBackendless } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";
import { RootState } from "../../Redux/store";

export default function MyServices() {
  const value = useSelector((state: RootState) => state.mode.value);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div
          className="w-full md:w-6/12  md:px-2  mb-4"
          data-aos="zoom-in-down"
        >
          <div className="card">
            <div className="container">
              <div className="px-4 py-4 ">
                <div className="mb-8 ">
                  <FaCode className="icons" />
                </div>
                <h4
                  className={`text-2xl  font-semibold mb-4 ${
                    value ? ` text-darck` : `text-white`
                  } font-semibold`}
                >
                  FRONTEND
                </h4>
                <p
                  className={`md:text-lg  ${
                    value ? ` text-darck` : `text-white`
                  } `}
                >
                  Crafting visually appealing and highly responsive user
                  interfaces. I specialize in creating seamless and interactive
                  web experiences that captivate users and provide intuitive
                  navigation. Utilizing the latest technologies, I ensure that
                  every website is optimized for performance and accessibility
                  across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-6/12  md:px-2  mb-4"
          data-aos="zoom-in-down"
        >
          <div className="card">
            <div className="container">
              <div className="px-4 py-4 ">
                <div className="mb-8 ">
                  <SiBackendless className="icons" />
                </div>
                <h4
                  className={`text-2xl  font-semibold mb-4 ${
                    value ? ` text-darck` : `text-white`
                  } font-semibold`}
                >
                  BACKEND
                </h4>
                <p
                  className={`md:text-lg  ${
                    value ? ` text-darck` : `text-white`
                  } `}
                >
                  Building robust and scalable server-side applications. I
                  design and implement efficient backend systems that power
                  dynamic and data-driven websites and applications. With a
                  focus on security, performance, and scalability, I ensure that
                  your application runs smoothly and can handle increased
                  traffic and data loads.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-6/12  md:px-2  mb-4"
          data-aos="zoom-in-down"
        >
          <div className="card">
            <div className="container">
              <div className="px-4 py-4 ">
                <div className="mb-8 ">
                  <GrHostMaintenance className="icons" />
                </div>
                <h4
                  className={`text-2xl  font-semibold mb-4 ${
                    value ? ` text-darck` : `text-white`
                  } font-semibold`}
                >
                  Maintenance
                </h4>
                <p
                  className={` md:text-lg  ${
                    value ? ` text-darck` : `text-white`
                  } `}
                >
                  Providing ongoing support and maintenance for websites and
                  applications. I offer comprehensive services to ensure your
                  digital platforms remain up-to-date, secure, and functional.
                  From regular updates and bug fixes to performance
                  optimizations, I am committed to keeping your website or
                  application running at its best.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-6/12  md:px-2  mb-4"
          data-aos="zoom-in-down"
        >
          <div className="card">
            <div className="container">
              <div className="px-4 py-4 ">
                <div className="mb-8 ">
                  <PiBrowser className="icons" />
                </div>
                <h4
                  className={`text-2xl  font-semibold mb-4 ${
                    value ? ` text-darck` : `text-white`
                  } font-semibold`}
                >
                  UI UX DESIGN
                </h4>
                <p
                  className={`md:text-lg  ${
                    value ? ` text-darck` : `text-white`
                  } `}
                >
                  Designing user-centered interfaces that combine aesthetics and
                  usability. I focus on creating intuitive and engaging user
                  experiences that enhance satisfaction and drive interaction.
                  Through careful planning and attention to detail, I ensure
                  that every design decision aligns with the goals of your
                  project and the needs of your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
