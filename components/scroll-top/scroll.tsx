"use client";

import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "10px",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        border: "none",
        padding: "8px", // Reduzido
        borderRadius: "50%",
        cursor: "pointer",
        display: isVisible ? "block" : "none",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        fontSize: "12px", // Reduzido
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <MdOutlineKeyboardArrowUp size={20} />
    </button>
  );
};
