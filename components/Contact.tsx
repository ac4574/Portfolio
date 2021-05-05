import React from 'react'

export default function contactPage() {
  return (
    <div className="contact">
      <div id="header-contact">
        Contact
        <img src="mail.png" alt="mail" />
      </div>
      <div id="contact-container">
        <div id="contact-info">
          <h1>Info</h1>
          <p>Here's where you can reach me:</p>
          <p>Email: andersonchan4574@gmail.com (Preferred)</p>
          <p>Phone: 732-642-7633</p>

          <h1>LinkedIn</h1>
          <p>
            Feel free to connect with me on{' '}
            <a href="https://www.linkedin.com/in/andersonchan4574/">LinkedIn</a>{' '}
            as well!
          </p>
        </div>

        <img src="dumpling.jpg" alt="dumpling" />
      </div>
      <style jsx>
        {`
          .contact {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #ebffff;
            height: auto;
          }
          #header-contact {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 60px;
            font-weight: bold;
            background-color: #1c2321;
            width: 100%;
            padding-bottom: 0.5em;
            padding-top: 0.2em;
          }
          #header-contact img {
            margin-left: 10px;
            height: 90px;
          }
          #contact-container {
            display: flex;
            flex-direction: column;
            color: black;
            padding-top: 2em;
          }
          #contact-info {
            font-size: 30px;
          }
          #contact-info a {
            // text-decoration: none;
            color: #f46036;
          }
          #contact-container img {
            margin-right: 35px;
            // max-height: 40em;
            padding-bottom: 2em;
          }
        `}
      </style>
    </div>
  )
}
