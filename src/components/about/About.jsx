import "./about.css";
import lolkipedia from "../../img/lolkipedia.png";
import unity3dcertificate from "../../img/unity3dcertificate.png"
import webmodern from "../../img/webmodern.png"
import calculator from "../../img/calculator.PNG"
import React, {useContext} from "react";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About</h1>
        <p className="a-sub">
        Currently I practice and develop personal projects and courses that I take outside of college. 
        </p>
        <p className="a-desc">
        I will update as I finalize courses and personal projects, providing links to the same.
        </p>
        <div className="a-award">
          <a href="https://lolkipedia.netlify.app"><img src={lolkipedia} alt="" className="a-award-img" /></a>
          <div className="a-award-texts">
            <h4 className="a-award-title">Lolkipedia</h4>
            <p className="a-award-desc">
            Wikipédia do jogo eletrônico League Of Legends
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={unity3dcertificate} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Unity Game Development Build 2D & 3D Games</h4>
            <p className="a-award-desc">
            Learn Unity game design & 2D & 3D game development & make your own C# games in Unity 3D
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={webmodern} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Curso Web Moderno Completo com JavaScript 2021 + Projetos</h4>
            <p className="a-award-desc">
            Domine Web com 15 Cursos + Projetos: Javascript, Angular, React, Next, Vue, Node, HTML5, CSS, jQuery, Bootstrap, Webpack, Gulp, MySQL
            </p>
          </div>
        </div>
        <div className="a-award">
            <a href="https://dants0.github.io/Calculadora-React/"><img src={calculator} alt="" className="a-award-img" /></a>
          <div className="a-award-texts">
            <h4 className="a-award-title">Calculadora React</h4>
            <p className="a-award-desc">
            Calculadora que desenvolvi com React Js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;