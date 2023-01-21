// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  coinTossed = () => {
    const {total, heads, tails, image} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState({
        total: total + 1,
        heads: heads + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState({
        total: total + 1,
        tails: tails + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {total, heads, tails, image} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={image} className="coin-image" alt="toss result" />
          <button type="button" onClick={this.coinTossed}>
            Toss Coin
          </button>
          <ul>
            <li>
              <p>Total:{total}</p>
            </li>
            <li>
              <p>Heads:{heads}</p>
            </li>
            <li>
              <p>Tails:{tails}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
