import { h, Component } from 'preact'
import Module from './Module'
import Led from '../Led'
import Knob from '../Knob'
import Socket from '../Socket'

class Note {
  constructor(index, sequencer) {
    this.index = index
    this.sequencer = sequencer
    this.value = 440
  }

  update({ knob }) {
    this.value = knob.value
    this.sequencer.updateNote(this.index)
  }
}

class SequencerNode {
  constructor(steps, clk) {
    this.trig = true
    this.clk = clk
    this.outs = []
    this.notes = new Array(steps)
    this.notes.fill(0)
    this.notes = this.notes.map((_, i) => (new Note(i, this)))
    this.currentStep = 0
    this.connect = this.connect.bind(this)
    this.update = this.update.bind(this)
    this.sendSignal = this.sendSignal.bind(this)
    this.updateNote = this.updateNote.bind(this)
  }

  connect(input) {
    if (input.update) {
      input.update({ frequency: this.notes[this.currentStep] })
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
    this.outs.forEach(o => o.update({ frequency: this.notes[this.currentStep] }))
  }

  updateNote(index) {
    if (index === this.currentStep) this.sendSignal()
  }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sequencerNode: { notes: [] },
      currentStep: 0
    }
    this.clk = this.clk.bind(this)
  }

  componentDidMount() {
    const sequencerNode = new SequencerNode(this.props.steps, this.clk)

    this.setState({ sequencerNode })
  }

  clk() {
    const { steps } = this.props
    const { currentStep, sequencerNode } = this.state
    const newStep = (currentStep + 1) % steps
    sequencerNode.currentStep = newStep
    this.setState(() => ({
      currentStep: newStep
    }))
  }

  render({ steps }, { currentStep, sequencerNode }) {
    const rows = new Array(Math.ceil(steps / 4))
    rows.fill(0)
    return (
      <Module>
        <h2>seq</h2>
        <div class='subset'>
          {rows.map((_, i) => (
            <div class='h-subset'>
              {sequencerNode.notes.slice(i * 4, i * 4 + 4).map((note, j) => (
                <div class='subset'>
                  <Led color='black' blink={ 4 * i + j == currentStep } />
                  <Knob small type='frequency' param={note} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div class='h-subset'>
         <div class='subset'>
            <h4>trig</h4>
            <Socket input node={sequencerNode} />
          </div>
         <div class='subset'>
            <h4>reset</h4>
            <Socket input />
          </div>
          <div class='subset'>
            <h4>out</h4>
            <Socket output node={sequencerNode} />
          </div>
        </div>
      </Module>
    )
  }
}