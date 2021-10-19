const Inputs = (props) => {

  return (
    <div>
      {/* Top left X */}
      <input
        min='0'
        max='100'
        name='tlx'
        value={props.sizes.topLeft[0]}
        onChange={(event) => props.setSizes(event)}
        type='range'
      />
      {/* Top left Y */}
      <input
        min='0'
        max='100'
        name='tly'
        value={props.sizes.topLeft[1]}
        onChange={(event) => props.setSizes(event)}
        type='range'
      />
      {/* Top right X */}
      <input
        min='0'
        max='100'
        name='trx'
        value={props.sizes.topRight[0]}
        onChange={(event) => props.setSizes(event)}
        type='range'
      />
      {/* Top right Y */}
      <input
        min='0'
        max='100'
        name='try'
        value={props.sizes.topRight[1]}
        onChange={(event) => props.setSizes(event)}
        type='range'
      />
      {/* Bottom right X */}
      <input
        min='0'
        max='100'
        name='brx'
        value={props.sizes.bottomRight[0]}
        onChange={(event) => props.setSizes(event)}
        type='range'
      />
      {/* Bottom right Y */}
      <input
        min='0'
        max='100'
        name='bry'
        value={props.sizes.bottomRight[1]}
        onChange={(event) => props.setSizes(event)}
        type='range'
      />
      {/* Bottom left X */}
      <input
        min='0'
        max='100'
        name='blx'
        value={props.sizes.bottomLeft[0]}
        onChange={(event) => props.setSizes(event)}
        type='range'
      />
      {/* Bottom left Y */}
      <input
        min='0'
        max='100'
        name='bly'
        value={props.sizes.bottomLeft[1]}
        onChange={(event) => props.setSizes(event)}
        type='range'
      />
    </div>
  );
};

export default Inputs;
