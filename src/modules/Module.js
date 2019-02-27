import { h, Component } from 'preact'
import './Module.css'
import { removeModule } from '../App';

class Screw extends Component {
  constructor(props) {
    super(props)
    this.state = { rotate: {
      'bottom': Math.random() * 90,
      'top': Math.random() * 90
    }}
  }
  render({ pos, handleClick }, { rotate }) {
    return(
      <svg class={`screw ${pos}`} style={{ transform: `rotate(${rotate[pos]}deg)`}} onClick={handleClick}>
        <circle fill='black' r='1.6mm' cx='1.6mm' cy='1.6mm' />
        <line x1='30%' y1='30%' x2='70%' y2='70%' stroke='white' stroke-width='2' />
        <line x1='30%' y1='70%' x2='70%' y2='30%' stroke='white' stroke-width='2' />
      </svg>
    )
  }
}

// class='module' is important !! see how cables are removed when removing module
export default ({ children, hp, mId }) => (
  <div class='module' style={hp ? `width:${hp * 5.08}mm` : ''} mId={mId}>
    <Screw pos='top' handleClick={() => removeModule(mId)} />
    {children}
    <Screw pos='bottom' handleClick={() => removeModule(mId)} />
  </div>
)