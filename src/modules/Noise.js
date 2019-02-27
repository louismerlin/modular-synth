import { h, Component } from 'preact'
import { audioContext } from '../App'
import Module from './Module'
import Socket from '../Socket'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { bufferSource: {} }
  }

  componentDidMount() {
    const arrayBuffer = audioContext.createBuffer(1, audioContext.sampleRate, audioContext.sampleRate);

    const channel = arrayBuffer.getChannelData(0)

    channel.forEach((_, i, b) => b[i] = Math.random() * 2 - 1)

    const bufferSource = audioContext.createBufferSource()

    bufferSource.loop = true

    bufferSource.buffer = arrayBuffer

    this.setState({ bufferSource })

    bufferSource.start()
  }

  render({ mId }, { bufferSource }) {
    return (
      <Module hp={3} mId={mId}>
        <h2>noi</h2>
        <div class='subset'>
          <h4>out</h4>
          <Socket output node={bufferSource} />
        </div>
      </Module>
    )
  }
}