import { h, Component, createContext } from 'preact'
import { Sine } from './modules/Oscilators'
import Out from './modules/Out'
import './App.css'

const AudioContext = window.AudioContext || window.webkitAudioContext
const audioContext = new AudioContext()

export { audioContext }

export default class App extends Component {
  componentWillUnmount() {
    audioContext.close()
  }

  render(_, { audioContext }) {
    return (
      <div class='rack'>
        <Sine />
        <Out />
      </div>
    )
  }
}