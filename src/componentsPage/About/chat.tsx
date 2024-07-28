import { useSelector } from "react-redux";
import SparklesText from "../../components/magicui/sparkles-text";
import { RootState } from "../../Redux/store";


export default function Chat() {
  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <div className="flex flex-col  mt-20 px-4">
      <p
        className={`text-lg md:text-2xl  py-4 ml-7  ${
          value ? `text-stone-800` : `text-white `
        }`}
      >
         Want to start a project?
      </p>
      <h2   className={`text-4xl md:text-8xl font-extrabold    text-center   col ${
              value ? `colwhite` : ` coldarck `
            } `} > Let 's have a chat</h2>
      <a
       
      >
        
      </a>
      <a
        href="mailto:ahajamzouhair@gmail.com"
        className={`text-lg md:text-2xl  py-4 ml-7 flex justify-end   ${
          value ? `text-stone-800` : `text-white `
        }`}
      >
        
        <SparklesText text="ahajamzouhair@gmail.com" />
      </a>
    </div>
  );
}




