import { rootCertificates } from 'tls'

import React from 'react'

export default function aboutPage() {
  return (
    <div className="about">
      <div id="header-about">
        About <img src="laptop.png" alt="laptop" />
      </div>
      <div className="about-container">
        <div className="about-text">
          <h2>ABOUT</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="about-pictures">
          <img src="prof.jpeg" alt="" />
          {/* <img src="prof2.jpg" alt=""/> */}
          {/* <img src="dumpling.jpg" alt=""/> */}
          {/* <img src="prof3.jpeg" alt=""/> */}
        </div>
      </div>

      <style jsx>
        {`
          .about-container {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #d3efbd;
            height: 75vh;
          }
          .about-text {
            display: flex;
            flex-direction: column;
            color: black;
            width: 584px;
          }
          .about-pictures {
            display: flex;
            flex-direction: column;
            margin-left: 32px;
            width: 544px;
          }
          #header-about {
            text-align: center;
            font-size: 50px;
            font-weight: bold;
            background-color: #1c2321;
            width: 100%;
            padding-bottom: 0.5em;
            padding-top: 0.2em;
          }
          #header-about img {
            height: 1.5em;
          }
        `}
      </style>
    </div>
  )
}
