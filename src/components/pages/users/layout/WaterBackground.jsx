import React, { useEffect } from "react";

export default function WaterBackground() {
  useEffect(() => {
    const root = document.documentElement;

    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      root.style.setProperty("--water-x", `${x}%`);
      root.style.setProperty("--water-y", `${y}%`);
      root.style.setProperty("--water-active", "1");
    };

    const handlePointerLeave = () => {
      root.style.setProperty("--water-active", "0");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="water-background" aria-hidden="true">
      <span className="water-layer water-layer-one" />
      <span className="water-layer water-layer-two" />
      <span className="water-pointer-ripple" />
    </div>
  );
}
