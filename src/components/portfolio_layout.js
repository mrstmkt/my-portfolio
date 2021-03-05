import React from "react"
import { Link, useStaticQuery, graphql  } from "gatsby"
import bgVideo from "../assets/VID_20200618_220631_292.mp4"
import placeHolder from  "../assets/20200621_131226.jpg"
import styles from "./portfolio.module.css"

const Layout = ({ location,  children }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          subtitle
          author {
            name
          }
        }
      }
    }
  `)
  const title = data.site.siteMetadata?.title || `Title`
  const subtitle = data.site.siteMetadata?.subtitle || `Sub Title`
  const author = data.site.siteMetadata?.author?.name || `name`
    return (
      <div className={styles.wrapper}>
        <nav className={`${styles.gnav} fixed`}>
        <ul className={styles.gnavList}>
            <li className={styles.gnavItem}><a className={styles.gnavLink} href="#works-section">WORKS</a></li>
            <li className={styles.gnavItem}><a className={styles.gnavLink} href="#about-section">ABOUT</a></li>
            <li className={styles.gnavItem}><a className={styles.gnavLink} href="#blog-section">BLOG</a></li>
            {/* <li className={styles.gnavItem}><a className={styles.gnavLink} href="#skill-section">SKILL</a></li>
            <li className={styles.gnavItem}><a className={styles.gnavLink} href="#contact-section">CONTACT</a></li> */}
        </ul>
        </nav>
        <div className={styles.videoWrap}>
            <p className={styles.logoTitle}>{title}</p>
            <p className={styles.logoSubtitle}>{subtitle}</p>
            <p className={styles.logoDescription}>木場潟から望む白山</p>
            <video src={bgVideo} autoPlay loop muted>
              <img src={placeHolder} alt="Placeholder" />
            </video>
          </div>
        <header className={styles.header}>
          <h1 className={styles.logo}>
            <div className={styles.logoTitle}>{title}</div>
            <div className={styles.logoSubtitle}>{subtitle}</div>
          </h1>
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
            <div className={styles.pageTop} id="js-page-top">
                トップへもどる
            </div>
            <div className={styles.inner}>
                <div className={styles.copyright}>Copyright&copy;{author}. All Rights Reserved.</div>
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
  