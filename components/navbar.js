import Link from 'next/link'
import styles from '../styles/styleVariables'

export default function Navbar() {
  return (
    <>
    <div className="nav_bar">
      <div className="route_container">
        <Link href="/"><a className="route-btn">Home</a></Link>
        <Link href="/about"><a className="route-btn">About Us</a></Link>
        <Link href="/menu"><a className="route-btn">Menu</a></Link>
        <Link href="/contact"><a className="route-btn">Contact</a></Link>
      </div>
      
      <div className="logo_container">
        <Link href="/">
          <a className="logo">
            Yummy
          </a>
        </Link>
      </div>
     
      <div className="social_media_container">
        <a href="#"><img src="icons/facebook.svg"/></a>
        <a href="#"><img src="icons/instagram.svg"/></a>
        <a href="#"><img src="icons/twitter.svg"/></a>
      </div>
    </div>

    <style jsx>{`
      .nav_bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 10px;
        width: 100vw;
      }

      .route-btn {
        margin-left: 20px;
        font-weight: bold;
        color: white;
      }

      .route-btn:hover {
        text-shadow: 0 0 5px white;
      }

      .route_container {
        flex: 1;
      }

      .logo_container {
        flex: 1;
        display: flex;
        justify-content: center;
      }

      .logo {
        font-size: ${styles.logo_font};
        font-weight: bold;
        font-family: 'Dancing Script';  
        color: white; 
      }

      .logo:hover {
        text-shadow: 0 0 10px white;
      }

      .social_media_container {
        flex: 1;
        display: flex;
        justify-content: flex-end;
      }

      .social_media_container img {
        width: 30px;
        height: 30px;
        margin-right: 20px;
      }
    `}</style>
    </>
  );
}