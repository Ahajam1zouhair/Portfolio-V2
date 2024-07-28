"use client";
import React from "react";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { cn } from "../../lib/utils";
import { RootState } from "../../Redux/store";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <div
      className={cn(
        "relative flex min-h-screen  flex-col items-center justify-center overflow-hidden  w-full rounded-md z-0 -mb-48",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic to-text via-transparent  text-white [--conic-position:from_70deg_at_center_top]"
        >

        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
         
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-text text-white [--conic-position:from_290deg_at_center_top]"
        >
        </motion.div>
   
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-text blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-text "
        ></motion.div>

        <div className={`absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-rgb ${ value ?   `bg-zinc-100` : `bg-rgb`} `}></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
