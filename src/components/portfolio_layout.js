import React from "react"
import { Link } from "gatsby"
import "../style_portfolio.css"
import bgVideo from "../assets/VID_20200618_220631_292.mp4"
import placeHolder from  "../assets/20200621_131226.jpg"
import styles from "./portfolio.module.css"

const Layout = ({ location, title, children }) => {
    // let header = (
    //     <h1 className="main-heading">
    //       <Link to="/">{title}</Link>
    //     </h1>
    //   )
  
    return (
      <div className={styles.wrapper}>
        <nav className="`${styles.gnav} fixed`">
        <ul className={styles.gnavList}>
            <li className={styles.gnavItem}><a className={styles.gnavLink} href="#works-section">WORKS</a></li>
            <li className={styles.gnavItem}><a className={styles.gnavLink} href="#feature-section">FEATURE</a></li>
            <li className={styles.gnavItem}><a className={styles.gnavLink} href="#about-section">ABOUT</a></li>
            <li className={styles.gnavItem}><a className={styles.gnavLink} href="#skill-section">SKILL</a></li>
            <li className={styles.gnavItem}><a className={styles.gnavLink} href="#contact-section">CONTACT</a></li>
        </ul>
        </nav>
        <div className={styles.videoWrap}>
            <p className={styles.logoTitle}>Brilliant Blue</p>
            <video src={bgVideo} autoPlay loop muted>
              <img src={placeHolder} alt="Placeholder" />
            </video>
          </div>
        <header className={styles.header}>
          <h1 className={styles.logo}>
            <div className={styles.logoTitle}>TARO YAMADA</div>
            <div className={styles.logoSubtitle}>PORTFOLIO</div>
          </h1>
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
            <div className={styles.pageTop} id="js-page-top">
                トップへもどる
            </div>
            <div className={styles.inner}>
                <div className={styles.copyright}>Copyright&copy;TARO YAMADA. All Rights Reserved.</div>
            </div>
            <div className={styles.inner}>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </div>
        </footer>

      </div>
    )
  }
  
  export default Layout
  