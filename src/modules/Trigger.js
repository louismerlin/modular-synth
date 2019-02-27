import { h, Component } from 'preact'
import Module from './Module'
import Led from '../Led'
import Switch from '../Switch'
import Socket from '../Socket'

class TriggerNode {
  constructor(steps, clk) {
    this.trig = true
    this.clk = clk
    this.outs = []
    this.stepTrigs = (new Array(steps)).fill(0).map(() => ({ value: false }))
    this.currentStep = 0
  }

  connect(input) {
    if (input.update) {
      this.outs.push(input)
    }
  }

  disconnect(node) {
    this.outs = this.outs.filter(n => n != node)
  }

  update() {
    this.clk()
    this.sendSignal()
  }

  sendSignal() {
    if (this.stepTrigs[this.currentStep].value) {
      this.outs.forEach(o => o.update())
    }
  }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      triggerNode: { stepTrigs: [] },
      currentStep: 0,
    }
    this.clk = this.clk.bind(this)
  }

  componentDidMount() {
    const triggerNode = new TriggerNode(this.props.steps, this.clk)

    this.setState({ triggerNode })
  }

  clk() {
    const { steps } = this.props
    const { currentStep, triggerNode } = this.state
    const newStep = (currentStep + 1) % steps
    triggerNode.currentStep = newStep
    this.setState(() => ({
      currentStep: newStep
    }))
  }

  render({ steps }, { currentStep, triggerNode }) {
    const rows = new Array(Math.ceil(steps / 4))
    rows.fill(0)
    const { stepTrigs } = triggerNode
    return (
      <Module>
        <h2>trg</h2>
        <div class='subset'>
          {rows.map((_, i) => (
            <div class='h-subset'>
              {stepTrigs.slice(i * 4, i * 4 + 4).map((t, j) => (
                <div class='subset'>
                  <Led color='black' blink={ 4 * i + j == currentStep } />
                  <Switch param={t} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div class='h-subset'>
         <div class='subset'>
            <h4>trig</h4>
            <Socket input node={triggerNode} />
          </div>
         <div class='subset'>
            <h4>reset</h4>
            <Socket input />
          </div>
          <div class='subset'>
            <h4>out</h4>
            <Socket output node={triggerNode} />
          </div>
        </div>
      </Module>
    )
  }
}