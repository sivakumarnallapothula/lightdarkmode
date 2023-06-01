/* eslint-disable jsx-a11y/no-static-element-interactions */
// Write your code here
import './index.css'
import {Component} from 'react'

class sk extends Component {
  state = {sing: true}

  nnn = () => {
    this.setState(prevState => ({sing: !prevState.sing}))
  }

  render() {
    const {sing} = this.state
    return (
      <div className="skn">
        {sing ? (
          <div className="nsk">
            <h1 className="head">Click To Change Mode</h1>
            <div className="butdiv" onClick={this.nnn}>
              <button type="button" className="but">
                Light Mode
              </button>
            </div>
          </div>
        ) : (
          <div className="nsk2">
            <h1 className="head2">Click To Change Mode</h1>
            <div className="butdiv" onClick={this.nnn}>
              <button type="button" className="but2">
                Dark Mode
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default sk
