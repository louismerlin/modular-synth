import { h, Component } from 'preact'
import { connect } from './App'
import './Socket.css'

export default class extends Component {
  constructor(props) {
    super(props)
    this.onConnect = this.onConnect.bind(this)
  }

  onConnect(down) {
    connect(this.props.node, this.props.input, this.props.output, down, this)
  }

  render({ output }) {
    const strokeWidth = output ? 3 : 2
    return(
      <div
        class='socket'
        onMouseDown={() => this.onConnect(true)}
        onMouseUp={() => this.onConnect(false)}
        onTouchStart={() => this.onConnect(true)}
        onTouchEnd={() => this.onConnect(false)}
      >
        <svg class={`socket ${output ? 'output' : ''}`}>
          <circle cx="3.5mm" cy="3.5mm" r="3.5mm" stroke="black" stroke-width={strokeWidth} fill="#efefef" />
        </svg>
      </div>
    )
  }
}