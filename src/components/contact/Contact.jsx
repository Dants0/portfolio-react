import{ init } from '@emailjs/browser';
import React, {useRef, useState, useContext} from "react";
import './contact.css';
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
// import Instagram from "../../img/instagram.png"
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
            {/* <div className="c-info-item">
              <img className="c-icon" src={Instagram} alt="" />
              Instagram
            </div> */}
            <div className="c-info-item">
              <img className="c-icon" src={Linkedin} alt="" />
              <a href="https://www.linkedin.com/in/guilherme-góes-8b72531b0/">Linkedin</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta culpa quae, provident voluptas eligendi nam atque nisi odio amet et accusamus eveniet repudiandae nemo expedita quasi. Quasi, esse ullam.</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla tempora, quod ad ipsam sint consectetur autem. Iste dolorum reiciendis sapiente ea nam expedita, illo quia molestias? Sed, iusto atque.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Sending..."}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;