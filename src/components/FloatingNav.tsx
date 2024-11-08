// /components/FloatingNav.tsx
"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("Home");

  // Show/Hide FloatingNav based on scroll direction
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0); // Show on upward scroll, hide on downward
      }
    }
  });

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border-[1px] border-gray-200 rounded-full bg-white shadow-md py-1 px-1 z-[5000] items-center justify-center space-x-4",
            className
          )}
        >
         
          {navItems.map((navItem, idx) => (
            <div
              key={idx}
              onClick={() => handleLinkClick(navItem.name)}
              className={cn(
                "font-semibold cursor-pointer text-[16px] py-2 px-6 max-md:px-[15px] max-md:py-2 rounded-full transition-all duration-300 ease-in-out transform",
                activeLink === navItem.name
                  ? "bg-gray-100 text-gray-900"
                  : "bg-transparent text-gray-400"
              )}
            >
              <Link href={navItem.link}>
                <span className="flex items-center">
                  {navItem.icon && <span className="mr-2">{navItem.icon}</span>}
                  <span>{navItem.name}</span>
                </span>
              </Link>
            </div>
          ))}
         
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
