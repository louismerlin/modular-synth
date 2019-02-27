import { h, Component } from 'preact'
import { audioContext } from '../App'
import Module from './Module'
import Knob from '../Knob'
import Socket from '../Socket'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { lowpassNode: {}, highpassNode: {} }
  }
  componentDidMount() {
    const lowpassNode = audioContext.createBiquadFilter()
    const highpassNode = audioContext.createBiquadFilter()

    lowpassNode.type = 'lowpass'
    highpassNode.type = 'highpass'

    this.setState({ lowpassNode, highpassNode })
  }

  render({ mId }, { lowpassNode, highpassNode }) {
    const allNodes = [lowpassNode, highpassNode]
    const allFrequencies = allNodes.map(n => n.frequency)
    const allResonances = allNodes.map(n => n.Q)
    return (
      <Module hp={6} mId={mId}>
        <h2>flt</h2>
        <div class='subset'>
          <h3>freq</h3>
          <Knob type='filterFrequency' param={allFrequencies} />
        </div>
        <div class='subset'>
          <h3>res</h3>
          <Knob type='qFactor' param={allResonances} />
        </div>
        <div class='subset'>
          <h4>in</h4>
          <Socket input node={allNodes} />
        </div>
        <div class='subset'>
          <h4>lp</h4>
          <Socket output node={lowpassNode} />
        </div>
        <div class='subset'>
          <h4>hp</h4>
          <Socket output node={highpassNode} />
        </div>
      </Module>
    )
  }
}