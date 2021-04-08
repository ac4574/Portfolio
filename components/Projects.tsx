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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <style jsx>
          {`
            .projects-container {
              display: flex;
              flex-direction: row;
            }
            .projects {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background-color: #7d98a1;
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
