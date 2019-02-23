import { h, Component, createContext } from 'preact'
import Clock from './modules/Clock'
import Envelope from './modules/Envelope'
import Oscilator from './modules/Oscilator'
import VCA from './modules/VCA'
import Out from './modules/Out'
import './App.css'
import CablesOverlay from './Cables';

const AudioContext = window.AudioContext || window.webkitAudioContext
const audioContext = new AudioContext()

export { audioContext }

export default class App extends Component {
  componentWillUnmount() {
    audioContext.close()
  }

  render() {
    return (
      <div class='rack'>
        <Clock />
        <Envelope />
        <Oscilator />
        <VCA />
        <Out />
        <CablesOverlay />
      </div>
    )
  }
}