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
  },
  lfo: {
    minValue: 1/6,
    maxValue: 6
  },
  filterFrequency: {
    minValue: 0,
    maxValue: 12000
  },
  qFactor: {
    minValue: 0.0001,
    maxValue: 20
  }
}

export default class Knob extends Component {
  constructor(props) {
    super(props)
    const properties = paramTypes[props.type] || {}
    this.state = {
      range: properties.maxValue - properties.minValue || 1,
      properties
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove(e) {
    if (e.buttons) {
      const { param } = this.props
      const { range, properties } = this.state
      let newValue = ((typeof param.value === 'number') ? param.value : param[0].value) - e.movementY * range / 1000
      if (newValue > properties.maxValue) newValue = properties.maxValue
      if (newValue < properties.minValue) newValue = properties.minValue
      if (param.update) {
        param.update({ knob: { value: newValue } })
      } else if (param instanceof Array) {
          param.forEach(p => p.value = newValue)
      } else {
        param.value = newValue
      }
      this.forceUpdate()
    }
  }

  render({ param, small }, { range, properties }) {
    param = (param instanceof Array) ? (param[0] || {}) : (param || {})
    const transform = `rotate(${ (param.value - properties.minValue) * 300 / range - 150 }deg)`
    const classes = `control ${small ? 'small' : ''}`
    const size = small ? '0.4cm' : '0.8cm'
    const lineHeight = small ? '0.35cm' : '0.7cm'
    return (
      <div class={classes}>
        <div class='knob'>
          <svg class='knob' style={{ transform }}>
            <circle cx={size} cy={size} r={size} stroke='black' stroke-width='2' fill='white' />
            <line x1={size} y1='0' x2={size} y2={lineHeight} stroke-width='2' stroke="black"/>
          </svg>
          <input onMouseMove={this.handleMouseMove} class='knob' type='range'/>
        </div>
      </div>
    )
  }
}