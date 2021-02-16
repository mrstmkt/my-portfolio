import React from "react"
import "../style_portfolio.css"

const WorksSection = ({ location, title, children }) => {
  
    return (
        <section className="works-section section" id="works-section">
        <div className="inner">
          <div className="section-heading">
            <h2 className="heading-primary">WORKS</h2>
          </div>
          <div className="section-lead">
            <p>Web（デザインとコーディング）制作の記録です。<br/>デザイン練習用の架空サイト（ファーストビューのみ）も含んでおります。</p>
          </div>
          <div className="section-body works">
            <div className="works-list js-my-gallery">
              <figure className="works-item">
                <a href="img/works/company.jpg" data-size="960x720" className="works-image-wrapper works-link hover-action">
                  <img className="works-image lazyload fadein" src="img/placeholder4x3.png" data-src="img/works/company.jpg"
                    alt="" />
                </a>
                <figcaption className="works-body">
                  <div className="works-title">サイト名が入る</div>
                  <div className="works-text">Design / Coding(Responsive) / WordPress</div>
                  <div className="works-url"><a className="works-url-link" href="https://yahoo.co.jp" target="_blank"  rel="noreferrer">Link</a>
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
  