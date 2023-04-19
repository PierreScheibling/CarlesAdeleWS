import { client } from '@/lib/client'
import imageUrlBuilder from '@sanity/image-url'

export async function loadData(start, end) {
  const query = `{
    "articles": *[_type == "article"],
    "total": count(*[_type == "article"]),
  }`

  const { articles, total } = await client.fetch(query)
  return {
    articles,
    total,
  }
}

export async function getArticle(id) {
  const query = `*[_type == "article" && _id == "${id}"][0]`;
  const article = await client.fetch(query);
  return article;
}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
