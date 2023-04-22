import React, { useContext } from 'react'
import styles from './Footer.module.css'
import LanguageContext from '../../../../contexts/LanguageContext'
import word from '../../../../data/footer.json'
import logo from '../../../../assets/logoMono.png'
import { BsFacebook, BsLinkedin, BsWhatsapp, BsInstagram } from 'react-icons/bs'
import Pack from '../../../common/Pack'
import ThemeContext from '../../../../contexts/ThemeContext'

const Footer = () => {
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)
  const texts = word[language]

  return (
    <Pack theme={theme} color="primary">
      <div className={styles.footer}>
        <div className={styles.info}>
          <figure className={styles.logo}>
            <img
              src={logo}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
              alt=""
            />
          </figure>
          <p>{texts.email}</p>
          <p>{texts.copyright}</p>
        </div>
        <div className={styles.section}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                href="https://www.facebook.com/godigit.aitech"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className={styles.icon} />
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.linkedin.com/company/godigit-ai/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className={styles.icon} />
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" target="_blank" rel="noreferrer">
                <BsWhatsapp className={styles.icon} />
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.instagram.com/godigit_ai/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Pack>
  )
}

export default Footer
