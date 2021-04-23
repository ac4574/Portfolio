import React from 'react'

export default function aboutPage() {
  return (
    <div className="about">
      <div id="header-about">
        About <img src="globe.png" alt="globe" />
        <img src="rice.png" alt="rice" />{' '}
        {/* <img src="joystick.png" alt="joystick" /> */}
      </div>
      <div className="about-container">
        <div className="about-text">
          <p>
            Hi, I'm Anderson Chan — a software engineer specializing in
            Frontend.
          </p>
          <p>
            My goal as an engineer is and always will be to make your life
            simpler, more convenient, and more productive.
          </p>
          <p>
            I studied Economics at New York University before eventually
            pivoting my career to software development. Through Fullstack
            Academy, I pursued my new career, eventually working for Fullstack
            as a fellow. Now...
          </p>
          <p>Outside of work, I'm a huge fan of competition...</p>
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
            padding-top: 2em;
            padding-bottom: 2em;
          }
          .about-text {
            display: flex;
            flex-direction: column;
            color: black;
            width: 35vw;
            font-size: 21px;
          }
          .about-pictures {
            display: flex;
            flex-direction: column;
            margin-left: 32px;
            width: 40vw;
          }
          #header-about {
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
          #header-about img {
            margin-left: 10px;
            height: 70px;
          }
        `}
      </style>
    </div>
  )
}
