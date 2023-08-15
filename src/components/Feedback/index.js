import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isBtnClicked: false}

  HappyBtnClicked = () => {
    this.setState({isBtnClicked: true})
  }

  renderFeedbackContainer() {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(eachItem => (
            <li className="item-container" key={eachItem.id}>
              <div>
                <button
                  className="emoji-button"
                  type="button"
                  onClick={this.HappyBtnClicked}
                >
                  <img
                    src={eachItem.imageUrl}
                    className="emoji"
                    alt={eachItem.name}
                  />
                </button>
              </div>
              <span>{eachItem.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-card">
        <div className="thank-you-container">
          <div>
            <button className="emoji-button" type="button">
              <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
            </button>
          </div>
          <h1>Thank You !!</h1>
          <p className="customer-support-para">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isBtnClicked} = this.state
    return (
      <div className="bg-main-container">
        <div className="feedback-card">
          {isBtnClicked
            ? this.renderThankYouContainer()
            : this.renderFeedbackContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
