import cssVariables from '../styles/styleVariables'
import Layout from '../components/layout'
import Background from '../components/background'
import btnStyle from '../styles/button.module.css'
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
            imgSrc={`/images/${src}`} 
            translate={backgroundTranslate} 
            translateScale={4}
            initialPos={(viewportHeight/4 * 2)*i}
            zIndex={-i}
            />)
      }
      <div className="welcome_section"> 
        <h1 className="welcome_text">Cake.</h1>
        {/* <div className="welcome_button_container">
          <button className={btnStyle.button}>Menu</button>
          <button className={btnStyle.button}>Contact</button>
        </div> */}
      </div>
      
      <div className="introduction_section">
        <h1 data-aos="fade-right" data-aos-delay="50">Hello World!</h1>
      </div>

      <div className="section_divider"></div>

      <div className="introduction_section">
        <h1 data-aos="fade-right" data-aos-delay="50">Hello World!</h1>
      </div>

      <div className="section_divider"></div>
      </Layout>

      <style jsx>{`
        .section_divider {
          height: 100vh;
        }
        .welcome_section {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .welcome_text {
          font-size: ${cssVariables.welcome_font};
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          color: white;
          margin: 0 0 150px 0;
        }
        .welcome_button_container {
          display: flex;
          justify-content: center;
        }

        .welcome_button_container > button {
          font-size: 3em;
          font-weight: bold;
          margin: 0 20px;
        }

        .introduction_section {
          height: 100vh;
          background-color: ${cssVariables.primary_color};
          padding-top: 500px;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const allBackgroundSrc = readDir('/public/images')

  return {
    props: {
      allBackgroundSrc
    }
  }
}