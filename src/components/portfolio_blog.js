import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../style_portfolio.css"
import BlogIndex from "../pages/blog"

const BlogSection = ({ location, title, children }) => {
    const data = useStaticQuery(graphql`
    query BlogQuery {
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
          }
        }
      }
    }    
  `)

  const posts = data.allMicrocmsArticles.edges

    return (
        <section className="blog-section section" id="blog-section">
        <div className="inner">
          <div className="section-heading">
            <h2 className="heading-primary"><Link to="/blog/">BLOG</Link></h2>
          </div>
          <div className="section-lead">
            <p>BLOG BLOG BLOG</p>
          </div>
          <div className="section-body blog">
            <ol style={{ listStyle: `none` }}>
              {posts.map(({node}) => {
                const title = node.title || node.articlesId

                return (
                  <li key={node.articlesId}>
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <h2>
                          <Link to={`/blog/${node.articlesId}`} itemProp="url">
                            <span itemProp="headline">{title}</span>
                          </Link>
                        </h2>
                        <small>{node.date}</small>
                      </header>
                      {/* <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: node.contents,
                          }}
                          itemProp="description"
                        />
                      </section> */}
                    </article>
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
  