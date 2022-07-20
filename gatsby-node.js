exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/BasicLayout",
    component: require.resolve("./src/templates/BasicLayout.js"),
    context: {},
    defer: true,
  })
}
