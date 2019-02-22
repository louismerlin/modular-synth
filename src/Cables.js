import { h, Component } from 'preact'

var downNode = { node: {}, input: false, output: false, component: {} }

const connect = (node, input, output, down, component) => {
  if (down) downNode = { node, input, output }
  else if (downNode.node !== {}) {
    if (output && downNode.input) {
      node.connect(downNode.node)
    }
    if (input && downNode.output) {
      downNode.node.connect(node)
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
  }
  render(_, { cables }) {
    return(
      <div>
        {cables.map(cable => <h1>cable</h1>)}
      </div>
    )
  }
}

export default CablesOverlay