import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
import Layout from "../components/portfolio_layout"
import WorksSection from "../components/portfolio_works"
import AboutSection from "../components/portfolio_about"
import BlogSection from "../components/portfolio_blog"
import ContactSection from "../components/portfolio_contact"
import SEO from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="INDEX" />
      {/* <Bio /> */}
      <AboutSection />
      <WorksSection />
      <BlogSection />
      <ContactSection />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
