import { h } from 'preact'
import Module from './Module'
import Clock from './Clock'
import Sequencer from './Sequencer'
import Trigger from './Trigger'
import Envelope from './Envelope'
import Oscillator from './Oscillator'
import Noise from './Noise'
import VCA from './VCA'
import Filter from './Filter'
import Distortion from './Distortion'

const modules = [
  {
    name: 'Clock',
    description: 'A simple clock',
    component: Clock
  }, {
    name: 'Sequencer',
    description: 'A 16-step sequencer for creating melodies',
    component: Sequencer,
    props: { steps: 16 }
  }, {
    name: 'Trigger Sequencer',
    description: 'A 16-step trigger sequencer for creating rythms',
    component: Trigger,
    props: { steps: 16 }
  }, {
    name: 'Envelope',
    description: 'An AHD envelope generator',
    component: Envelope
  }, {
    name: 'Oscillator',
    description: 'A simple multi-wave oscillator',
    component: Oscillator
  }, {
    name: 'Noise',
    description: 'A white noise generator',
    component: Noise
  }, {
    name: 'VCA',
    description: 'A voltage-controlled amplifier',
    component: VCA
  }, {
    name: 'Filter',
    description: 'A low-pass and high-pass filter',
    component: Filter
  }, {
    name: 'Distortion',
    description: 'A distortion effect',
    component: Distortion
  }
]

export default ({ addModule }) => (
  <Module hp={6}>
    <div class='subset'>
      <h2>+</h2>
    </div>
    {modules.map(module => (
      <div class='subset' onClick={() => addModule(<module.component {...module.props} />)}>
        <h5 title={module.description}>{module.name}</h5>
      </div>
    ))}
  </Module>
)