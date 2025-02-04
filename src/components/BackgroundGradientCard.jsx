import { cn } from "../lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradientCard = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div className={cn("relative p-[2px] rounded-lg group max-w-sm mx-auto", containerClassName)}>
      {/* Animated background with gradient */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
        className={cn(
          "absolute inset-0 rounded-lg opacity-80 blur-sm transition duration-500",
          "bg-gradient-to-br from-blue-500 via-indigo-300 to-blue-300"
        )}
      />
      
      {/* Content */}
      <div className={cn("relative z-10 p-6 bg-white rounded-lg shadow-md", className)}>
        {children}
      </div>
    </div>
  );
};
