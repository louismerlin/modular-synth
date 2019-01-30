import { h, Component } from 'preact'
import './App.css'


export default class App extends Component {
  constructor(props) {
    super(props)
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    this.state = { audioContext }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { audioContext } = this.state

    const oscillatorNode = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const finish = audioContext.destination;

    oscillatorNode.type = 'square';
    oscillatorNode.frequency.setValueAtTime(220, audioContext.currentTime); // value in hertz

    oscillatorNode.connect(gainNode)
    gainNode.connect(finish)

    this.setState({ oscillatorNode })

    //oscillatorNode.start()
  }

  handleChange(e) {
    const freq = e.target.value;
    this.state.oscillatorNode.frequency.setValueAtTime(freq, this.state.audioContext.currentTime)
  }

  componentWillUnmount() {
    this.state.audioContext.close()
  }

  render() {
    return (
      <div>
        <input type="range" min="110" max="880" value="440" onChange={this.handleChange}/>
      </div>
    )
  }
}