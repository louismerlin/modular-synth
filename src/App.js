import { h, Component, createContext } from 'preact'
import Clock from './modules/Clock'
import Sequencer from './modules/Sequencer'
import Envelope from './modules/Envelope'
import Oscilator from './modules/Oscilator'
import VCA from './modules/VCA'
import Filter from './modules/Filter'
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
        <Sequencer steps={16} />
        <Envelope />
        <Oscilator />
        <VCA />
        <Filter />
        <Out />
        <CablesOverlay />
      </div>
    )
  }
}