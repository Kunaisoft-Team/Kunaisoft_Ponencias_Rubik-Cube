import React from "react";
import "./infocard.css";
import { Rubik3D } from "./Rubik3D";
export default function InfoCard({ img, text, clase, animation, id }) {
  return (
    <div className={`infoCard ${clase}`} id={id}>
      <div className={`infoImg`}>
        <img
          loading="lazy"
          src={img}
          alt={img}
          className={animation ? `displayNone` : `displayBlock`}
        />
        <Rubik3D animation={animation} />
      </div>
      <div className="infoText">
        <p>{text}</p>
      </div>
    </div>
  );
}
