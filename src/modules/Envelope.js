import { h, Component } from 'preact'
import Module from './Module'
import Knob from '../Knob'
import Socket from '../Socket'

class EnvelopeNode {
  constructor() {
    this.trig = true
    this.attack = { value: 0.05 }
    this.hold = { value: 0 }
    this.decay = { value: 0.4 }
    this.outs = []
    this.update = this.update.bind(this)
  }

  connect(input) {
    if (input.update) {
      this.outs.push(input)
    }
  }

  update() {
    this.outs.forEach(o => o.update({
      attack: this.attack,
      hold: this.hold,
      decay: this.decay
    }))
  }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { envelopeNode: {} }
  }
  componentDidMount() {
    const envelopeNode = new EnvelopeNode()

    this.setState({ envelopeNode })
  }

  render(_, { envelopeNode }) {
    return (
      <Module>
        <h2>env</h2>
        <div class='subset'>
          <div class='subset'>
            <h3>attack</h3>
            <Knob type='gain' param={envelopeNode.attack} />
          </div>
          <div class='subset'>
            <h3>hold</h3>
            <Knob type='gain' param={envelopeNode.hold} />
          </div>

          <div class='subset'>
            <h3>decay</h3>
            <Knob type='gain' param={envelopeNode.decay} />
          </div>
        </div>
        <div class='subset'>
          <h4>trig</h4>
          <Socket input node={envelopeNode} />
        </div>
        <div class='subset'>
          <h4>out</h4>
          <Socket output node={envelopeNode} />
        </div>
      </Module>
    )
  }
}