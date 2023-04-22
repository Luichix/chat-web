import React from 'react'
import styles from './Pack.module.css'
import classNames from 'classnames'

const Pack = ({ children, color = 'base', theme, style }) => {
  return (
    <div
      className={classNames(styles.pack, styles[`${color}-${theme}`], style)}
    >
      {children}
    </div>
  )
}

export default Pack
