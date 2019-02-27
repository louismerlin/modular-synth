import { h, Component, createContext } from 'preact'
import Creator from './modules/Creator'
import Params from './modules/Params'
import Out from './modules/Out'
import CablesOverlay from './Cables'
import './App.css'

const AudioContext = window.AudioContext || window.webkitAudioContext

let audioContext
export { audioContext }

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { modules: [], hideCables: false }
    this.addModule = this.addModule.bind(this)
    this.toggleHideCables = this.toggleHideCables.bind(this)
    audioContext = new AudioContext()
    audioContext.suspend()
  }

  componentWillUnmount() {
    audioContext.close()
  }

  addModule(module) {
    this.setState(({ modules }) => ({ modules: modules.concat(module) }))
  }

  toggleHideCables() {
    this.setState(({ hideCables }) => ({ hideCables: !hideCables }))
  }

  render(_, { modules, hideCables }) {
    return (
      <div class='rack'>
        <Params hideCables={this.toggleHideCables} />
        <Creator addModule={this.addModule} />
        {modules}
        <Out />
        <CablesOverlay hideCables={hideCables} />
      </div>
    )
  }
}