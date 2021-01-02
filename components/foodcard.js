import styles from './styles/foodcard.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Foodcard({ imgSrc, name, description, price }) {
  const [isMagnified, setIsMagnified] = useState(false)
  
  const container = {
    active: { 
      scale: 1.1,
      transition: {
        when: "afterChildren",
      } 
    },
    deactive: { 
      scale: 1,
      transition: {
        when: 'afterChildren'
      }
    }
  }
  
  const card = {
    preview: {
      active: { 
        display: 'none'
      },
      deactive: { 
        display: 'block'
      }
    },
    info: {
      active: { 
        display: 'flex'
      },
      deactive: { 
        display: 'none'
      }
    }
  }
  return (
    <motion.div 
      className={styles.foodcard} 
      whileHover="active"
      initial="deactive"
      animate={isMagnified ? 'active' : 'deactive'}
      variants={container}
      onClick={() => setIsMagnified(!isMagnified)}>
        
        <motion.div className={styles.preview} variants={card.preview}>
          <div className={styles.preview_img}>
            <Image
              src={imgSrc}
              alt={name}
              layout="fill"
              objectFit="fill"
            />
          </div>
          <h2>{name}</h2>
        </motion.div>
        <motion.div className={styles.info} variants={card.info}>
          <p>"{description}"</p>
          <h2>${price}</h2>
        </motion.div>
    </motion.div>
  );
}