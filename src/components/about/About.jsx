import "./about.css";
import Award from "../../img/award.png";
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
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">inserir</h4>
            <p className="a-award-desc">
              inserir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;