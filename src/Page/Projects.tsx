import { useSelector } from "react-redux";
import TabsProjects from "../componentsPage/Projects/tabs";
import { useEffect } from "react";
import { RootState } from "../Redux/store";

export default function Projects() {
  const value = useSelector((state: RootState) => state.mode.value);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <section className="py-20">
      <h2
        className={`text-2xl font-extrabold mt-8   text-center md:text-4xl px-4  col ${
          value ? `colwhite` : ` coldarck `
        } `}
      >
        <span className="text-cyan-700  ">&lt;</span>MY SERVICES{" "}
        <span className="text-cyan-700">/&gt;</span>
      </h2>
      <div className="py-20">
        <TabsProjects />
      </div>
    </section>
  );
}
