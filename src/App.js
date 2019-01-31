import { h, Component } from 'preact'
import Knob from './Knob'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    this.state = { audioContext, oscillatorNode: {}, gainNode: {} }
  }

  componentDidMount() {
    const { audioContext } = this.state

    const oscillatorNode = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const finish = audioContext.destination;

    //oscillatorNode.type = 'square';
    //oscillatorNode.frequency.setValueAtTime(220, audioContext.currentTime); // value in hertz

    oscillatorNode.connect(gainNode)
    gainNode.connect(finish)

    gainNode.gain.value = 0.01

    this.setState({ oscillatorNode, gainNode })

    oscillatorNode.start()
  }

  componentWillUnmount() {
    this.state.audioContext.close()
  }

  render() {
    return (
      <div>
        <Knob type='frequency' param={this.state.oscillatorNode.frequency} />
        <Knob type='gain' param={this.state.gainNode.gain} />
      </div>
    )
  }
}