import Module from './Module'
import Switch from '../Switch'

export default ({ hideCables }) => (
  <Module hp={6}>
    <h2>~</h2>
    <div class='subset'>
      <h3>hide cables</h3>
      <Switch action={hideCables} />
    </div>
  </Module>
)
