import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = ({ data, location  }) => (
  <Layout location={location}>
    <SEO title={data.microcmsArticles.title} />
    <span>{data.microcmsArticles.author.name}</span>
    <h1>{data.microcmsArticles.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsArticles.contents}`,
      }}
    />
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsArticles(id: { eq: $id }) {
      articlesId
      title
      contents
      author {
        name
      }
    }
  }
`