import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"

export const PATH = path.join(process.cwd(), "/data/tils")

export function getSourceOfFile(fileName) {
  return fs.readFileSync(path.join(PATH, fileName))
}

export function getAllTils() {
  return fs
    .readdirSync(PATH)
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
}

export async function getSingleTil(slug) {
  const source = getSourceOfFile(slug + ".mdx")

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: PATH,
  })

  return {
    frontmatter,
    code,
  }
}

export function getAllTilsWithTag(slug) {
  const tils = getAllTils()
    .filter(til => {
      const tags = til.frontmatter.tags ? til.frontmatter.tags.split(',').map(it => it.trim()) : []
      return tags.includes(slug)
    })

  return tils
}