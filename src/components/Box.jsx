import styles from './Box.module.css'

const Box = (props) => {
  
  return (

<div className={styles.boxContainer}>
    <div style={{ clipPath: `polygon(${props.sizes.topLeft[0]}% ${props.sizes.topLeft[1]}%, ${props.sizes.topRight[0]}% ${props.sizes.topRight[1]}%, ${props.sizes.bottomLeft[0]}% ${props.sizes.bottomLeft[1]}%, ${props.sizes.bottomRight[0]}% ${props.sizes.bottomRight[1]}%)` }} className={styles.box}>
      This is the box
    </div>
    <div style={{ clipPath: `polygon(${props.outerSizes.topLeft[0]}% ${props.outerSizes.topLeft[1]}%, ${props.outerSizes.topRight[0]}% ${props.outerSizes.topRight[1]}%, ${props.outerSizes.bottomLeft[0]}% ${props.outerSizes.bottomLeft[1]}%, ${props.outerSizes.bottomRight[0]}% ${props.outerSizes.bottomRight[1]}%)` }} className={styles.outerBox}>
      Inner box
    </div>
</div>

  )
}

export default Box