import styles from './Box.module.css'

const Box = (props) => {
  
  return (
    <div style={{ clipPath: `polygon(${props.sizes.topLeft[0]}% ${props.sizes.topLeft[1]}%, ${props.sizes.topRight[0]}% ${props.sizes.topRight[1]}%, ${props.sizes.bottomLeft[0]}% ${props.sizes.bottomLeft[1]}%, ${props.sizes.bottomRight[0]}% ${props.sizes.bottomRight[1]}%)` }} className={styles.box}>
      This is the box
    </div>
  )
}

export default Box