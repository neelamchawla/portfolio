import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../../Context";
import Map from "../../../img/map.gif";
import Swal from 'sweetalert2';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (Name === "" || Email === "" || Msg === "" ) {
      Swal.fire({
        title: "Please fill all the fields",
        icon: "warning",
        showConfirmButton: false,
        showCancelButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
    }
    else if (Name !== "" || Email !== "" || Msg !== "" ) {
      emailjs
      .sendForm(
        "service_myxeune",
        "template_neizz0t",
        form.current,
        "0Pwo9Dy_VAQ_3D0uI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          Swal.fire({
            title: "Thank you for reaching out!!",
            html: "We will contact you shortly.",
            icon: "success",
            showConfirmButton: false,
            showCancelButton: false,
            timer: 4000,
            timerProgressBar: true,
          })
          setName("");
          setEmail("");
          setMsg("");
        },
        (error) => {
          console.log(error.text);
        }
      );
      
    }
  };

  return (
    <div className="contact-form" id="contact">

      <div style={{backgroundImage: `url(${Map})`,
          height: "100vh",
          width: "100%",
          position:"absolute",
          opacity: "0.3",
          marginLeft: "-9%",
          marginTop: "-3%",
        }}></div>

      {/* left side */}
      <div className="w-left">
        <div className="c-awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in <span>Touch</span></span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" onChange={setName} className="user"  placeholder="Name"/>
          <input type="email" name="user_email" onChange={setEmail} className="user" placeholder="Email"/>
          <textarea name="message" className="user" onChange={setMsg} placeholder="Message"/>
          <input type="submit" value="Send" className="button c-button"/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
