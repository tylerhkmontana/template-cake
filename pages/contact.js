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
    window.addEventListener('scroll', handleScroll, {passive:true})

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
        <div className={styles.contact_form_container}>
          <div className={styles.contact_form} data-aos="fade-right">
            <h3 className={styles.contact_form_header}>Contact Us</h3>
            <input className={styles.input_text} type="text" placeholder="your name"/>
            <input className={styles.input_text} type="text" placeholder="buisness name"/>
            <input className={styles.input_text} type="email" placeholder="your email"/>
            <textarea className={styles.input_textarea} placeholder="how may we help you?"/>
            <button className={styles.input_btn}>Send</button>
          </div>
        </div>

        <div className={styles.map_container} data-aos="fade-up" data-aos-duration="1000">
          <iframe 
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52864.87101914459!2d-118.36149759132728!3d34.09374583208188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1609398516146!5m2!1sen!2sus" 
            frameBorder="0" 
            aria-hidden="false" 
            tabIndex="0"
            title="Hollywood"></iframe>
        </div>
      </div>
    </Layout>
  );
}