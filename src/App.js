import { useState } from 'react';

import Box from './components/Box.jsx'
import Inputs from './components/Inputs.jsx'

const App = () => {

  const [boxSizing, setBoxSizing] = useState({
    topLeft: [0, 0],
    topRight: [100, 0],
    bottomLeft: [100, 100],
    bottomRight: [0, 100]
  })

  const [outerBoxSizing, setOuterBoxSizing] = useState({
    topLeft: [0, 0],
    topRight: [100, 0],
    bottomLeft: [100, 100],
    bottomRight: [0, 100]
  })

  const handleChange = (event) => {
    let newSizes = boxSizing;

    switch(event.target.name) {
      case 'tlx':
        newSizes.topLeft[0] = parseInt(event.target.value);
        setBoxSizing({...newSizes});
        break;

      case 'tly':
        newSizes.topLeft[1] = event.target.value;
        setBoxSizing({...newSizes});
        break;

      case 'trx':
        newSizes.topRight[0] = event.target.value;
        setBoxSizing({...newSizes});
        break;

      case 'try':
        newSizes.topRight[1] = event.target.value;
        setBoxSizing({...newSizes});
        break;

      case 'brx':
        newSizes.bottomRight[0] = event.target.value;
        setBoxSizing({...newSizes});
        break;

      case 'bry':
        newSizes.bottomRight[1] = event.target.value;
        setBoxSizing({...newSizes});
        break;

      case 'blx':
        newSizes.bottomLeft[0] = event.target.value;
        setBoxSizing({...newSizes});
        break;

      case 'bly':
        newSizes.bottomLeft[1] = event.target.value;
        setBoxSizing({...newSizes});
        break;

      default:
        break;
    }
  };

  const handleOuterChange = (event) => {
    let newSizes = outerBoxSizing;

    switch(event.target.name) {
      case 'otlx':
        newSizes.topLeft[0] = parseInt(event.target.value);
        setOuterBoxSizing({...newSizes});
        break;

      case 'otly':
        newSizes.topLeft[1] = event.target.value;
        setOuterBoxSizing({...newSizes});
        break;

      case 'otrx':
        newSizes.topRight[0] = event.target.value;
        setOuterBoxSizing({...newSizes});
        break;

      case 'otry':
        newSizes.topRight[1] = event.target.value;
        setOuterBoxSizing({...newSizes});
        break;

      case 'obrx':
        newSizes.bottomRight[0] = event.target.value;
        setOuterBoxSizing({...newSizes});
        break;

      case 'obry':
        newSizes.bottomRight[1] = event.target.value;
        setOuterBoxSizing({...newSizes});
        break;

      case 'oblx':
        newSizes.bottomLeft[0] = event.target.value;
        setOuterBoxSizing({...newSizes});
        break;

      case 'obly':
        newSizes.bottomLeft[1] = event.target.value;
        setOuterBoxSizing({...newSizes});
        break;

      default:
        break;
    }
  };


  return (
    <div>
      <Inputs sizes={boxSizing} setSizes={(event) => handleChange(event)} outerSizes={outerBoxSizing} setOuterSizes={(event) => handleOuterChange(event)} />

      <Box outerSizes={outerBoxSizing} sizes={boxSizing} />
    </div>
  )
}

export default App