import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/blog_layout"
import SEO from "../../components/seo"
import {Article} from "../../components/blog_article"

const BlogPage = ({ data, location  }) => (
  <Layout location={location}>
    <SEO title={data.microcmsArticles.title} />
    <Article article={data.microcmsArticles} />
    {/* <span>{data.microcmsArticles.author.name}</span>
    <h1>{data.microcmsArticles.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsArticles.contents}`,
      }}
    /> */}
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsArticles(id: { eq: $id }) {
      articlesId
      title
      contents
      date
      author {
        name
      }
    }
  }
`