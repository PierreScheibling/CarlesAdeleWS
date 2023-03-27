/* eslint-disable react/no-unescaped-entities */
import {loadData, urlFor} from './api/article';
//Style
import {BlogWrapper, ArticleWrapper} from '../styles/blogStyle'

const LOAD_MORE_STEP = 4;

export default function Blog({articles, total}) {
  console.log(articles);
    return (
      <BlogWrapper>
        <h1>Blog</h1>
        
        <h2>Nombre total d'articles: {total}</h2>
        {articles.map((article) => (
          <div key={article._id}>
            <ArticleWrapper>
              <h2>{article.Title}</h2>
              <h3>{article.Author}</h3>
              <p>{article.description}</p>
              <img src={urlFor(article.image).url()} alt="" />
            </ArticleWrapper>
          </div>
        ))
        }
      </BlogWrapper> 
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