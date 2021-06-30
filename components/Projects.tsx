import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="projects">
        <div id="header-projects">
          Projects <img src="laptop.png" alt="laptop" />
        </div>
        <div className="projects-container">
          <ProjectCard
            name="React Hookify"
            description="Command Line tool that converts React class components into functional components with Hooks. React has big plans for React Hooks going forward and this tool helps developers make the transition."
            imgURL="reacthook.png"
            url="https://www.npmjs.com/package/react-hookify"
            interactionButton="Github"
          />
          <ProjectCard
            name="Rick's Sporting Goods"
            description="A mock e-commerce website selling sports goods"
            imgURL="ricks.png"
            url="https://rick-sporting-goods.herokuapp.com/"
            interactionButton="Visit"
          />
          <ProjectCard
            name="Speech to Text Productivity (WIP)"
            description="Productivity tool that translates your speech into a frequency table of all the words spoken"
            imgURL="speechtotext.png"
            url="https://github.com/ac4574/SpeechToText"
            interactionButton="Github"
          />
          <ProjectCard
            name="React Hookify Documentation Website"
            description="Documentation website for React Hookify. Also inclues a demo area where you can try the tool in the browser without installing."
            imgURL="whatishookify.png"
            url="https://react-hookify.now.sh/"
            interactionButton="Learn More"
          />
        </div>

        <style jsx>
          {`
            .projects-container {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              height: 65vh;
            }
            .projects {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background-color: #5e6572;
              height: auto;
            }
            #header-projects {
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
            #header-projects img {
              margin-left: 10px;
              height: 70px;
            }
          `}
        </style>
      </div>
    )
  }
}
