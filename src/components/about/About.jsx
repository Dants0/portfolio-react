import "./about.css";
import gitandgithubcourse from "../../img/gitandgithubcourse.png";
import unity3dcertificate from "../../img/unity3dcertificate.png"
import webmodern from "../../img/webmodern.png"
import wrench from "../../img/wrench.png"
import React, {useContext} from "react";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQF5c42DaLq2OQ/profile-displayphoto-shrink_200_200/0/1595483355369?e=1651104000&v=beta&t=YTdbAaTMjZG_X2SaRMYDaUIM79-Xtwje5xiLDRQVdz0"
            alt=""
            className="a-img"
          />
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
          <img src={gitandgithubcourse} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)</h4>
            <p className="a-award-desc">
            Aprenda do básico ao avançado Git e GitHub, uma abordagem prática para o controle de versão e manutenção de repositórios
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
          <img src={wrench} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">In Progress</h4>
            <p className="a-award-desc">
            In Progress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;