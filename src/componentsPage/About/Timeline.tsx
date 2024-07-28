import { useSelector } from "react-redux";
import { PiBriefcaseThin } from "react-icons/pi";
import { RootState } from "../../Redux/store";
export default function Timeline() {
  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <>
      <h2
        className={`text-2xl font-extrabold mt-8 md:mt-0 text-center md:text-4xl px-4  col ${
          value ? `colwhite` : ` coldarck `
        } `}
      >
        <span className="text-cyan-700  ">&lt;</span>My Resume
        <span className="text-cyan-700">/&gt;</span>
      </h2>
      <div className=" gap-12 md:flex marker:justify-center ">
        <div className="flex-none space-y-5 px-4 mt-8 ">
          <h2
            className={`text-xl md:text-2xl font-extrabold   ${
              value ? ` text-darck` : `text-white`
            } `}
          >
            Education
          </h2>
          <div>
            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.7px] after:bg-accent "></div>
              <div className="grow pt-0.5 pb-8">
                <p className="mt-1 text-sm text-gray-600 font-semibold dark:text-neutral-400"></p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-accent  dark:after:bg-accent  ">
                <div className="relative z-10  flex justify-center items-center">
                  <svg
                    className="text-accent "
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                  </svg>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <p className="mt-1 text-xl  font-semibold text-accent">
                  october 2022 - Juillet 2024.
                </p>
                <h3
                  className={`flex gap-x-1.5 font-semibold text-xl text-gray-800 dark:text-white ${
                    value ? ` text-darck` : `text-white`
                  } `}
                >
                  I went to study digital development
                </h3>
                <a
                  href="https://www.cmc.ac.ma/" target="_blank"
                  className="mt-1 text-lg font-semibold  text-blue-700"
                >
                  at Cités des Métiers et des Compétences (CMC)
                </a>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-accent dark:after:bg-accent  ">
                <div className="relative z-10  flex justify-center items-center">
                  <svg
                    className="text-accent  "
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                  </svg>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <p className="mt-1 text-xl  font-semibold text-accent">
                  June 2022.
                </p>
                <h3
                  className={`flex gap-x-1.5 font-semibold text-xl text-gray-800 dark:text-white ${
                    value ? ` text-darck` : `text-white`
                  } `}
                >
                  Baccalaureate in physical sciences
                </h3>
                <p className="mt-1 text-lg font-semibold  text-blue-700">
                  Haj Saeed high School
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none space-y-5 px-4 mt-8 ">
          <h2
            className={`text-2xl font-extrabold  ${
              value ? ` text-darck` : `text-white`
            } `}
          >
            Experience
          </h2>
          <div>
            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.7px] after:bg-accent "></div>
              <div className="grow pt-0.5 pb-8">
                <p className="mt-1 text-sm text-gray-600 font-semibold dark:text-neutral-400"></p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-accent  dark:after:bg-accent  ">
                <div className="relative z-10  flex justify-center items-center text-accent ">
                  {/* <svg
                   
                    stroke="currentColor" className="text-accent "
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                  </svg> */}
                  <PiBriefcaseThin />
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <p className="mt-1 text-xl  font-semibold text-accent">
                  April 2024 - juin 2024.
                </p>
                <h3
                  className={`flex gap-x-1.5 font-semibold text-xl text-gray-800 dark:text-white ${
                    value ? ` text-darck` : `text-white`
                  } `}
                >
                  the first internship in the company viralwave
                </h3>
                <a
                  href="https://www.viralwave.agency"  target="_blank"
                  className="mt-1 text-lg font-semibold 
                  text-blue-700"
                >
                  viralwave
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
