import { client } from "@/lib/client";
import imageUrlBuilder from '@sanity/image-url';

export async function loadData(start, end) {
  const query = `{
    "articles": *[_type == "article"],
    "total": count(*[_type == "article"]),
  }`;

  const { articles, total } = await client.fetch(query);
  return {
    articles,
    total
  }
}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
  }