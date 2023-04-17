/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { loadData, urlFor } from './api/article'
//Style
import { motion } from 'framer-motion'
import { pageAnimation, titlelineAnim } from '../styles/animations'
import {
  ArticleWrapper,
  Articles,
  BlogWrapper,
  Content,
  Line,
  Title,
  TitleLine,
} from '../styles/publicationsStyles'

const LOAD_MORE_STEP = 4

export default function Blog({ articles, total }) {
  const articleAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, delay: 1, scale: 1 },
  }

  const articlesAnim = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        delayChildren: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <BlogWrapper>
        <Title>
          <h1>PUBLICATIONS</h1>
          <TitleLine
            variants={titlelineAnim}
            exit="exit"
            initial="hidden"
            animate="show"
          />
        </Title>
        <Articles
          layout
          variants={articlesAnim}
          initial="hidden"
          animate="show"
        >
          {articles.map((article, index) => (
            <div key={index}>
              <Link href={`${article._id}`}>
                <ArticleWrapper layout variants={articleAnim}>
                  <img
                    className="imgArt"
                    src={urlFor(article.image).url()}
                    alt="image-article"
                  />
                  <Content>
                    <h2>{article.Title}</h2>
                    <h3>{article.Author}</h3>
                    <p>{article.releaseDate}</p>
                    {/* <a href={`/article/${article._id}`}><p>En savoir plus</p></a> */}
                  </Content>
                  <Line />
                </ArticleWrapper>
              </Link>
            </div>
          ))}
        </Articles>
      </BlogWrapper>
    </motion.div>
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
