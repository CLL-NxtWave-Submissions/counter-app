import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    counterValue: 0,
  }

  incrementCounterValue = () => {
    this.setState(previousCounterState => {
      let {counterValue} = previousCounterState
      counterValue += 1

      return {counterValue}
    })
  }

  render() {
    const {counterValue} = this.state

    return (
      <div className="counter-bg-container">
        <h1 className="counter-header">
          The Button has been clicked{' '}
          <span className="counter-text">{counterValue}</span> times
        </h1>
        <p className="user-action-description">
          Click the button to increase the count!
        </p>
        <button
          type="button"
          className="click-me-button"
          onClick={this.incrementCounterValue}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
