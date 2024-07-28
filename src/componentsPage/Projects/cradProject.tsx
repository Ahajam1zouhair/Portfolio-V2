import { useSelector } from "react-redux";
import "../Index/stayle/card.css";
import { useEffect } from "react";
import Aos from "aos";
import { FaExternalLinkAlt } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";
import { CarouselProject } from "./Carousel";
import { DataProject } from "./dataProject";
import { RootState } from "../../Redux/store";


interface CardprojectAllProps {
  filterName: string; // Define the type for filterName
}
export default function CardprojectAll({ filterName  } :CardprojectAllProps) {
  const value = useSelector((state: RootState) => state.mode.value);
  useEffect(() => {
    Aos.init();
  }, []);

  const filteredProjects =
    filterName === "all"
      ? DataProject
      : DataProject.filter((project) => project.type.includes(filterName));
  return (
    <>
      <div className="flex flex-wrap   justify-center">
        {filteredProjects
          .filter((outil) => outil)
          .map((tab) => (
            <div className="w-full md:w-5/12  md:px-2  mb-4 flex flex-wra justify-center" data-aos="zoom-in">
              <Dialog.Root>
                <Dialog.Trigger>
                  <div className="card">
                    <div className="container">
                      <div className="px-4 py-4 ">
                        <div className="mb-8 flex flex-wrap justify-end ">
                          <FaExternalLinkAlt className="icon" />
                        </div>
                        <h2
                          className={` font-extrabold mt-8   text-center md:text-xl px-4  col ${
                            value ? `text-darck` : `  text-white `
                          } `}
                        >
                          {tab.title}
                        </h2>
                        <div className="flex  justify-center mb-5">
                          <img src={tab.src} alt="" className=" w-4/6  md:h-52 " />
                        </div>
                        <div className="flex  justify-center mb-5 text-sm md:text-xl  h-1/3">
                          {tab.Outils.map((outil) => (
                            <p
                              key={outil}
                              className={`w-auto text-center   rounded-xl border p-2 mr-2 ${
                                value ? ` text-darck` : `text-white`
                              } `}
                            >
                              {outil}
                            </p>
                          ))}
                        </div>
                        <p
                          className={` text-sm md:text-xl px-2 ${
                            value ? ` text-darck` : `text-white`
                          } `}
                        >
                          {tab.introduction}
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 w-full  bg-black opacity-40  " />
                  <Dialog.Content className="fixed  md:max-w-4xl  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full  max-w-lg mx-auto px-4 z-50 mt-10 md:mt-20 h-dvh overflow-auto touch-pan-y">
                    <div className="bg-white rounded-md shadow-lg">
                      <div className="flex items-center justify-between p-4 border-b">
                        <Dialog.Title className="text-lg font-medium text-gray-800 ">
                          {tab.title}
                        </Dialog.Title>
                        <Dialog.Close className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mx-auto"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Dialog.Close>
                      </div>
                      <Dialog.Description className=" p-4 text-sm md:text-xl">
                        {tab.description}

                        <CarouselProject images={tab.images} />
                      </Dialog.Description>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          ))}
          
      </div>
    </>
  );
}
