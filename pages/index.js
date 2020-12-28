import styles from '../styles/page/home.module.scss'
import Layout from '../components/layout'
import Background from '../components/background'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import readDir from '../lib/readDir'

import '@animxyz/core'

export default function Home(props) {
  const [backgroundTranslate, setBackgroundTranslate] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setBackgroundTranslate(this.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setViewportHeight(window.innerHeight)
    function resizeHandler() {
      setViewportHeight(window.innerHeight)
    }
    window.addEventListener('resize', resizeHandler)
    
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return (
    <>
      <Layout>
      {
        props.allBackgroundSrc.map((src, i) => 
          <Background 
            key={i} 
            imgSrc={`/images/background_home/${src}`} 
            translate={backgroundTranslate} 
            translateScale={4}
            initialPos={(viewportHeight/4 * 2)*i}
            zIndex={-i}
            />)
      }
      <div className={styles.welcome_section}> 
        <h1 className={styles.welcome_text}>Cake.</h1>
      </div>
      
      <div className={styles.intro}>
        <div className={styles.intro_image} data-aos="fade-in"></div>
        <div className={styles.section_description_container}>
          <h2 className={styles.intro_header} data-aos="fade-left" data-aos-delay="150">Flavors.</h2>
          <p className={styles.intro_description} data-aos="fade-in" data-aos-duration="1000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={styles.section_btn_container} data-aos="fade-up" data-aos-offset="50">
            <Link href="/menu"><button className={styles.intro_btn}>Go to menu &rarr;</button></Link>
          </div>
        </div>
      </div>

      <div className={styles.catering}>
        <h1 className={styles.catering_header} data-aos="fade-down">Want to order catering?</h1>
        <div className={styles.catering_info}>
          <div className={styles.catering_description} data-aos="fade-left">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.catering_contact}>
              <div className={styles.contact_form} data-aos="fade-up">
                <h3 className={styles.contact_form_header}>Contact Us</h3>
                <input className={styles.input_text} type="text" placeholder="your name"/>
                <input className={styles.input_text} type="text" placeholder="buisness name"/>
                <input className={styles.input_text} type="email" placeholder="your email"/>
                <textarea className={styles.input_textarea} placeholder="how may we help you?"/>
                <button className={styles.input_btn}>Send</button>
              </div>
          </div>
        </div>
      </div>

      <div className={styles.custom}>
        <div className={styles.section_description_container}>
          <h2 className={styles.custom_header} data-aos="fade-right" data-aos-delay="150">Customize.</h2>
          <p className={styles.custom_description} data-aos="fade-in" data-aos-duration="1000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={styles.custom_image} data-aos="fade-in"></div>
      </div>

      <div className={styles.just_divider}></div>
      </Layout>

      <style jsx>{`
        
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const allBackgroundSrc = readDir('/public/images/background_home')

  return {
    props: {
      allBackgroundSrc
    }
  }
}