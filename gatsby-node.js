/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allProductosJson(limit: 1000) {
          edges {
            node {
              path
              id
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const template = path.resolve('./src/templates/productos.js')

  result.data.allProductosJson.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.path}/`,
      component: template,
      context: {
        id: edge.node.id,
      },
    })
  })
}