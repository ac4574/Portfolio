import React from 'react'

export default function Home() {
  return (
    <div className="home">
      <div className="hello">
        Hey there! I'm Anderson
        <img src="wave.png" alt="wave" />
        <img src="yellow-heart.png" alt="heart" />
      </div>
      <div id="about-container">
        <div id="stats">
          Stats & Vitals
          <div id="born">
            <div id="past">
              0 - 7 Born and raised in Foz do Iguaçu, State of Paraná, Brazil.
            </div>
            <div id="present">
              7 - present Kickin' it in the Greater New York area.
            </div>
          </div>
          <div className="stats-list" id="techstack">
            Tech Stack
            <div id="stack">
              JavaScript, React, React-Redux, HTML, CSS, Node.js, Express.js,
              Sequelize, PostgreSQL, Next.js
            </div>
          </div>
          <div className="stats-list" id="citizenships">
            Citizenships
            <div id="citizenship-list">United States, Brazil, Hong Kong</div>
          </div>
          <div className="stats-list" id="human-languages">
            Human Languages
            <div id="language-list">
              English, Portuguese, Cantonese, Spanish
            </div>
          </div>
        </div>
        <div className="home-pic">
          <img src="prof2.jpg" alt="" />
        </div>
      </div>
      <div id="projects-container">PROJECTS</div>
      <div id="hobbies-container">HOBBIES</div>
      <style jsx>
        {`
          #about-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            background-color: #f5efdf;
            justify-content: center;
            padding-top: 2em;
            padding-bottom: 2em;
            font-family: 'Alata';
            font-size: 20px;
            overflow-wrap: break-word;
          }
          .home {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: auto;
            padding-bottom: 3em;
          }
          .hello {
            text-align: center;
            font-size: 50px;
            font-weight: bold;
            background-color: #1c2321;
            width: 100%;
            margin-bottom: 0.5em;
            padding-top: 0.2em;
          }
          .hello img {
            height: 1.5em;
          }
          .home-pic {
            display: flex;
            justify-content: center;
            // width: 70vw;
          }
          .home-pic img {
            height: 50vh;
          }
          #stats {
            margin-right: 5em;
            color: black;
          }
          .stats-list {
            padding-top: 1em;
            padding-bottom: 1em;
          }
        `}
      </style>
    </div>
  )
}
