import React, { useEffect, useRef } from "react";
import "./../styles.css";

export default function HeroDots() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = svgRef.current;
    const NUM_DOTS = 30;
    const dots = [];

    for (let i = 0; i < NUM_DOTS; i++) {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", Math.random() * 200);
      circle.setAttribute("cy", Math.random() * 200);
      circle.setAttribute("r", 3);
      circle.setAttribute("class", "dot");
      svg.appendChild(circle);
      dots.push({ cx: parseFloat(circle.getAttribute("cx")), cy: parseFloat(circle.getAttribute("cy")), el: circle });
    }

    let animFrame;
    const animate = () => {
      dots.forEach((d) => {
        d.cx += (Math.random() - 0.5) * 0.5;
        d.cy += (Math.random() - 0.5) * 0.5;
        d.el.setAttribute("cx", d.cx);
        d.el.setAttribute("cy", d.cy);
      });
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <svg ref={svgRef} width="220" height="220" className="hero-dots-svg" />
  );
}
