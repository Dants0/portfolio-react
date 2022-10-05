import "./about.css";
import lolkipedia from "../../img/lolkipedia.png";
import chatbot from "../../img/chatbot.png"
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
        Atualmente eu pratico e desenvolvo projetos e cursos pessoais que faço fora da faculdade.
        </p>
        <p className="a-desc">
        Vou me atualizar à medida que finalizar os cursos e projetos pessoais, fornecendo links para os mesmos.
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
          <a href="https://chat-bot-with-react-simple-chatbot.vercel.app"><img src={chatbot} alt="" className="a-award-img" /></a>
          <div className="a-award-texts">
            <h4 className="a-award-title">Chat Bot</h4>
            <p className="a-award-desc">
            Chat Bot desenvolvido usando React e React Simple Bot
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