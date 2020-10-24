const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanityProject {
        edges {
          node {
            _rawBody
            categories {
              title
            }
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)
  result.data.allSanityProject.edges.forEach(({ node }) => {
    createPage({
      path: `/project/${node.slug.current}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        ...node
      },
    })
  })
}