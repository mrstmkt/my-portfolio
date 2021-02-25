import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "./portfolio.module.css"

const WorksSection = ({ location, title, children }) => {
    const data = useStaticQuery(graphql`
      query WorksQuery {
        allMicrocmsWorks(sort: {order: ASC, fields: order}) {
          edges {
            node {
              worksId
              order
              url
              title
              skill
              description
              image {
                height
                url
                width
              }
            }
          }
        }
      }    
    `)
    const works = data.allMicrocmsWorks.edges

    return (
        <section className={`${styles.workSection} ${styles.section}`} id="works-section">
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.headingPrimary}>WORKS</h2>
          </div>
          <div className={styles.sectionLead}>
            <p>Web（デザインとコーディング）制作の記録です。<br/>デザイン練習用の架空サイト（ファーストビューのみ）も含んでおります。</p>
          </div>
          <div className={`${styles.sectionBody} ${styles.works}`}>
            <div className={`${styles.worksList} ${styles.jsMyGallery}`}>
              {works.map(({node}) => {
                  const title = node.title || node.articlesId
                  let urlImage
                  if(node.image.width === 1 && node.image.height === 1) {
                    urlImage = (
                      <div className={styles.worksAltImage}><div>{node.title}<br/>{node.description}</div></div>
                    )
                  }
                  else {
                    urlImage = (
                      <img className={`${styles.worksImage} ${styles.hoverAction}`} src={`${node.image.url}?fit=crop&w=960&h=720`} alt="" />
                    )
                  }

                  return (
                    <figure className={styles.worksItem}>
                    <a href={node.url}  className={`${styles.worksImageWrapper} ${styles.worksLink} `} target="_blank"  rel="noreferrer">
                      {urlImage}
                    </a>
                    <figcaption className={styles.worksBody}>
                      <div className={styles.worksTitle}>{node.title}</div>
                      <div className={styles.worksText}>{node.description}</div>
                      <div className={styles.worksText}>{node.skill}</div>
                    </figcaption>
                  </figure>
                  )
                })}

            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WorksSection 
  