function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName)
  }));
}

export const posts = getAllPosts()

function getAllPosts(){
  const allMdxFiles = require.context("./pages/blog/", true, /\.mdx$/)
  return importAll(allMdxFiles)
}