import styles from './Box.module.css'
import Code from './Code'

const Box = (props) => {
  
  return (
<div>
  <div className={styles.boxContainer}>
    <div style={{ clipPath: `polygon(${props.sizes.topLeft[0]}% ${props.sizes.topLeft[1]}%, ${props.sizes.topRight[0]}% ${props.sizes.topRight[1]}%, ${props.sizes.bottomLeft[0]}% ${props.sizes.bottomLeft[1]}%, ${props.sizes.bottomRight[0]}% ${props.sizes.bottomRight[1]}%)` }} className={styles.box}>
      
    </div>
    <div style={{ clipPath: `polygon(${props.outerSizes.topLeft[0]}% ${props.outerSizes.topLeft[1]}%, ${props.outerSizes.topRight[0]}% ${props.outerSizes.topRight[1]}%, ${props.outerSizes.bottomLeft[0]}% ${props.outerSizes.bottomLeft[1]}%, ${props.outerSizes.bottomRight[0]}% ${props.outerSizes.bottomRight[1]}%)` }} className={styles.outerBox}>
      
    </div>


</div>
    <Code outer={props.outerSizes} inner={props.sizes} />
</div>
  )
}

export default Box