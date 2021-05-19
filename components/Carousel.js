import SwipeableViews from 'react-swipeable-views'
import {autoPlay} from 'react-swipeable-views-utils'
import React, {Component} from 'react'
import BigProjectCard from './BigProjectCard'
import MobileStepper from '@material-ui/core/MobileStepper'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

export default class homeCarousel extends Component {
  constructor() {
    super()
    this.state = {
      carouselIndex: 0,
    }
    this.handleChangeIndex = this.handleChangeIndex.bind(this)
  }

  handleChangeIndex(carouselIndex) {
    this.setState({
      carouselIndex,
    })
  }

  render() {
    const {carouselIndex} = this.state

    return (
      <div className="container-center-column">
        <AutoPlaySwipeableViews
          className="test"
          index={carouselIndex}
          onChangeIndex={this.handleChangeIndex}
          interval={7200}
        >
          <div className="project-slide">
           <BigProjectCard
            name="React Hookify"
            description="Command Line tool that converts React class components into functional components with Hooks. React has big plans for React Hooks going forward and this tool helps developers make the transition."
            imgURL="reacthook.png"
            url="https://www.npmjs.com/package/react-hookify"
          />
          </div>
          <div className="project-slide">
          <BigProjectCard
            name="Rick's Sporting Goods"
            description="A mock e-commerce website selling sports goods"
            imgURL="ricks.png"
            url="https://ricks-sporting-goods.herokuapp.com/"
          />
          </div>
          <div className="project-slide">
          <BigProjectCard
            name="Speech to Text Productivity (WIP)"
            description="Productivity tool for..."
            imgURL="speechtotext.png"
            url="https://github.com/ac4574/SpeechToText"
          />
          </div>
          <div className="project-slide">
          <BigProjectCard
            name="React Hookify Documentation Website"
            description="Documentation website for React Hookify. Also inclues a demo area where you can try the tool in the browser without installing."
            imgURL="demoarea.png"
            url="https://react-hookify.now.sh/"
          />
          </div>
        </AutoPlaySwipeableViews>
        <MobileStepper
          className="center-self"
          variant="dots"
          steps={4}
          position="static"
          activeStep={carouselIndex}
        />
        <style jsx>
        {`
          .project-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            height: 550px;
          }
        `}
      </style>
      </div>
    )
  }
}
