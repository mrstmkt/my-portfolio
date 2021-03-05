import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "./portfolio.module.css"
import profileImage from "../assets/GitHub-Mark-120px-plus.png"

const WorksSection = ({ location, title, children }) => {
    const data = useStaticQuery(graphql`
      query AboutQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/career.md|selfpr.md/"}}) {
          edges {
            node {
              html
              fileAbsolutePath
            }
          }
        }
      }
  `)
    const mds = data.allMarkdownRemark.edges
    let careerHtml
    let selfPrHtml
    mds.forEach((elem) => {
      if(elem.node.fileAbsolutePath.indexOf("career.md")>=0) {
        careerHtml = elem.node.html
      }
      else if(elem.node.fileAbsolutePath.indexOf("selfpr.md")>=0) {
        selfPrHtml = elem.node.html
      }
    });
    console.log(careerHtml)
    console.log(selfPrHtml)

    return (
      <section className={`${styles.aboutSection} ${styles.section}`} id="about-section">
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.headingPrimary}>ABOUT</h2>
          </div>
          <div className={styles.sectionLead}>
            <p>
              こんにちは！
            </p>
          </div>
          <div className={`${styles.sectionBody} ${styles.sectionBody}`}>
            <div className={styles.aboutItem}>
              <div className={styles.aboutImageWrapper}>
                <img className={styles.aboutImage} src={profileImage} alt=""/>
                <div dangerouslySetInnerHTML={{__html: selfPrHtml}} />
              </div>
              <div className={styles.aboutBody} dangerouslySetInnerHTML={{__html: careerHtml}} />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WorksSection 
  