import path from "path"
import { GatsbyNode } from "gatsby"

const query = `
  {
    microcmsBlogs {
      contents {
        id
        category {
          id
          name
        }
        title
        content
        eyecatch {
          url
          height
          width
        }
      }
    }
  }
`

type Result = {
  microcmsBlogs: GatsbyTypes.MicrocmsBlogs
}

export type ContentContext = {
  content: GatsbyTypes.Maybe<GatsbyTypes.MicrocmsBlogsContents>
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<Result>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }

  const blogs = result.data.microcmsBlogs

  if (!blogs || !blogs.contents) {
    throw new Error("undefined contents")
  }

  for (let content of blogs.contents) {
    createPage<ContentContext>({
      path: `/blogs/${content?.id}`,
      component: path.resolve("src/pages/blog.tsx"),
      context: { content },
    })
  }
}
