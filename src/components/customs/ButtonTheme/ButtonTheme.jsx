import React from 'react'
import styles from './ButtonTheme.module.css'

const ButtonTheme = ({ checked, checkedHandler = () => {}, themeHandler }) => {
  return (
    <div className={styles.switch}>
      <input
        id="toggle"
        type="checkbox"
        checked={checked}
        className={styles.input}
        onClick={checkedHandler}
        onChange={themeHandler}
      />
      <label htmlFor="toggle" className={styles.button}></label>
    </div>
  )
}

export default ButtonTheme
