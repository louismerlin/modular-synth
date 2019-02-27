import { h } from 'preact'
import './Module.css'

const Screw = ({ pos }) => (
  <svg class={`screw ${pos}`} style={{ transform: `rotate(${Math.random() * 90}deg)`}}>
    <circle fill='black' r='1.6mm' cx='1.6mm' cy='1.6mm' />
    <line x1='30%' y1='30%' x2='70%' y2='70%' stroke='white' stroke-width='2' />
    <line x1='30%' y1='70%' x2='70%' y2='30%' stroke='white' stroke-width='2' />
  </svg>
)

export default ({ children, hp }) => (
  <div class='module' style={hp ? `width:${hp * 5.08}mm` : ''}>
    <Screw pos='top' />
    {children}
    <Screw pos='bottom' />
  </div>
)