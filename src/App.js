import { h, Component } from 'preact'
import { Sine } from './modules/Oscilators'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    this.state = { audioContext }
  }

  componentWillUnmount() {
    this.state.audioContext.close()
  }

  render(_, { audioContext }) {
    return (
      <div class='rack'>
        <Sine audioContext={audioContext} />
      </div>
    )
  }
}