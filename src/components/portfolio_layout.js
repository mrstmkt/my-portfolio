import React from "react"
import { Link } from "gatsby"
import "../style_portfolio.css"

const Layout = ({ location, title, children }) => {
    let header = (
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      )
  
    return (
      <div className="wrapper">
        <nav className="gnav fixed">
        <ul className="gnav-list">
            <li className="gnav-item"><a className="gnav-link" href="#works-section">WORKS</a></li>
            <li className="gnav-item"><a className="gnav-link" href="#feature-section">FEATURE</a></li>
            <li className="gnav-item"><a className="gnav-link" href="#about-section">ABOUT</a></li>
            <li className="gnav-item"><a className="gnav-link" href="#skill-section">SKILL</a></li>
            <li className="gnav-item"><a className="gnav-link" href="#contact-section">CONTACT</a></li>
        </ul>
        </nav>
        <header className="header">
            <h1 className="logo">
                <div className="logo-title">TARO YAMADA</div>
                <div className="logo-subtitle">PORTFOLIO</div>
            </h1>
        </header>
        <main className="content">{children}</main>
        <footer class="footer">
            <div class="page-top" id="js-page-top">
                トップへもどる
            </div>
            <div className="inner">
                <div class="copyright">Copyright&copy;TARO YAMADA. All Rights Reserved.</div>
            </div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>

      </div>
    )
  }
  
  export default Layout
  