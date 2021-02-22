import React from "react"
import { Link } from "gatsby"
import styles from "./blog.module.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/blog/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className={styles.mainHeading}>
        <Link to="/blog/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className={styles.headerLinkHome} to="/blog/">
        {title}
      </Link>
    )
  }

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <header className={styles.globalHeader}>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
