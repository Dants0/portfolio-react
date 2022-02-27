import React, {useRef, useState, useContext} from "react";
import './contact.css';
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import {ThemeContext} from "../../context";

const Contact = () =>{
    const formRef = useRef();
    const [done,setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs
            .sendForm(
                "service_zmxuacj",
                "template_9epvpwa",
                formRef.current,
                "user_ouBZaLJRQJFJeXuz9"
            )
            .then(
                (result)=>{
                    console.log(result.text);
                    setDone(true);
                },
                (error)=>{
                    console.log(error.text);
                }
            );
    }
}

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
              Rua professor aloisio de carvalho filho, 251, Salvador Ba
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>escrever</b> escrever
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );

export default Contact;