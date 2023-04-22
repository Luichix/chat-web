import React, { useEffect, useRef } from 'react'
import styles from './Hack.module.css'

const Hack = () => {
  const canvas = useRef(null)

  useEffect(() => {
    let active = true

    let context = canvas.current.getContext('2d')
    let width = 1440
    let height = 1200
    let fontSize = 10
    let columns = width / fontSize
    let drops = []

    canvas.current.width = width
    canvas.current.height = height

    let str =
      'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ'
    str = str.split('')

    for (var i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.1)'
      context.fillRect(0, 0, width, height)

      //   context.fontSize = `650 ${fontSize}px`

      for (let i = 0; i < drops.length; i++) {
        let text = str[Math.floor(Math.random() * str.length)]
        context.fillStyle = '#0f5'
        context.fillText(text, i * fontSize, drops[i] * fontSize)
        drops[i]++
        if (drops[i] * fontSize > height && Math.random() > 0.95) {
          drops[i] = 0
        }
      }
    }
    if (active) {
      setInterval(draw, 33)
    }
    return () => {
      active = false
    }
  }, [])

  return (
    <div className={styles.hack}>
      <canvas className={styles.canvas} ref={canvas}></canvas>
    </div>
  )
}

export default Hack
