import { h, Component } from 'preact'
import { audioContext } from '../App'
import Module from './Module'
import Led from '../Led'
import Knob from '../Knob'
import Socket from '../Socket'

class ClockNode {
  constructor() {
    this.clk = true
    this.frequency = {
      value: 1
    }
    this.outs = []
    this.beep = () => {}
    this.clock = this.clock.bind(this)
    this.update = this.update.bind(this)
    this.start = this.start.bind(this)
  }

  connect(input) {
    if (input.update) {
      this.outs.push(input)
    }
  }

  update() {
    this.beep()
    this.outs.forEach(o => o.update())
  }

  clock() {
    window.setTimeout(() => this.clock(), 1 / this.frequency.value * 1000)
    this.update()
  }

  start(beep) {
    this.beep = beep
    this.clock()
  }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { clockNode: {}, beep: false }
    this.beep = this.beep.bind(this)
  }

  componentDidMount() {
    const clockNode = new ClockNode()

    this.setState({ clockNode })

    clockNode.start(this.beep)
  }

  beep() {
    this.setState({ beep: true })
    window.setTimeout(() => this.setState({ beep: false }), 1/30 * 1000)
  }

  render(_, { clockNode, beep }) {
    return (
      <Module>
        <h2>clk</h2>
        <Led blink={beep} color='black' />
        <div class='subset'>
          <h3>freq</h3>
          <Knob type='lfo' param={clockNode.frequency} />
        </div>
        <div class='subset'>
          <h4>out</h4>
          <Socket output node={clockNode} />
        </div>
      </Module>
    )
  }
}