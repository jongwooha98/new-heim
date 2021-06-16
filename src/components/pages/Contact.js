import React, { useState } from 'react';
// import axios from 'axios';
import '../../App.scss';

function Contact() {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact-section container">
      <div className="contact__email">
        <form
          className="contact-form"
          id="contact-form"
          method="POST"
          action="send"
          onSubmit={handleSubmit}
        >
          <div className="contact-image">
            <i className="fas fa-utensils" />
          </div>
          <h3>Reserve your spot!</h3>
          <h4>
            <br />
            Fill out the form below, then we will get back to you soon!
          </h4>
          <p>
            Contact form is currently not working. <br />
            Please contact us through social media <br />
            or send us an email at jongwooha1@gmail.com
          </p>
          <div className="form-inputs">
            <div className="form-input">
              <label htmlFor="name">
                Name
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  type="text"
                  // value={state.name}
                  // onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-input">
              <label htmlFor="email">
                Email
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="email"
                  // value={state.email}
                  // onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-input">
              <label htmlFor="subject">
                Subject
                <input
                  className="form-control"
                  id="subject"
                  name="subject"
                  // value={state.subject}
                  // onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-input">
              <label htmlFor="message">
                Message
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  // value={state.message}
                  // onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-input">
              <button className="submit-button" type="submit" value="submit">
                {status}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
