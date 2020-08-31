import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import emoji from "react-easy-emoji"

const IndexPage = ({ data }) => {
  const content = data.markdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="index__title">{content.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/aboutme.md/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`
