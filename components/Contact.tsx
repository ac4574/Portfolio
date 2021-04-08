import React from 'react'

export default function contactPage() {
  return (
    <div className="contact">
      <div id="header-contact">
        Contact <img src="laptop.png" alt="laptop" />
      </div>
      <style jsx>
        {`
          .contact {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #d3efbd;
            height: auto;
          }
          #header-contact {
            text-align: center;
            font-size: 50px;
            font-weight: bold;
            background-color: #1c2321;
            width: 100%;
            margin-bottom: 0.5em;
            padding-top: 0.2em;
          }
          #header-contact img {
            height: 1.5em;
          }
        `}
      </style>
    </div>
  )
}
