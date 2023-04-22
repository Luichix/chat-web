import React from 'react'
import styles from './Brand.module.css'
import IbmWatson from '../IbmWatson'
import classNames from 'classnames'
import Facebook from '../Facebook'
import Tiktok from '../Tiktok'
import Instagram from '../Instagram'
import Messenger from '../Messenger'
import Whatsapp from '../Whatsapp'

const Brand = () => {
  let logo = { size: '180px', color: '#009877' }

  return (
    <div className={styles.brand}>
      <div className={classNames(styles.principal)}>
        <IbmWatson height={logo.size} width={logo.size} color={logo.color} />
      </div>
      <div className={styles.social1}>
        <div className={styles.grid}>{createBurbles()}</div>
        <div className={styles.grid}>{createBurbles()}</div>
      </div>
      <div className={styles.social2}>
        <div className={styles.grid}>{createBurbles()}</div>
      </div>
      <div className={styles.grid}>{createBurbles()}</div>
    </div>
  )
}

export default Brand

function createBurbles() {
  return (
    <>
      <div className={styles.b0}> {randomBurble()}</div>
      <div className={styles.b1}> {randomBurble()}</div>
      <div className={styles.b2}> {randomBurble()}</div>
      <div className={styles.b3}> {randomBurble()}</div>
      <div className={styles.b4}> {randomBurble()}</div>
      <div className={styles.b5}> {randomBurble()}</div>
      <div className={styles.b6}> {randomBurble()}</div>
      <div className={styles.b7}> {randomBurble()}</div>
      <div className={styles.b8}> {randomBurble()}</div>
      <div className={styles.b9}> {randomBurble()}</div>
      <div className={styles.b10}> {randomBurble()}</div>
      <div className={styles.b11}> {randomBurble()}</div>
      <div className={styles.b12}> {randomBurble()}</div>
    </>
  )
}

const randomBurble = () => {
  const sizeRandom = () => {
    return 20 + Math.random() * 45
  }

  let facebook = { size: sizeRandom(), color: '#1877F2' }
  let tiktok = { size: sizeRandom(), color: '#000000' }
  let instagram = { size: sizeRandom(), color: '#E4405F' }
  let messenger = { size: sizeRandom(), color: '#00B2FF' }
  let whatsapp = { size: sizeRandom(), color: '#25D366' }

  let random = Math.floor(Math.random() * 5)
  switch (random) {
    case 0:
      return (
        <Facebook
          height={facebook.size}
          width={facebook.size}
          color={facebook.color}
        />
      )
    case 1:
      return (
        <Tiktok height={tiktok.size} width={tiktok.size} color={tiktok.color} />
      )
    case 2:
      return (
        <Instagram
          height={instagram.size}
          width={instagram.size}
          color={instagram.color}
        />
      )
    case 3:
      return (
        <Messenger
          height={messenger.size}
          width={messenger.size}
          color={messenger.color}
        />
      )
    case 4:
      return (
        <Whatsapp
          height={whatsapp.size}
          width={whatsapp.size}
          color={whatsapp.color}
        />
      )
    default:
      return (
        <Facebook
          height={facebook.size}
          width={facebook.size}
          color={facebook.color}
        />
      )
  }
}
