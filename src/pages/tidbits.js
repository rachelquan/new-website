import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import emoji from "react-easy-emoji"

const TidbitsPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <h1>{emoji("Things that I enjoy ✨")}</h1>
    <p>My life is miserable. JK JK. This is still a work in progress.</p>

    {/* <div className="project-list">
      {data.allTidbitsJson.edges.map(tidbit => (
        <div key={tidbit.node.id} className="project-list__item">
          <div className="project-list__content">
            <h2>{tidbit.node.title}</h2>
            <div className="project-list__excerpt">
              {tidbit.node.description}
            </div>
            <a href={tidbit.node.url}>GitHub</a>
          </div>
        </div>
      ))}
    </div> */}
  </Layout>
)

export default TidbitsPage

// export const tidbitsQuery = graphql`
//   query {
//     allTidbitsJson(sort: { order: DESC, fields: [date] }) {
//       edges {
//         node {
//           id
//           title
//           date
//           description
//           url
//         }
//       }
//     }
//   }
// `
