import {useRef,React} from 'react'
import emailjs from '@emailjs/browser';

function Email() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v1v4oaw', 'template_hrigd8i', form.current, 'aU5Vn9cDDgAytPtBZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <section id="contact">
            <h1 className = "text-center display-1">Send Me A Message!</h1>
                <div className = "d-flex flex-column align-items-center">
                <form ref = {form} onSubmit = {sendEmail}>
                    <div>
                        <input type = "text" className = "me-2 mb-2 w-47"
                        placeholder = "Full Name"
                        name = "user_name" required/>
                        <input type = "email" className = "mb-2 w-47"
                        placeholder = "Email"
                        name = "user_email" required/>
                    </div>
                    <div>
                        <input type = "text" className = "mb-2 w-75"
                        placeholder = "Subject"
                        name = "subject" required/>
                    </div>
                    <div>
                        <textarea
                        name = "message" className = "me-2 mb-2"
                        cols = "42" rows = "10" required/>
                    </div>
                    <div>
                        <button type ="submit" className = "btn btn-outline-secondary">Send Message</button>
                    </div>
                </form>
                </div>
        </section>
    )
}

export default Email;