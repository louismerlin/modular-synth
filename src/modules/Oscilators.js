import { h, Component } from 'preact'
import { audioContext } from '../App'
import Module from './Module'
import Knob from '../Knob'
import Socket from '../Socket'

class Oscilator extends Component {
  constructor(props) {
    super(props)
    this.state = { oscillatorNode: {} }
  }
  componentDidMount() {
    const oscillatorNode = audioContext.createOscillator()
    //const gainNode = audioContext.createGain()
    //const finish = audioContext.destination

    //oscillatorNode.type = 'square';
    //oscillatorNode.frequency.setValueAtTime(220, audioContext.currentTime); // value in hertz

    //oscillatorNode.connect(gainNode)
    //gainNode.connect(finish)

    //gainNode.gain.value = 0.1

    this.setState({ oscillatorNode })

    oscillatorNode.start()
  }

  render(_, { oscillatorNode }) {
    return (
      <Module>
        <h2>sine</h2>
        <div class='subset'>
          <h3>frequency</h3>
          <Knob type='frequency' param={oscillatorNode.frequency} />
        </div>
        <div class='subset'>
          <h4>out</h4>
          <Socket output node={oscillatorNode} />
        </div>
      </Module>
    )
  }
}

const Sine = props => <Oscilator type='sine' {...props} />
export {
  Sine
}