import { useState } from "react";
import video from "../assets/space.mp4";
import face from "../assets/face.png";
import SVGs from "./Footer";

import "../index.css";

const techStackList = [
  "reactJS",
  "bun",
  "vite",
  "tailwindcss",
  "VT323 google font",
  "Poppins google font",
];

export default function HeaderHome({ onPageChange }) {
  const [showBack, setShowBack] = useState(false);

  function handleFlipCard() {
    setShowBack((prev) => !prev);
  }

  let cardContent = (
    <>
      <div className="logo-icon-wrapper">
        <img src={face}></img>
      </div>
      <h1 className="card-title">// Jeshua Yates - Frontend Developer</h1>
      <div className="btn-wrapper">
        <button
          onClick={() => onPageChange("javascript")}
          className="button-light-pink"
        >
          javascript
        </button>
        <button
          onClick={() => onPageChange("react")}
          className="button-light-pink"
        >
          react
        </button>
        <button
          onClick={() => onPageChange("css")}
          className="button-light-pink"
        >
          css
        </button>
        <button
          onClick={() => onPageChange("python")}
          className="button-light-pink"
        >
          python
        </button>
      </div>
    </>
  );

  if (showBack) {
    cardContent = (
      <>
        <p className="text-3xl font-vt323">
          website tech stack = [
          <ul className="px-10">
            {techStackList.map((item) => (
              <li key={item}>{item},</li>
            ))}
          </ul>
          ]
        </p>
        <p className="pt-8 text-xl font-light text-darkGreen font-poppins">
          source code for website can be found on my{" "}
          <a className="font-bold underline" href="https://github.com/shuadev">
            github
          </a>
        </p>
      </>
    );
  }

  return (
    <>
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <div className="pink-container">{cardContent}</div>
        <div className="absolute mr-8 right-15 z-100 motion-safe:animate-bounce hover:animate-none">
          arrow
          <button className="button-dark-pink" onClick={handleFlipCard}>
            flip me
          </button>
        </div>

        <video
          autoPlay
          loop
          muted
          src={video}
          type="video/mp4"
          alt="background video of space"
        ></video>
      </div>
      <SVGs />
    </>
  );
}
