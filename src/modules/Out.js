import { h, Component } from 'preact'
import { audioContext } from '../App'
import Module from './Module'
import Knob from '../Knob'
import Socket from '../Socket'
import Switch from '../Switch';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { gainNode: {} }
    this.mute = this.mute.bind(this)
  }

  mute(on) {
    if (on) {
      audioContext.suspend()
    } else {
      audioContext.resume()
    }
  }

  componentDidMount() {
    const gainNode = audioContext.createGain()
    const finish = audioContext.destination

    gainNode.connect(finish)

    gainNode.gain.value = 0.1

    this.setState({ gainNode })
  }

  render(_, { gainNode }) {
    return (
      <Module>
        <h2>out</h2>
        <div class='subset'>
          <h3>mute</h3>
          <Switch on={true} action={this.mute} />
        </div>
        <div class='subset'>
          <h3>gain</h3>
          <Knob type='gain' param={gainNode.gain} />
        </div>
        <div class='subset'>
          <h4>in</h4>
          <Socket input node={gainNode} />
        </div>
      </Module>
    )
  }
}