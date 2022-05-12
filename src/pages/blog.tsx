import * as React from "react"
import { ContentContext } from "../../gatsby-node"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

type Props = {
  pageContext: ContentContext
  location: Location
}

const BlogPostTemplate: React.FC<Props> = ({ pageContext, location }) => {
  const content = pageContext.content?.content || ""
  const siteTitle = pageContext.content?.title || `Title`
  console.log(`content: ${content}`)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} description={""} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{""}</h1>
          <p>{""}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: content }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate
