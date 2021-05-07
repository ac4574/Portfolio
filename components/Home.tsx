import React from 'react'
import ComputerIcon from '@material-ui/icons/Computer'
import LanguageIcon from '@material-ui/icons/Language'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import Carousel from './Carousel.js'

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
              JavaScript, TypeScript, React, Redux, HTML, CSS, Node.js,
              Express.js, Sequelize, PostgreSQL, Next.js
            </div>
          </div>
          <div className="stats-list" id="citizenships">
            <span className="stats-pop flex">
              <LanguageIcon /> Citizenships
            </span>

            <div id="citizenship-list">
              United States <img src="usa.png" alt="usa" />, Brazil{' '}
              <img src="brazil.png" alt="brazil" />, Hong Kong{' '}
              <img src="hongkong.png" alt="hongkong" />
            </div>
          </div>
          <div className="stats-list" id="human-languages">
            <span className="stats-pop flex">
              <RecordVoiceOverIcon /> Earthling Languages
            </span>

            <div id="language-list">
              English, Portuguese, Cantonese, Spanish
            </div>
          </div>
        </div>
        <div className="home-pic">
          <img src="prof1-small-edited3.jpeg" alt="me" />
        </div>
      </div>
      <div id="projects-container">
        <Carousel />
      </div>
      <style jsx>
        {`
          #about-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            // background-color: #f5efdf;
            background-color: #496a81;
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
            padding-bottom: 0.5em;
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
            border-radius: 3px;
          }
          #stats {
            margin-right: 2em;
            color: white;
            width: 30vw;
          }
          .stats-list {
            padding-top: 1em;
            padding-bottom: 1em;
          }
          .stats-pop {
            color: #ade8ff;
            // color: #628aa7;
          }
          .flex {
            display: flex;
            align-items: center;
          }
          #citizenship-list {
            display: flex;
            align-items: center;
          }
          #citizenship-list img {
            padding-left: 10px;
            height: 30px;
          }
        `}
      </style>
    </div>
  )
}
