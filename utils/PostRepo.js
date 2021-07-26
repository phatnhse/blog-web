import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"

export const POSTS_PATH = path.join(process.cwd(), "/data/posts")

export function getSourceOfFile(fileName) {
  return fs.readFileSync(path.join(POSTS_PATH, fileName))
}

export function getAllPosts() {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName)
      const slug = fileName.replace(/\.mdx?$/, "")
      const { data } = matter(source)

      return {
        frontmatter: data,
        slug: slug,
      }
    })
    .filter(({ frontmatter, slug }) => {
      return frontmatter.wip === false
    })
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.publishedOn)
      const dateB = new Date(b.frontmatter.publishedOn)
      return dateB - dateA
    })
}

export async function getSinglePost(slug) {
  const source = getSourceOfFile(slug + ".mdx")

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
  })

  return {
    frontmatter,
    code,
  }
}

export function getAllPostsWithTag(slug) {
  const posts = getAllPosts()
    .filter(post => {
      const tags = post.frontmatter.tags ? post.frontmatter.tags.split(',').map(it => it.trim()) : []
      return tags.includes(slug)
    })

  return posts
}