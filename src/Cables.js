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
      addCable(downNode.component, component)
    }
    if (input && downNode.output) {
      if (node instanceof Array) {
        node.forEach(n => downNode.node.connect(n))
      } else {
        downNode.node.connect(node)
      }
      addCable(downNode.component, component)
    }
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
  }

  addCable(component1, component2) {
    this.setState(({ cables }) => ({
      cables: cables.concat({ components: [component1, component2] })
    }))
    this.forceUpdate()
  }

  render(_, { cables }) {
    return(
      <svg class='overlay'>
        {cables.map(({ components }) => {
          const b1 = components[0].base
          const x1 = b1.offsetLeft + b1.offsetWidth / 2 - 1
          const y1 = b1.offsetTop + b1.offsetHeight / 2 - 1
          const b2 = components[1].base
          const x2 = b2.offsetLeft + b2.offsetWidth / 2 - 1
          const y2 = b2.offsetTop + b2.offsetHeight / 2 - 1
          return (<line class='cable' x1={x1} y1={y1} x2={x2} y2={y2} stroke-linecap='round' />)
        })}
      </svg> 
    )
  }
}

export default CablesOverlay