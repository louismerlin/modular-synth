import { h, Component } from 'preact'
import './Switch.css'

export default class Switch extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { param } = this.props
    param.value = !param.value
    this.forceUpdate()
  }

  render({ param }) {
    const circleSize = '2mm'
    const switchSize = '1mm'
    const fill = param.value ? 'black' : 'white'
    return (
      <div class='switch'>
        <svg class='switch' onClick={this.handleClick}>
          <circle cx={circleSize} cy={circleSize} r={circleSize} stroke='black' stroke-width='2' fill='white' />
          <circle cx={circleSize} cy={param.value ? '0.5mm' : '3.5mm'} r={switchSize} stroke='black' stroke-width='1' fill={fill} />
        </svg>
      </div>
    )
  }
}