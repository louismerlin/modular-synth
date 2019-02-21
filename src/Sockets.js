import { h, Component } from 'preact'
import './Socket.css'

const Socket = () => (
  <div class='socket'>
    <svg class='socket'>
      <circle cx="10" cy="10" r="10" stroke="black" stroke-width="2" fill="white" />
    </svg>
  </div>
)

class SocketInput extends Component {
  render() {
    return(
      <Socket />
    )
  }
}

class SocketOutput extends Component {
  render() {
    return(
      <Socket />
    )
  }
}

export {
  SocketInput,
  SocketOutput
}