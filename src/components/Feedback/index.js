// Write your React code here.

import {component} from 'react'
import './index.css'

class Feedback extends component {
  render() {
    const {imageUrl} = this.props
    const {name} = this.props

    return (
      <div className="feedContainer">
        <div className="emojiContainer">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>

          <div className="changingObject">
            <img src={imageUrl} className="image" alt="imag" />
            <h1 className="tittle">{name}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
