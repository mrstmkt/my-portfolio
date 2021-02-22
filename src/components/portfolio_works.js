import React from "react"
import styles from "./portfolio.module.css"

const WorksSection = ({ location, title, children }) => {
  
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
              <figure className={styles.worksItem}>
                <a href="img/works/company.jpg" data-size="960x720" className="works-image-wrapper works-link hover-action">
                  <img className={`${styles.worksImage} ${styles.lazyload} ${styles.fadein}`} src="img/placeholder4x3.png" data-src="img/works/company.jpg"
                    alt="" />
                </a>
                <figcaption className={styles.worksBody}>
                  <div className={styles.worksTitle}>サイト名が入る</div>
                  <div className={styles.worksText}>Design / Coding(Responsive) / WordPress</div>
                  <div className={styles.worksUrl}><a className="works-url-link" href="https://yahoo.co.jp" target="_blank"  rel="noreferrer">Link</a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WorksSection 
  