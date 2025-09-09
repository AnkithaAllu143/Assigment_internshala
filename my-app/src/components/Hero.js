import React from "react";
import HeroDots from "./HeroDots"; 
import "./../styles.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <HeroDots />
      </div>
      <div className="hero-right">
        <h1>
          Design <br />
          Transform <br />
          Accelerate
        </h1>
        <p>
          Redefining user experiences through <br />
          Behavioural Science & AI
        </p>
      </div>
    </section>
  );
}
