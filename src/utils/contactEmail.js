import React from 'react';
import emailjs from 'emailjs-com';

import '../styles/ContactUs.css';
import NavBar from './navBar';
import BackgroundCanvas from './background_canvas';
import ContactColumn from './contactColumn';

function ContactEmail() {

  function sendEmail(e) {
    e.preventDefault();

    var name = e.target.user_name.value;
    var email = e.target.user_email.value;
    var body = e.target.message.value;

    console.log(name);

    if (name == "" || email == "" || body == "") {
      alert('Please don\'t forget to fill in all fields so that I can appropriately respond to you!');
    } else {
      emailjs.sendForm('service_cplhvoa', 'template_o5zfc3d', e.target, 'user_jt5onLfDHcGhZ9AyAKaAU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <div className="logical row">
        <label>Name</label>
      </div>
      <div className="row">
        <input type="text" name="user_name" id="username"/>
      </div>
      <div className="logical row">
        <label>Email</label>
      </div>
      <div className="row">
        <input type="email" name="user_email" id="useremail"/>
      </div>
      <div className="logical row">
        <label>Message</label>
      </div>
      <div className="row">
        <textarea name="message" />
      </div>
      <div className="logical row">
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}

class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-us-container">
        <BackgroundCanvas />
        <NavBar />
        <ContactColumn />

        <div className="row">
          <ContactEmail />
        </div>
      </div>
    );
  }
}

export default ContactUs;