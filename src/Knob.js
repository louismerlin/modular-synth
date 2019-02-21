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
    const properties = paramTypes[props.type] || {}
    this.state = {
      range: properties.maxValue - properties.minValue,
      properties
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove(e) {
    if (e.buttons) {
      const { param } = this.props
      const { range, properties } = this.state
      let newValue = param.value - e.movementY * range / 1000
      if (newValue > properties.maxValue) newValue = properties.maxValue
      if (newValue < properties.minValue) newValue = properties.minValue
      param.value = newValue
      this.forceUpdate()
    }
  }

  render({ param }, { range }) {
    param = param || {}
    const transform = `rotate(${ param.value * 300 / range - 150 }deg)`
    return (
      <div class='control'>
        <div class='knob'>
          <svg class='knob' style={{ transform }}>
            <circle cx="40" cy="40" r="40" stroke="black" stroke-width="2" fill="white" />
            <rect x="40" width="2" height="30" fill="black"/>
          </svg>
          <input onMouseMove={this.handleMouseMove} class='knob' type='range'/>
        </div>
      </div>
    )
  }
}