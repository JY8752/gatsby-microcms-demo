/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery<GatsbyTypes.BioQueryQuery>(bioQuery)
  const author = data.site?.siteMetadata?.author

  return (
    <div className="bio">
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>
        </p>
      )}
    </div>
  )
}

export const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`

export default Bio
