import React, { useState } from 'react';
// import axios from 'axios';

import '../../App.scss';
require('dotenv').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});
async function sendEmail() {
  const info = await transporter.sendMail({
    from: '"test nodemailer function" <test@gmail.com>',
    to: `${process.env.NODEMAILER_USER}`,
    subject: 'nodemailer test SUBJECT',
    text: 'nodemailer test TEXT',
    html: '<b>HELLO NODEMAILER</b>',
  });
  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // res.status(200).json({
  //   status: 'Success',
  //   code: 200,
  //   message: 'Sent Auth Email',
  // });
}

function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // const [result, setResult] = useState(null);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post('/send', { ...state })
  //     .then((response) => {
  //       setResult(response.data);
  //       setState({
  //         name: '',
  //         email: '',
  //         subject: '',
  //         message: '',
  //       });
  //     })
  //     .catch(() => {
  //       setResult({
  //         success: false,
  //         message: 'Something went wrong. Try again later',
  //       });
  //     });
  // };

  const handleChange = (event) => {
    const { id, value } = event.target;

    setState({
      ...state,
      [id]: value,
    });
  };

  return (
    <div className="contact-section container">
      <div className="contact__email">
        <form className="contact-form" method="POST" onSubmit={sendEmail}>
          <div className="contact-image">
            <i className="fas fa-rocket" />
          </div>
          <h3>Getting in touch is easy!</h3>
          <h4>
            <br />
            Fill out the form below and let&apos;s make amazing things happen!
          </h4>
          <p>
            Contact form is currently not working. <br />
            Please contact me through social media or send me an email at
            jongwooha1@gmail.com
          </p>
          <div className="form-inputs">
            <div className="form-input">
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={state.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-input">
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={state.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-input">
              <label htmlFor="subject">
                Subject
                <input
                  id="subject"
                  className="form-control"
                  value={state.subject}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-input">
              <label htmlFor="message">
                Message
                <textarea
                  id="message"
                  className="form-control"
                  value={state.message}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-input">
              <button type="submit" className="submit-button">
                {/* {buttonText} */}
                Submit
              </button>
            </div>
          </div>
          {/* <div>
            {result && (
              <p className={`${result.success ? 'success' : 'error'}`}>
                {result.message}
              </p>
            )}
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Contact;
