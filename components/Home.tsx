import React from 'react'
import ComputerIcon from '@material-ui/icons/Computer'
import LanguageIcon from '@material-ui/icons/Language'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
;<span className="stats-pop"></span>
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
          <span className="stats-pop">STATS & VITALS</span>
          <div id="born">
            <div id="past">
              <span className="stats-pop">0 - 7</span> Born and raised in{' '}
              <span className="stats-pop">Foz do Iguaçu, Brazil.</span>
            </div>
            <div id="present">
              <span className="stats-pop">7 - present</span> Kickin' it in the
              <span className="stats-pop"> Greater New York Area.</span>
            </div>
          </div>
          <div className="stats-list" id="techstack">
            <span className="stats-pop flex">
              <ComputerIcon /> Tech Stack
            </span>
            <div id="stack">
              JavaScript, TypeScript, React, React-Redux, HTML, CSS, Node.js,
              Express.js, Sequelize, PostgreSQL, Next.js
            </div>
          </div>
          <div className="stats-list" id="citizenships">
            <span className="stats-pop flex">
              <LanguageIcon /> Citizenships
            </span>

            <div id="citizenship-list">United States, Brazil, Hong Kong</div>
          </div>
          <div className="stats-list" id="human-languages">
            <span className="stats-pop flex">
              <RecordVoiceOverIcon /> Human Languages
            </span>

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
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 60px;
            font-weight: bold;
            background-color: #1c2321;
            width: 100%;
            margin-bottom: 0.5em;
            padding-top: 0.2em;
          }
          .hello img {
            height: 70px;
            margin-left: 10px;
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
            margin-right: 2em;
            color: black;
            width: 30vw;
          }
          .stats-list {
            padding-top: 1em;
            padding-bottom: 1em;
          }
          .stats-pop {
            color: #ef6f6c;
          }
          .flex {
            display: flex;
            align-items: center;
          }
          .flex svg {
            padding-right: 10px;
          }
        `}
      </style>
    </div>
  )
}
