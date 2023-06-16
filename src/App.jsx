import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topmenu from "./components/Topmenu";
import InfoCard from "./components/InfoCard";
import rubik2x2 from "./assets/img/rubik2x2.png";
import oll from "./assets/img/oll.jpg";
import xll from "./assets/img/xll.jpg";
import { Rubik3D } from "./components/Rubik3D";

function App() {
  const [count, setCount] = useState(0);
  const text1 = () => {
    return (
      <p>
        El método Ortega para 2x2x2 es el primer método que la mayoría aprende
        luego de armarlo con Fridrich. Es muy bueno si quieres bajar tu average
        en un corto periodo de tiempo, sin embargo son pocos los que deciden
        continuar con el método una vez que han logrado batir la barrera de los
        5 segundos.<br></br>
        <br></br> El método Ortega ha ganado gran popularidad en Japón. Syuhei
        Omura, el más destacado, posee actualmente el record single continental
        de Asia en la categoría, ranqueándose 11 del mundo single y 12 del mundo
        average (al 20 de mayo de 2009).<br></br>
        <br></br> Pasos del método.
        <br></br>
        <br></br>
        Armar una cara (intuitivo).
        <br></br>
        <br></br>
        OLL (los algoritmos se expondrán más adelante).
        <br></br>
        <br></br>XLL, PLL (los algoritmos se expondrán más adelante).
      </p>
    );
  };

  const text2 = () => {
    return (
      <p>
        El OLL (Orientation of the Last Layer) es el último paso del Método
        Fridrich para completar el cubo de rubik. En total, el OLL se compone de
        57 casos. Es decir, 57 algoritmos que debes aprender. Son muchos, pero
        en este artículo voy a dividir todos esos casos en 14 grupos (cada grupo
        con 2-4 casos, máximo 8), y cada caso tendrá varios algoritmos para
        llevarlo a cabo.
      </p>
    );
  };

  const text3 = () => {
    return (
      <p>
        El XLL (Xcross Last Layer), Es una técnica de speedcubing en la que la
        cruz de la primera capa se resuelve junto con uno o más pares de la
        última capa, lo que permite soluciones más rápidas, Entonces, con la
        técnica de la última capa xcross, el primer paso es resolver la cruz en
        la primera capa. 😊 Luego, mientras resuelves la cruz, identificas uno o
        más pares que se pueden resolver en la última capa al mismo tiempo que
        la cruz. 😁 Luego planificas los movimientos para resolver la cruz y
        esos pares simultáneamente. 😊 Después de resolver la cruz y los pares,
        terminas resolviendo los pares restantes y la última capa. 😁 Todo el
        proceso le permite omitir el paso "F2L" de resolver las dos primeras
        capas, ahorrando tiempo.
      </p>
    );
  };

  return (
    <>
      <div className="cubo1">
        <Rubik3D animation={true} />
      </div>
      <div className="cubo2">
        <Rubik3D animation={true} />
      </div>
      <div style={{ zIndex: "1" }}>
        <Topmenu />
        <div className="titlePage">
          <h2>
            {/* <div className="cubo3">
              <Rubik3D animation={true} />
            </div> */}
            2x2x2<br></br>Método Ortega
            {/* <div className="cubo3">
              <Rubik3D animation={true} />
            </div> */}
          </h2>
        </div>
        <InfoCard
          img={rubik2x2}
          text={text1()}
          clase={"card1"}
          animation={true}
          id={"firstPart"}
        />
        <InfoCard
          img={oll}
          text={text2()}
          clase={"card2 invert"}
          animation={false}
          id={"secondPart"}
        />
        <InfoCard
          img={xll}
          text={text3()}
          clase={"card3"}
          animation={false}
          id={"thirdPart"}
        />
        {/* <div className="cardFullImg">
          <img src={oll} alt={oll} />
        </div> */}
      </div>
    </>
  );
}

export default App;
