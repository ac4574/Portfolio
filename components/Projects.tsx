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
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            imgURL="reacthook.png"
            url="https://www.npmjs.com/package/react-hookify"
          />
          <ProjectCard
            name="Rick's Sporting Goods"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            imgURL="ricks.png"
            url="https://ricks-sporting-goods.herokuapp.com/"
          />
          <ProjectCard
            name="Speech to Text Productivity"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            url="https://github.com/ac4574/SpeechToText"
          />
          <ProjectCard
            name="React Hookify Documentation Website"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            imgURL="hookwebs.png"
            url="https://react-hookify.now.sh/"
          />
        </div>

        <style jsx>
          {`
            .projects-container {
              display: flex;
              flex-direction: row;
              align-items: center;
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
              text-align: center;
              font-size: 50px;
              font-weight: bold;
              background-color: #1c2321;
              width: 100%;
              padding-bottom: 0.5em;
              padding-top: 0.2em;
            }
            #header-projects img {
              height: 1.5em;
            }
          `}
        </style>
      </div>
    )
  }
}
