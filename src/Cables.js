import { h, Component } from 'preact'
import './Cables.css'

export default ({ hideCables, cables, removeCable }) => {
  const overlayClass = `overlay ${hideCables ? 'hidden' : ''}`
  return(
    <svg class={overlayClass}>
      {cables.map(({ nodes, id }) => {
        const b1 = nodes[0].component.base
        const x1 = b1.offsetLeft + b1.offsetParent.offsetLeft + b1.offsetWidth / 2 - 1
        const y1 = b1.offsetTop + b1.offsetParent.offsetTop + b1.offsetHeight / 2 - 1
        const b2 = nodes[1].component.base
        const x2 = b2.offsetLeft + b2.offsetParent.offsetLeft + b2.offsetWidth / 2 - 1
        const y2 = b2.offsetTop + b2.offsetParent.offsetTop + b2.offsetHeight / 2 - 1
        return (<line class='cable' x1={x1} y1={y1} x2={x2} y2={y2} onClick={() => removeCable(id)} />)
      })}
    </svg> 
  )
}