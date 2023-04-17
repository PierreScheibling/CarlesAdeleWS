/* eslint-disable react/no-unescaped-entities */
import { getArticle, urlFor } from './api/article'
//Style
import { motion } from 'framer-motion'
import { pageAnimation } from '../styles/animations'
import {
  ArticleWrapper,
  BlogWrapper,
  Content,
  Line,
} from '../styles/publicationsStyles'

export default function Article({ article }) {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <BlogWrapper>
        <ArticleWrapper>
          {/* <img className="imgArt" src={urlFor(article.image).url()} alt="image-article" /> */}
          <Content>
            <h3>Hello</h3>
            <img
              className="imgArt"
              src={article?.image ? urlFor(article.image).url() : null}
              alt="image-article"
            />
            <h2>{article?.Title}</h2>
            <h3>{article?.Author}</h3>
            <p>{article?.releaseDate}</p>
            <p>{article?.description}</p>
          </Content>
          <Line />
        </ArticleWrapper>
      </BlogWrapper>
    </motion.div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const article = await getArticle(id)
  return {
    props: {
      article,
    },
  }
}
