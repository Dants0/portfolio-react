import{ init } from '@emailjs/browser';
import React, {useRef, useState, useContext} from "react";
import './contact.css';
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin.png"
import emailjs from "emailjs-com";
import {ThemeContext} from "../../context";

const Contact = () => {
    init("ouBZaLJRQJFJeXuz9");
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_zmxuacj",
          "template_9epvpwa",
          formRef.current,
          "ouBZaLJRQJFJeXuz9"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Vamos falar sobre seu projeto</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              guilhermedantasgoes@gmail.com
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/guilherme-góes-8b72531b0/"><img className="c-icon" src={Linkedin} alt="" />Linkedin</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Envie-me um e-mail para obter mais contatos e informações.</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nome" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Titulo" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Mensagem" name="message" />
            <button>Submit</button>
            {done && "Enviando..." + " " + "Irei responder em alguns dias!"}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;