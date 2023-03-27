import { loadData } from './api/article'

const LOAD_MORE_STEP = 4

export default function Blog({ articles, total }) {
  return (
    <div>
      <span>nombre total d'article: {total} </span>
      {articles.map((article) => (
        <div key={article._id}>
          <h2>{article.Title}</h2>
          <h5>{article.Author}</h5>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const { articles, total } = await loadData(0, LOAD_MORE_STEP)

  return {
    props: {
      articles,
      total,
    },
  }
}
