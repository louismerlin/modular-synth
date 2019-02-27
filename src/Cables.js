import { h, Component } from 'preact'
import './Cables.css'

var downNode = { node: {}, input: false, output: false, component: {} }
var addCable = () => {}

const link = (method) => {
  addCable = method
}

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

const disconnect = (node1, node2) => {
  if (node1.output && node2.input) {
    node1.node.disconnect(node2.node)
  }
  if (node2.output && node1.input) {
    node2.node.disconnect(node1.node)
  }
}

export {
  connect
}

class CablesOverlay extends Component {
  constructor(props) {
    super(props)
    this.state = { cables: [] }
    this.addCable = this.addCable.bind(this)
    link(this.addCable)
    this.removeCable = this.removeCable.bind(this)
  }

  addCable(node1, node2) {
    this.setState(({ cables }) => ({
      cables: cables.concat({ nodes: [node1, node2], id: (new Date()).getTime() })
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

  render({ hideCables }, { cables }) {
    const overlayClass = `overlay ${hideCables ? 'hidden' : ''}`
    return(
      <svg class={overlayClass}>
        {cables.map(({ nodes, id }) => {
          const b1 = nodes[0].component.base
          const x1 = b1.offsetLeft + b1.offsetWidth / 2 - 1
          const y1 = b1.offsetTop + b1.offsetHeight / 2 - 1
          const b2 = nodes[1].component.base
          const x2 = b2.offsetLeft + b2.offsetWidth / 2 - 1
          const y2 = b2.offsetTop + b2.offsetHeight / 2 - 1
          return (<line class='cable' x1={x1} y1={y1} x2={x2} y2={y2} onClick={() => this.removeCable(id)} />)
        })}
      </svg> 
    )
  }
}

export default CablesOverlay