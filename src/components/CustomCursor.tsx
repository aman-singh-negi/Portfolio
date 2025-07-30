import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const updateHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button, a, input, textarea, select, label") ||
        getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    document.addEventListener("mouseover", updateHover);
    document.addEventListener("mouseout", updateHover);
    return () => {
      document.removeEventListener("mouseover", updateHover);
      document.removeEventListener("mouseout", updateHover);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x - 6,
        y: mousePosition.y - 6,
        scale: isHoveringInteractive ? 2 : 1,
        boxShadow: isHoveringInteractive
          ? "0 0 12px rgba(255, 255, 255, 0.7)"
          : "none",
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.1,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: "#fff",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
