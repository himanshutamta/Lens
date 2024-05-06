"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const HoverEffect = ({ text }: { text: string }) => {
  const [hover, setHover] = useState(true);
  return (
    <button
      className="relative h-12 w-[150px] text-center flex justify-center items-center  text-white bg-primary/90 border border-transparent rounded-lg text-xl"
      onMouseEnter={() => setHover(!hover)}
    >
      <AnimatePresence>
        {hover && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
            }}
            className="absolute  "
          >
            {text}
          </motion.h2>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {hover ? (
          ""
        ) : (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
            }}
            className="absolute "
          >
            {text}
          </motion.h2>
        )}
      </AnimatePresence>
    </button>
  );
};

export default HoverEffect;
