import { h, Component } from 'preact'
import { audioContext } from '../App'
import Module from './Module'
import Knob from '../Knob'
import Socket from '../Socket'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { waveShaperNode: {} }
  }
  componentDidMount() {
    const waveShaperNode = audioContext.createWaveShaper()

    function makeDistortionCurve(amount) {
      var k = typeof amount === 'number' ? amount : 50,
        n_samples = 44100,
        curve = new Float32Array(n_samples),
        deg = Math.PI / 180,
        i = 0,
        x;
      for ( ; i < n_samples; ++i ) {
        x = i * 2 / n_samples - 1;
        curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
      }
      return curve;
    };

    waveShaperNode.curve = makeDistortionCurve(50);
    waveShaperNode.oversample = '4x';

    this.setState({ waveShaperNode })
  }

  render(_, { waveShaperNode }) {
    return (
      <Module>
        <h2>dis</h2>
        <div class='subset'>
          <h4>in</h4>
          <Socket input node={waveShaperNode} />
        </div>
        <div class='subset'>
          <h4>out</h4>
          <Socket output node={waveShaperNode} />
        </div>
      </Module>
    )
  }
}

