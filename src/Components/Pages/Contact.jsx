import React from 'react'
import './Contact.css'
import { Button } from '../Button.jsx'
import  emailjs  from "emailjs-com";
import Swal from 'sweetalert2'

function Contact() {

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
        text: 'Thank you.',
        icon: 'success',
      })   
       
    }

    return (
        <div className = "form-container" id = "contact">
               <h3 className = "form-title">Contact me</h3>
                <form className="inputs-container" onSubmit = {sendMail}>
                    <div className="name-email-container">
                      <input  placeholder = "Name"type="text" className="form-input" name = "name"/> 
                      <input placeholder = "E-mail"type="email" className="form-input" name = "email"/> 
                      <input placeholder = "Phone number" type="text" className="form-input" name = "number"/> 
                    </div>
                  
                  <div className="number-msg-container">
                    <textarea placeholder = "Message" type="text" className="form-area" name = "message"/> 
                  </div>
                
                 <Button
                  children = "Send message" 
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
