import { h, Component } from 'preact'
import Module from './Module'
import Led from '../Led'
import Knob from '../Knob'
import Socket from '../Socket'

class SequencerNode {
  constructor() {
    this.trig = true
    this.outs = []
    this.connect = this.connect.bind(this)
    this.update = this.update.bind(this)
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
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {
  }

  render() {
    return (
      <Module>
        <h2>seq</h2>
        <div class='subset'>
          <div class='h-subset'>
            <div class='subset'>
              <Led color='black' />
              <Knob small type='freq' />
            </div>
           <div class='subset'>
              <Led color='black' />
              <Knob small type='freq' />
            </div>
           <div class='subset'>
              <Led color='black' />
              <Knob small type='freq' />
            </div>
           <div class='subset'>
              <Led color='black' />
              <Knob small type='freq' />
            </div>
          </div>
          <div class='h-subset'>
            <div class='subset'>
              <Led color='black' />
              <Knob small type='freq' />
            </div>
           <div class='subset'>
              <Led color='black' />
              <Knob small type='freq' />
            </div>
           <div class='subset'>
              <Led color='black' />
              <Knob small type='freq' />
            </div>
           <div class='subset'>
              <Led color='black' />
              <Knob small type='freq' />
            </div>
          </div>
        </div>
        <div class='h-subset'>
         <div class='subset'>
            <h4>trig</h4>
            <Socket input />
          </div>
         <div class='subset'>
            <h4>reset</h4>
            <Socket input />
          </div>
          <div class='subset'>
            <h4>out</h4>
            <Socket output />
          </div>
        </div>
      </Module>
    )
  }
}