import { h, Component, createContext } from 'preact'
import Creator from './modules/Creator'
import './App.css'
import CablesOverlay from './Cables';
import Out from './modules/Out'

const AudioContext = window.AudioContext || window.webkitAudioContext

let audioContext
export { audioContext }

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { modules: [] }
    this.addModule = this.addModule.bind(this)
    audioContext = new AudioContext()
    audioContext.suspend()
  }

  componentWillUnmount() {
    audioContext.close()
  }

  addModule(module) {
    this.setState(({ modules }) => ({ modules: modules.concat(module) }))
  }

  render(_, { modules }) {
    return (
      <div class='rack'>
        <Creator addModule={this.addModule} />
        {modules}
        <Out />
        <CablesOverlay />
      </div>
    )
  }
}