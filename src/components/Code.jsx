const Code = (props) => {
  return (
    <div>
      <h3>Outer Div</h3>
      <p>clipPath: polygon({props.outer.topLeft[0]}% {props.outer.topLeft[1]}%, {props.outer.topRight[0]}% {props.outer.topRight[1]}%, {props.outer.bottomLeft[0]}% {props.outer.bottomLeft[1]}%, {props.outer.bottomRight[0]}% {props.outer.bottomRight[1]}%)</p>
    
    
    <h3>Inner Div</h3>
    <p>clipPath: polygon({props.inner.topLeft[0]}% {props.inner.topLeft[1]}%, {props.inner.topRight[0]}% {props.inner.topRight[1]}%, {props.inner.bottomLeft[0]}% {props.inner.bottomLeft[1]}%, {props.inner.bottomRight[0]}% {props.inner.bottomRight[1]}%)</p>
    </div>
  )
}

export default Code