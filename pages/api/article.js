import { client } from "@/lib/client";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

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