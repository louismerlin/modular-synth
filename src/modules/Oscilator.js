import { h, Component } from 'preact'
import { audioContext } from '../App'
import Module from './Module'
import Knob from '../Knob'
import Socket from '../Socket'

class FrequencyControlNode {
  constructor(nodes) {
    this.trig = true
    this.nodes = nodes
    this.value = nodes[0].frequency.value
    this.addedFrequency = 0
    this.update = this.update.bind(this)
  }

  update({ frequency, knob }) {
    if (knob) {
      const difference = knob.value - this.value
      this.value = knob.value
      this.nodes.forEach(node => node.frequency.value += difference)
    } else if (frequency) {
      const difference = frequency.value - this.addedFrequency
      this.addedFrequency = frequency.value
      this.nodes.forEach(node => node.frequency.value += difference)
    }
  }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sineNode: {},
      squareNode: {},
      triangleNode: {},
      sawNode: {}
    }
  }
  componentDidMount() {
    const sineNode = audioContext.createOscillator()
    const squareNode = audioContext.createOscillator()
    const triangleNode = audioContext.createOscillator()
    const sawNode = audioContext.createOscillator()
    const frequencyControlNode = new FrequencyControlNode([
      sineNode, squareNode, triangleNode, sawNode
    ])

    sineNode.type = 'sine'
    squareNode.type = 'square'
    triangleNode.type = 'triangle'
    sawNode.type = 'sawtooth'

    this.setState({ sineNode, squareNode, triangleNode, sawNode, frequencyControlNode })

    sineNode.start()
    squareNode.start()
    triangleNode.start()
    sawNode.start()
  }

  render(_, { sineNode, squareNode, triangleNode, sawNode, frequencyControlNode }) {
    const allFrequencies = [sineNode.frequency, squareNode.frequency, triangleNode.frequency, sawNode.frequency]
    return (
      <Module>
        <h2>osc</h2>
        <div class='subset'>
          <h3>freq</h3>
          <Knob type='frequency' param={frequencyControlNode} />
        </div>
        <div class='subset'>
          <h4>v/oct</h4>
          <Socket input node={frequencyControlNode} />
        </div>
        <div class='subset'>
          <div class='subset'>
            <h4>sine</h4>
            <Socket output node={sineNode} />
          </div>
          <div class='subset'>
            <h4>square</h4>
            <Socket output node={squareNode} />
          </div>
          <div class='subset'>
            <h4>triangle</h4>
            <Socket output node={triangleNode} />
          </div>
          <div class='subset'>
            <h4>saw</h4>
            <Socket output node={sawNode} />
          </div>
        </div>
      </Module>
    )
  }
}