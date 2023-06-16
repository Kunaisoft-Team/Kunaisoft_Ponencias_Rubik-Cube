import React from "react";

export const Rubik3D = ({ animation }) => {
  return (
    <div className={animation ? `contenedorCubo` : `displayNone`}>
      <div className="cubo">
        <div className="cara" id="uno">
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
        </div>
        <div className="cara" id="dos">
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
        </div>
        <div className="cara" id="tres">
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
        </div>
        <div className="cara" id="cuatro">
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
        </div>
        <div className="cara" id="cinco">
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
        </div>
        <div className="cara" id="seis">
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
          <div className="miniCara"></div>
        </div>
      </div>
    </div>
  );
};
