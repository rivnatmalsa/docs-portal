import { graphql, useStaticQuery } from "gatsby"

const GetPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  console.log("Edges: ", data.allMarkdownRemark.edges)

  return data.allMarkdownRemark.edges.map(edge => ({
    siteTitle,
    slug: edge.node.fields.slug,
    excerpt: edge.node.excerpt,
    title: edge.node.frontmatter.title,
    description: edge.node.frontmatter.description,
  }))
}

export default GetPosts
