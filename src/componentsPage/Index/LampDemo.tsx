"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

export function LampDemo() {
  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={`   bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ${
          value ? `colwhite` : ` coldarck `
        } `}
      >
        <span className="text-cyan-700  ">&lt;</span>MY Skills{" "}
        <span className="text-cyan-700">/&gt;</span>
      </motion.h1>
    </LampContainer>
  );
}
