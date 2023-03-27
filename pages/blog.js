import {loadData} from './api/article';

const LOAD_MORE_STEP = 4;

export default function Blog({articles, total}) {
  console.log(articles);
    return (
      <div>
        <h1>Blog</h1>
        <h2>Nombre total d`articles: {total}</h2>
        {articles.map((article) => {
            <div key={article._id}>
              <h2>{article.Title}</h2>
              <h3>{article.Author}</h3>
              <p>{article.description}</p>
            </div>
          })
        }
      </div> 
        )
      }


export async function getServerSideProps() {
  const {articles, total} = await loadData(0, LOAD_MORE_STEP)
    return {
      props: {
        articles,
        total,
      },
    }
  }