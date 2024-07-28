import { useSelector } from "react-redux";
import Stats from "./stats";
import ImageProfile from "./imageProfile";
import { RootState } from "../../Redux/store";

export default function Index() {
  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <>
      <div
        className="text-gray-600 gap-x-40  md:flex   justify-between   z-20 border-2 rounded-xl   mt-8 md:mt-0"
        style={
          value
            ? {
                backgroundColor: "rgb(246, 243, 252)",
                borderColor: "rgb(217, 217, 217)",
              }
            : {
                backgroundColor: "rgb(24, 14, 32)",
                borderColor: "rgb(42, 20, 84)",
              }
        }
      >
        <div className="flex-none space-y-8 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h2
            className={`text-2xl font-extrabold mt-8   text-center md:text-4xl px-4  col ${
              value ? `colwhite` : ` coldarck `
            } `}
          >
            <span className="text-cyan-700  ">&lt;</span>About me
            <span className="text-cyan-700">/&gt;</span>
          </h2>
          <p
            className={`text-lg md:text-xl  ml-7  ${
              value ? `text-stone-800` : ` text-white	`
            }`}
          >
            I'm a  <span className="text-text font-extrabold">full-stack web developer</span> with over 1 year of
            experience in creating and maintaining web applications.
          </p>
          <p
            className={`text-lg md:text-xl  ml-7 py-2   ${
              value ? `text-stone-800` : `text-white  	`
            }`}
          >
            My expertise lies in developing visually engaging and responsive
            front-end designs that provide an optimal user experience. On the
            back-end, I ensure robust functionality and efficient data handling
            by managing development and databases proficiently. With a
            comprehensive understanding of both front-end and back-end
            technologies, I strive to deliver seamless and high-performing web
            solutions.
          </p>
        </div>
        <div className="flex-none  px-4 flex items-center justify-center  mt-14 md:mt-0">
          <ImageProfile />
        </div>
      </div>
      <div className="md:mt-10">
        <Stats />
      </div>
    </>
  );
}
