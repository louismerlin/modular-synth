import { h, Component } from 'preact'
import './Knob.css'

const paramTypes = {
  frequency: {
    minValue: 0,
    maxValue: 1760,
  },
  gain: {
    minValue: 0,
    maxValue: 1
  }
}

export default class Knob extends Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove(e) {
    if (e.buttons) {
      const { param, type } = this.props
      const properties = paramTypes[type]
      const range = properties.maxValue - properties.minValue
      let newValue = param.value + e.movementX * range / 1000
      if (newValue > properties.maxValue) newValue = properties.maxValue
      if (newValue < properties.minValue) newValue = properties.minValue
      param.value = newValue
    }
  }

  render({ param }) {
    param = param || {}
    return (
      <input onMouseMove={this.handleMouseMove} class='knob' type='range'/>
    )
  }
}