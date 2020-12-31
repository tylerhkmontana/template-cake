import Link from 'next/link'
import styles from './styles/nav.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false)

  const nav = {
    on: {
      opacity: 1,
      zIndex: 998,
      transition: {
        ease: 'easeIn',
        when: 'beforeChildren',
        staggerChildren: 0.07
      }
    },
    off: {  
      opacity: 0,
      zIndex: -999,
      transition: {
        ease: 'easeOut'
      }
    },
  }

  const item = {
    on: {
      display: 'flex',
      translateX: 0,
      opacity: 1
    },
    off: {
      display: 'none',
      translateX: 500,
      opacity: 0
    }
  }

  return (
    <>
    {/* DESKTOP & TABLET */}
    <div className={styles.nav_bar}>
      <div className={styles.route_container}>
        <Link href="/"><a className={styles.route_btn}>Home</a></Link>
        <Link href="/about"><a className={styles.route_btn}>About</a></Link>
        <Link href="/menu"><a className={styles.route_btn}>Menu</a></Link>
        <Link href="/contact"><a className={styles.route_btn}>Contact</a></Link>
      </div>
      
      <div className={styles.logo_container}>
        <Link href="/">
          <a className={styles.logo}>
            Yummy
          </a>
        </Link>
      </div>
     
      <div className={styles.social_media_container}>
        <a href="#"><img src="/icons/facebook.svg"/></a>
        <a href="#"><img src="/icons/instagram.svg"/></a>
        <a href="#"><img src="/icons/twitter.svg"/></a>
      </div>
    </div>

    {/* MOBILE */}
    <motion.div className={styles.nav_bar_toggle} onClick={() => setIsToggle(!isToggle)}>
      <Image src={`/icons/${isToggle ? 'close_nav' : 'nav'}.svg`} alt="Nav Icon" width={30} height={30}/>
    </motion.div>

    <div className={styles.social_media_container_mobile}>
        <a href="#"><img src="/icons/facebook.svg"/></a>
        <a href="#"><img src="/icons/instagram.svg"/></a>
        <a href="#"><img src="/icons/twitter.svg"/></a>
    </div>

    <Link href="/">
      <a className={styles.logo_mobile}>
        Yummy
      </a>
    </Link>

      <motion.div 
        animate={isToggle ? 'on' : 'off'} 
        variants={nav} 
        className={styles.nav_bar_mobile}>
        <Link href="/"><motion.a variants={item} className={styles.route_btn}>Home</motion.a></Link>
        <Link href="/about"><motion.a variants={item} className={styles.route_btn}>About</motion.a></Link>
        <Link href="/menu"><motion.a variants={item} className={styles.route_btn}>Menu</motion.a></Link>
        <Link href="/contact"><motion.a variants={item} className={styles.route_btn}>Contact</motion.a></Link>
      </motion.div> 
    </>
  );
}