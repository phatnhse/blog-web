export function getAllTagsFrom(data) {
  const tags = data
    .flatMap(d => {
      return d.frontmatter.tags ? d.frontmatter.tags.split(',') : []
    })
    .map(tag => {
      return tag.trim()
    })
  const uniqueTags = [...new Set(tags)]
  
  return uniqueTags
}

