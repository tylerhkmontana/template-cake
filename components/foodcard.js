import styles from './foodcard.module.scss'
import { motion } from 'framer-motion'

export default function Foodcard() {
  const container = {
    active: { 
      scale: 1.1,
      transition: {
        when: "beforeChildren",
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
        display: 'block',
        rotateY: [null, 180, 0],
        transition: { duration: 1, ease: ["easeOut", "easeIn"] }
      },
      deactive: { 
        display: 'none',
      }
    }
  }
  return (
    <motion.div 
      className={styles.foodcard} 
      whileHover="active"
      initial="deactive"
      variants={container}>
        <motion.p className={styles.info} variants={card.info}>Active</motion.p>
        <motion.p className={styles.preview} variants={card.preview}>Deactive</motion.p>
    </motion.div>
  );
}