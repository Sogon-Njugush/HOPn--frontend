"use client";
import { ArrowUp } from "lucide-react";
import React, { useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer hover:text-cyan-400 rounded-full bg-cyan-500 w-12 h-12 flex items-center justify-center text-white focus:outline-none"
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
