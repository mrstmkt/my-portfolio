import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/blog_layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.blog?.title || `Title`
  const posts = data.allMicrocmsArticles.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="BLOG INDEX" />
      <Bio />
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
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section> */}
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blog {
          title
        }
      }
    }
    allMicrocmsArticles(sort: {order: DESC, fields: date}) {
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
`
