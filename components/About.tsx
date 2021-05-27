import React from 'react'

export default function aboutPage() {
  return (
    <div className="about">
      <div id="header-about">
        About <img src="globe.png" alt="globe" />
        <img src="rice.png" alt="ricebowl" />{' '}
      </div>
      <div className="about-container">
        <div className="about-text">
          <p>
            Hi, I'm Anderson Chan — a software engineer specializing in Frontend
            development.
          </p>
          <p>
            My goal as an engineer is and always will be to make your life
            simpler, more convenient, and more productive.
          </p>
          <p>
            I studied Economics at New York University before eventually
            pivoting my career to software development. Through Fullstack
            Academy, I pursued my new career, eventually working for Fullstack
            as a fellow. Now, I'm looking to join a team that puts a big
            emphasis on strong communication and a position where I can continue
            learning and make a meaningful impact.
          </p>
        </div>
        <div className="about-pictures">
          <img src="prof.jpeg" alt="" />
        </div>
      </div>
      <div id="header-about">
        Hobbies <img src="joystick.png" alt="joystick" />
        <img src="sushi.png" alt="sushi" />{' '}
      </div>
      <div className="hobbies-container">
        <div className="fighting-container">
          <img src="combobreaker.jpeg" alt="combobreaker" />
          <div className="fighting-text">
            <p>
              Outside of work, I'm a huge fan of competition! At the moment, I
              compete in fighting games, more specifically, Super Smash Brothers
              Melee and Dragon Ball FighterZ.
            </p>
          </div>
          <img src="evo.jpeg" alt="evo" />
          <div className="fighting-text">
            <p>
              I strive to, one day, play on the EVO main stage in front of
              thousands of people.
            </p>
          </div>
        </div>

        <div className="foodie-container">
          <div className="foodie-pictures">
            <img src="eatingsushi.jpg" alt="" />
          </div>
          <div className="about-text">
            <p>Definitely also a big food enthusiast...</p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .about-container {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #d3efbd;
            padding-top: 5em;
            padding-bottom: 5em;
            font-family: 'Alata';
          }
          .hobbies-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #aaadc4;
            padding-top: 5em;
            padding-bottom: 5em;
            font-family: 'Alata';
          }
          .fighting-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .fighting-text {
            width: 85vw;
            color: black;
            font-size: 21px;
            padding-bottom: 2em;
          }
          .foodie-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .foodie-container img {
            height: auto;
            width: 300px;
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
