import React from 'react'
import styles from './spinner.module.scss'

function Spinner(props) {
  return (
    <div class={styles.spinner}>
      <div className={styles.spinwheel} />
    </div>
  )
}

export default Spinner
