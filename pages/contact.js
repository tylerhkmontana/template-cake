import Layout from '../components/layout'
import styles from '../styles/page/contact.module.scss'
import Background from '../components/background'
import { useState, useEffect } from 'react'

export default function Contact() {
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
        imgSrc="/images/background_contact.jpg" 
        zIndex={-1} 
        initialPos={viewportHeight * 0.1}
        transform={backgroundTranslate} 
        translateScale={4}/>
      <div className={styles.intro}>
        <h1>Contact.</h1>
      </div>
     
      <div className={styles.info}>
        <p data-aos="fade-right">777 Al Pacino Rd, West Hollywood, CA, 900099</p>
        <p data-aos="fade-right">Tel: +1(777) 777-777</p>
        <p data-aos="fade-right">Email: trantino@hollywood.com</p>
      </div>

      <div className={styles.map_contact}>
        <div className={styles.map_container}>
          <iframe 
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.848126206543!2d-73.81551428459343!3d40.765364979326236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261f8f14928bb%3A0x503c6c72e9e2450c!2sHanyang%20Bunshik!5e0!3m2!1sen!2sus!4v1608587207928!5m2!1sen!2sus" 
            frameBorder="0" 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"
            title="Hollywood"
            data-aos="fade-up" data-aos-duration="1000"></iframe>
        </div>

        <div className={styles.contact_form_container}>
          <div className={styles.contact_form} data-aos="fade-left">
            <h3 className={styles.contact_form_header}>Contact Us</h3>
            <input className={styles.input_text} type="text" placeholder="your name"/>
            <input className={styles.input_text} type="text" placeholder="buisness name"/>
            <input className={styles.input_text} type="email" placeholder="your email"/>
            <textarea className={styles.input_textarea} placeholder="how may we help you?"/>
            <button className={styles.input_btn}>Send</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}