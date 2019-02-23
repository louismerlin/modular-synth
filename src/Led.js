import { h } from 'preact'

export default ({ color, blink }) => (
  <svg width='2mm' height='2mm' style='overflow: visible; margin: 0.1cm;'>
    <circle cx='1mm' cy='1mm' r='1mm' fill={blink ? color : 'white'} stroke='black' stroke-width='2' />
  </svg>
)