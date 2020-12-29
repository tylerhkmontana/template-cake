import Layout from './layout'
import styles from './styles/menuLayout.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function MenuLayout({children}) {
  const [isToggle, setIsToggle] = useState(false)

  const nav = {
    on: {
      width: '50vw',
      transition: {
        ease: 'easeIn',
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    off: {  
      width: 0,
      transition: {
        ease: 'easeOut'
      }
    },
  }

  const item = {
    on: {
      display: 'block',
      translateY: 0,
      opacity: 1
    },
    off: {
      display: 'none',
      translateY: 500,
      opacity: 0
    }
  }
  return (
    <Layout>
      <div className={styles.intro}>
        <h1>Menu.</h1>
      </div>

      <div className={styles.main}>

        <div className={styles.menu_icon} onClick={() => setIsToggle(!isToggle)}>
          <Image src={`/icons/${isToggle ? 'close' : 'menu'}.svg`} alt="Menu Icon" width={30} height={30}/>
        </div>
        <motion.div 
          animate={isToggle ? 'on' : 'off'}
          variants={nav} 
          className={styles.nav}
        >
          <motion.h2 variants={item}>Menu</motion.h2>
          <Link href="/menu"><motion.a variants={item}>Cake</motion.a></Link>
          <Link href="/menu"><motion.a variants={item}>Muffin</motion.a></Link>
          <Link href="/menu"><motion.a variants={item}>Cup Cake</motion.a></Link>
          <Link href="/menu"><motion.a variants={item}>Cookies</motion.a></Link>
        </motion.div>
        {children}
      </div>
    </Layout>
  );
}