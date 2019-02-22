import { h, Component } from 'preact'
import { connect } from './Cables'
import './Socket.css'

export default class extends Component {
  constructor(props) {
    super(props)
    this.onConnect = this.onConnect.bind(this)
  }

  onConnect(down) {
    connect(this.props.node, this.props.input, this.props.output, down, this)
  }

  render() {
    return(
      <div
        class='socket'
        onMouseDown={() => this.onConnect(true)}
        onMouseUp={() => this.onConnect(false)}
      >
        <svg class='socket'>
          <circle cx="3.5mm" cy="3.5mm" r="3.5mm" stroke="black" stroke-width="2" fill="white" />
        </svg>
      </div>
    )
  }
}