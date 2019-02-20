import { h, Component } from 'preact'
import Module from './Module'
import Knob from '../Knob'
import { SocketOutput } from '../Sockets'

class Oscilator extends Component {
  constructor(props) {
    super(props)
    this.state = { oscillatorNode: {} }
  }
  componentDidMount() {
    const { audioContext } = this.props
    const oscillatorNode = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    const finish = audioContext.destination

    //oscillatorNode.type = 'square';
    //oscillatorNode.frequency.setValueAtTime(220, audioContext.currentTime); // value in hertz

    oscillatorNode.connect(gainNode)
    gainNode.connect(finish)

    gainNode.gain.value = 0.1

    this.setState({ oscillatorNode, gainNode })

    oscillatorNode.start()
  }

  render(_, { oscillatorNode }) {
    return (
      <Module>
        <h2>sine</h2>
        <h3>frequency</h3>
        <Knob type='frequency' param={oscillatorNode.frequency} />
        <SocketOutput node={oscillatorNode} />
      </Module>
    )
  }
}

const Sine = props => <Oscilator type='sine' {...props} />
export {
  Sine
}