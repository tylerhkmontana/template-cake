import Layout from '../components/layout'
import styles from '../styles/page/about.module.scss'
import Image from 'next/image'
import Background from '../components/background'
import { useState, useEffect } from 'react'

export default function About() {
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
    <Layout>
      <Background 
        imgSrc="/images/background_about.jpg" 
        zIndex={-1} 
        initialPos={viewportHeight * 0.1}
        transform={backgroundTranslate} 
        translateScale={4}/>
      <div className={styles.intro}>
        <h1>About.</h1>
      </div>

      <div className={styles.main}>
        <h2 data-aos="fade-down">Color</h2>
        <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className={styles.philosophy}>
        <div className={styles.philosophy_image} data-aos="fade-in" data-aos-duration="1000">
          <Image 
            src="/images/philosophy_image.jpg"
            layout="fill"
            objectFit="contain"/>
        </div>
        <div className={styles.philosophy_description}>
          <h2 data-aos="fade-down">Philosophy</h2>
          <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </Layout>
  );
}