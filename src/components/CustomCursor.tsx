import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
      }
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
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: isHoveringInteractive ? 20 : 10,
        height: isHoveringInteractive ? 20 : 10,
        borderRadius: "50%",
        backgroundColor: "#fff",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
        transition: "width 0.15s ease, height 0.15s ease, box-shadow 0.15s ease",
        boxShadow: isHoveringInteractive
          ? "0 0 12px rgba(255, 255, 255, 0.7)"
          : "none",
        transform: "translate3d(0, 0, 0)",
      }}
    />
  );
};

export default CustomCursor;
