import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {ArticleListItem} from "./blog_article"
import styles from "./portfolio.module.css"

const BlogSection = ({ location, title, children }) => {
    const data = useStaticQuery(graphql`
    query BlogQuery {
        site {
          siteMetadata {
            blog {
              title
              summary
            }
          }
        }
        allMicrocmsArticles(limit: 3, sort: {order: DESC, fields: date}) {
          edges {
            node {
              articlesId
              title
              date(formatString: "MMMM DD, YYYY")
              contents
              category {
                name
              }
              skill
              headerImage {
                height
                url
                width
              }
            }
          }
        }
      }    
  `)

  const posts = data.allMicrocmsArticles.edges
  const blogTitle = data.site.siteMetadata?.blog?.title || `Title`
  const blogSummary = data.site.siteMetadata?.blog?.summary || `Summary`

    return (
        <section className={`${styles.blogSection} ${styles.section}`} id="blog-section">
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.headingPrimary}><Link to="/blog/">BLOG</Link></h2>
          </div>
          <div className={styles.sectionLead}>
            <p>{blogTitle} {blogSummary}</p>
          </div>
          <div className={`${styles.sectionBody} ${styles.blog}`}>
            <ol style={{ listStyle: `none` }}>
              {posts.map(({node}) => {
                const title = node.title || node.articlesId

                return (
                  <li key={node.articlesId}>
                    <ArticleListItem article={node} />
                  </li>
                )
              })}
            </ol>


          </div>
        </div>
      </section>
    )
  }
  
  export default BlogSection 
  