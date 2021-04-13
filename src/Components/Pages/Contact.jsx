import React from 'react'
import './Contact.css'
import { Button } from '../Button.jsx'
import  emailjs  from "emailjs-com";
import Swal from 'sweetalert2'
import {useTranslation} from 'react-i18next'

function Contact() {

    const [t] = useTranslation("global")

    const sendMail  = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1h3j7za', 'template_ju0wy8n', e.target, 'user_vYbvgxS0S1OglKObDmlZz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text); 
          });
       e.target.reset();
       Swal.fire({
        title: 'Mail sended!',
        text: 'Wiil be in touch.',
        icon: 'success',
      })   
       
    }

    return (
        <div className = "form-container" id = "contact">
               <h3 className = "form-title">{t("contact.title")}</h3>
                <form className="inputs-container" onSubmit = {sendMail}>
                    <div className="name-email-container">
                      <input  placeholder = {t("contact.name-ph")} type="text" className="form-input" name = "name"/> 
                      <input placeholder = {t("contact.email-ph")}type="email" className="form-input" name = "email"/> 
                      <input placeholder = {t("contact.phone-ph")} type="text" className="form-input" name = "number"/> 
                    </div>
                  
                  <div className="number-msg-container">
                    <textarea placeholder = {t("contact.mssg-ph")} type="text" className="form-area" name = "message"/> 
                  </div>
                
                 <Button
                  children = {t("contact.contact-btn")} 
                  buttonSize = "btn--medium"
                  buttonStyle = "btn--outline"
                  classN = "form-btn"
                  type = "submit"
                 ></Button>
                </form>

        </div>
    )
}

export default Contact
