import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./portfolio.module.css"
import twitterIcon from "../assets/Twitter-social-icons-circle-blue.svg"
import githubIcon from "../assets/GitHub-Mark-120px-plus.png"
import facebookIcon from "../assets/f_logo_RGB-Blue_100.png"
import instaIcon from "../assets/Instagram_AppIcon_Aug2017.png"

const ContactSection = ({ location, title, children }) => {
    const data = useStaticQuery(graphql`
      query ContactQuery {
        site {
          siteMetadata {
            social {
              twitter
              instagram
              facebook
              github
              form
            }
          }
        }
      }    
    `)
    const twAccount = data.site.siteMetadata.social.twitter
    const instaAccount = data.site.siteMetadata.social.instagram
    const facebookAccount = data.site.siteMetadata.social.facebook
    const githubAccount = data.site.siteMetadata.social.github
    const formUrl = data.site.siteMetadata.social.form

    return (
      <section className={`${styles.contactSection} ${styles.section}`} id="contact-section">
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.headingPrimary}>CONTACT</h2>
          </div>
          <div className={styles.sectionLead}>
            <p>
              お問い合わせは、<br className={styles.spOnly}/>SNSか<a href={formUrl} target="_blank" rel="noreferrer">お問い合わせフォーム</a>でお願いいたします。
            </p>
          </div>
          <div className={`${styles.sectionBody} ${styles.contact}`}>
            <ul className={styles.contactList}>
              <AccountLink url={`https://twitter.com/${twAccount}`} icon={twitterIcon}/>
              <AccountLink url={`https://www.facebook.com/${facebookAccount}/`} icon={facebookIcon}/>
              <AccountLink url={`https://www.instagram.com/${instaAccount}`} icon={instaIcon}/>
              <AccountLink url={`https://github.com/${githubAccount}`} icon={githubIcon}/>
            </ul>
            <div className={styles.contactText}><a class={styles.contactForm} href={formUrl} target="_blank" rel="noreferrer">✉ お問い合わせ</a></div>
          </div>
        </div>
      </section>
    )
  }
  
export default ContactSection 

const AccountLink = ({url, icon}) => {
  return (
    <li className={styles.contactItem}>
    <a className={styles.contactLink} href={url} target="_blank" rel="noreferrer"><img className={styles.contactImage}
        src={icon} alt=""/></a>
    </li>
  )
}