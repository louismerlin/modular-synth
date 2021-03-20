import { Component } from 'preact'
import './Switch.css'

export default class Switch extends Component {
  constructor(props) {
    super(props)
    this.state = { on: props.on || false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { param, action } = this.props
    if (param) {
      param.value = !param.value
      this.forceUpdate()
    } else {
      action(!this.state.on)
      this.setState(({ on }) => ({ on: !on }))
    }
  }

  render({ param }, { on }) {
    const circleSize = '2mm'
    const switchSize = '1mm'
    on = param ? param.value : on
    const fill = on ? 'black' : 'white'
    return (
      <div class='switch'>
        <svg class='switch' onClick={this.handleClick}>
          <circle cx={circleSize} cy={circleSize} r={circleSize} stroke='black' stroke-width='2' fill='white' />
          <circle cx={circleSize} cy={on ? '0.5mm' : '3.5mm'} r={switchSize} stroke='black' stroke-width='1' fill={fill} />
        </svg>
      </div>
    )
  }
}
