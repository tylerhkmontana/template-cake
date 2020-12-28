import styles from './styles/foodcard.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Foodcard(props) {
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
      variants={container}>
        <motion.div className={styles.preview} variants={card.preview}>
          <div className={styles.preview_img}>
            <Image
              src={props.imgSrc}
              alt={props.itemName}
              layout="fill"
              objectFit="fill"
            />
          </div>
          <h2>{props.itemName}</h2>
        </motion.div>
        <motion.div className={styles.info} variants={card.info}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <h2>$42</h2>
        </motion.div>
    </motion.div>
  );
}