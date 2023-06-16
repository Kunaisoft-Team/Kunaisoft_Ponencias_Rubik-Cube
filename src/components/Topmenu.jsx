import React from "react";
import "./topmenu.css";
import rubik2x2 from "../assets/img/rubik2x2.png";

export default function Topmenu() {
  return (
    <div>
      <div className="menuTop">
        <div className="logo">
          <img loading="lazy" src={rubik2x2} alt={rubik2x2} />
        </div>
        <li>
          <a href="#firstPart">First Part</a>
        </li>
        <li>
          <a href="#secondPart">Second Part</a>
        </li>
        <li>
          <a href="#thirdPart">Third Part</a>
        </li>
      </div>
    </div>
  );
}
