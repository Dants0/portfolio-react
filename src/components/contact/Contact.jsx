import{ init } from '@emailjs/browser';
import React, {useRef, useState, useContext} from "react";
import './contact.css';
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
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
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +55 71 981909210
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              guilhermedantasgoes@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Rua Professor Aloisio De Carvalho Filho, 251, Salvador Ba
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/guilherme-góes-8b72531b0/"><img className="c-icon" src={Linkedin} alt="" /></a>
              Linkedin
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Send me an e-mail for more contact and information.</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Sending..." + " I'll answer in a few days."}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;