import { h, Component } from 'preact'
import { audioContext } from '../App'
import Module from './Module'
import Socket from '../Socket'

class VCANode {
  constructor(gainNode) {
    this.trig = true
    this.gainNode = gainNode
  }

  update(params) {
    this.gainNode.gain.setTargetAtTime(1, audioContext.currentTime, params.attack.value)
    this.gainNode.gain.setTargetAtTime(0, audioContext.currentTime + params.attack.value + params.hold.value, params.decay.value)
  }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { envelopeNode: {} }
  }
  componentDidMount() {
    const gainNode = audioContext.createGain()
    const vcaNode = new VCANode(gainNode)

    gainNode.gain.value = 0

    this.setState({ vcaNode , gainNode })
  }

  render(_, { vcaNode, gainNode }) {
    return (
      <Module>
        <h2>vca</h2>
        <div class='subset'>
          <h4>in</h4>
          <Socket input node={gainNode} />
        </div>
        <div class='subset'>
          <h4>cv</h4>
          <Socket input node={vcaNode} />
        </div>
        <div class='subset'>
          <h4>out</h4>
          <Socket output node={gainNode} />
        </div>
      </Module>
    )
  }
}