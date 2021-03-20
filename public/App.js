import { Component } from 'preact'
import Projects from './modules/Projects'
import Creator from './modules/Creator'
import Params from './modules/Params'
import Out from './modules/Out'
import CablesOverlay from './Cables'
import './App.css'

const AudioContext = window.AudioContext || window.webkitAudioContext

let audioContext
let removeModule

let downNode = { node: {}, input: false, output: false, component: {} }
let addCable = () => {}

const connect = (node, input, output, down, component) => {
  if (down) downNode = { node, input, output, component }
  else if (downNode.node !== {} && (downNode.node.trig === node.trig)) {
    // MABYE there should be no else there, a node could be input AND output ?
    if (output && downNode.input) {
      node.connect(downNode.node)
      addCable(downNode, { node, input, output, down, component })
    }
    if (input && downNode.output) {
      if (node instanceof Array) {
        node.forEach(n => downNode.node.connect(n))
      } else {
        downNode.node.connect(node)
      }
      addCable(downNode, { node, input, output, down, component })
    }
  }
}

const link = (method) => {
  addCable = method
}

const disconnect = (node1, node2) => {
  if (node1.output && node2.input) {
    node1.node.disconnect(node2.node)
  }
  if (node2.output && node1.input) {
    node2.node.disconnect(node1.node)
  }
}

export {
  audioContext,
  removeModule,
  connect
}

const findModule = (element) => {
  if (element.className === 'module') {
    return element
  } else {
    return findModule(element.parentNode)
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modules: [],
      hideCables: false,
      cables: []
    }

    this.addModule = this.addModule.bind(this)
    this.removeModule = this.removeModule.bind(this)
    removeModule = this.removeModule
    this.toggleHideCables = this.toggleHideCables.bind(this)

    audioContext = new AudioContext()
    audioContext.suspend()

    this.addCable = this.addCable.bind(this)
    this.removeCable = this.removeCable.bind(this)
    link(this.addCable)
  }

  componentWillUnmount() {
    audioContext.close()
  }

  addModule(module) {
    this.setState(({ modules }) => ({ modules: modules.concat(module) }))
  }

  removeModule(mId) {
    this.setState(({ modules, cables }) => (
      {
        modules: modules.filter(m => m.attributes.mId !== mId)
      }
    ))
    this.state.cables
      .filter(c => c.nodes.some(n => findModule(n.component.base).attributes.mid !== mId))
      .forEach(({ id }) => this.removeCable(id))
  }

  toggleHideCables() {
    this.setState(({ hideCables }) => ({ hideCables: !hideCables }))
  }

  addCable(node1, node2) {
    this.setState(({ cables }) => ({
      cables: cables.concat({ nodes: [node1, node2], id: Math.random() * Math.pow(10, 17) })
    }))
    this.forceUpdate()
  }

  removeCable(removeId) {
    const [node1, node2] = this.state.cables.find(({ id }) => id === removeId).nodes
    this.setState(({ cables }) => ({
      cables: cables.filter(({ id }) => id !== removeId)
    }))
    disconnect(node1, node2)
  }

  render(_, { modules, hideCables, cables }) {
    return (
      <div class='rack'>
        <Projects />
        <Params hideCables={this.toggleHideCables} />
        <Creator addModule={this.addModule} />
        {modules}
        <Out />
        <CablesOverlay hideCables={hideCables} cables={cables} removeCable={this.removeCable} />
      </div>
    )
  }
}
