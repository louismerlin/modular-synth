import { h, Component } from 'preact'
import { connect } from './Cables'
import './Socket.css'

export default class extends Component {
  constructor(props) {
    super(props)
    this.onConnect = this.onConnect.bind(this)
  }

  onConnect(down) {
    connect(this.props.node, this.props.input, this.props.output, down)
  }

  render() {
    return(
      <div
        class='socket'
        onMouseDown={() => this.onConnect(true)}
        onMouseUp={() => this.onConnect(false)}
      >
        <svg class='socket'>
          <circle cx="10" cy="10" r="10" stroke="black" stroke-width="2" fill="white" />
        </svg>
      </div>
    )
  }
}