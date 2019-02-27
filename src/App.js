import { h, Component, createContext } from 'preact'
import Projects from './modules/Projects'
import Creator from './modules/Creator'
import Params from './modules/Params'
import Out from './modules/Out'
import CablesOverlay from './Cables'
import './App.css'

const AudioContext = window.AudioContext || window.webkitAudioContext

let audioContext
let removeModule

export {
  audioContext,
  removeModule
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { modules: [], hideCables: false }
    this.addModule = this.addModule.bind(this)
    this.removeModule = this.removeModule.bind(this)
    removeModule = this.removeModule
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

  removeModule(mId) {
    this.setState(({ modules }) => ({ modules: modules.filter(m => m.attributes.mId !== mId) }))
  }

  toggleHideCables() {
    this.setState(({ hideCables }) => ({ hideCables: !hideCables }))
  }

  render(_, { modules, hideCables }) {
    return (
      <div class='rack'>
        <Projects />
        <Params hideCables={this.toggleHideCables} />
        <Creator addModule={this.addModule} />
        {modules}
        <Out />
        <CablesOverlay hideCables={hideCables} />
      </div>
    )
  }
}