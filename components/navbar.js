import Link from 'next/link'
import styles from './nav.module.scss'

export default function Navbar() {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.route_container}>
        <Link href="/about"><a className={styles.route_btn}>About</a></Link>
        <Link href="/menu"><a className={styles.route_btn}>Menu</a></Link>
        <Link href="/contact"><a className={styles.route_btn}>Contact</a></Link>
      </div>
      
      <div className={styles.logo_container}>
        <Link href="/">
          <a className={styles.logo}>
            Yummy
          </a>
        </Link>
      </div>
     
      <div className={styles.social_media_container}>
        <a href="#"><img src="icons/facebook.svg"/></a>
        <a href="#"><img src="icons/instagram.svg"/></a>
        <a href="#"><img src="icons/twitter.svg"/></a>
      </div>
    </div>
  );
}