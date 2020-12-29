import { useEffect, useState } from 'react'
import styles from './styles/background.module.scss'
import Image from 'next/image'

export default function Background({ imgSrc, transform, translateScale, initialPos, zIndex }) {
  const [translate, setTranslate] = useState(0)
  const [visibility, setVisibility] = useState(true)
  
  useEffect(() => {
    setTranslate(transform / translateScale)
    let currPos = initialPos - translate
    let invisiblePos = -window.innerHeight / translateScale
    if(currPos < invisiblePos * 1.2 && visibility) {
      setVisibility(false)
    } else if (currPos > invisiblePos * 1.2 && !visibility) {
      setVisibility(true)
    }
  }, [transform])
  return (
    <div 
      className={styles.background} 
      style={{
        transform: `translateY(${initialPos - translate}px)`,
        zIndex: visibility ? zIndex - 1 : -999
      }}>
        <div className={styles.image_container}>
          <Image 
            src={imgSrc}
            layout="fill"
            objectFit="cover"/>      
        </div>
      </div>
  );
}