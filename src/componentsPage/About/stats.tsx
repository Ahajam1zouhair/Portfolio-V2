import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

export default function Stats() {
  const value = useSelector((state: RootState) => state.mode.value);
  const stats = [
    {
      data: 2,
      title: "Years of Experience",
    },
    {
      data: 8,
      title: "Project Completed ",
    },
    {
      data: 10,
      title: "Happy Clients",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
          {stats.map((item, idx) => (
            <li key={idx} className="text-center  ">
              <h4
                className={`font-semibold ${
                  value ? `text-text` : `text-white	`
                }`}
              >
                <CountUp start={0} end={item.data} duration={2} delay={2}  /> +
              </h4>
              <p
                className={`text-lg md:text-xl font-semibold ${
                  value ? `text-text` : `text-white	`
                }`}
              >
                {" "}
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
{
  /* <div className="ml-4">
        <h1 className="font-mono text-5xl text-red-700 md:flex  justify-center items-center ">
          <CountUp start={8} end={2} duration={1} delay={1} />
        </h1>
        <p  className={`text-lg md:text-xl font-semibold ${
              value ? `text-stone-800` : `text-white	`
            }`}>Years of experience</p>
      </div>
      <div className="ml-4">
        <h1 className="font-mono text-5xl text-red-700 md:flex  justify-center items-center ">
          <CountUp start={0} end={6} duration={1} delay={1} />
        </h1>
        <p  className={`text-lg md:text-xl font-semibold ${
              value ? `text-stone-800` : `text-white	`
            }`}>Projects Complete</p>
      </div> */
}
