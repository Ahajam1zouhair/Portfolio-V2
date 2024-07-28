import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

export default function IconsContact() {
  const value = useSelector((state: RootState) => state.mode.value);
  const contact = [
    {
      icon: (
        <FiPhone
          style={{ width: "70px", height: "70px", color: "white" }}
          className=" px-3 md:mr-3 border-2  rounded-full border-text bg-text"
        />
      ),
      title: "Phone",
      description: "+212 612-161736",
      href: "tel:+212 612-161736",
    },
    {
      icon: (
        <MdOutlineMailOutline
          style={{ width: "70px", height: "70px", color: "white" }}
          className=" px-3 md:mr-3 border-2  rounded-full border-text bg-text"
        />
      ),
      title: "Email",
      description: "ahajamzouhair@gmail.com",
      href: "mailto:ahajamzouhair@gmail.com",
    },
    {
      icon: (
        <CiLocationOn
          style={{ width: "70px", height: "70px", color: "white" }}
          className=" px-3 md:mr-3 border-2  rounded-full border-text bg-text"
        />
      ),
      title: "Address",
      description: "HAY NAHADA BLOC A,DRARGA,AGADIR",
      href: "#",
    },
  ];
  return (
    <section className="py-20">
      {contact.map((item, idx) => (
        <div className="flex items-center  mb-8 px-7">
          <div key={idx} className="flex items-center ">
            {item.icon}
            <div className="ml-4">
              <h2
                className={`text-lg md:text-2xl  ${
                  value ? `text-stone-800` : `text-white `
                }`}
              >
                {item.title}
              </h2>
              <a
                href={item.href}
                className={`text-sm md:text-2xl  font-semibold ${
                  value ? `text-stone-800` : `text-white `
                }`}
              >
                {item.description}
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
