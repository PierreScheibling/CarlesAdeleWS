/* eslint-disable react/no-unescaped-entities */
import {loadData, urlFor} from './api/article';
//Style
import {BlogWrapper, ArticleWrapper, Title, Articles, Content, Line} from '../styles/blogStyles';
import { motion } from 'framer-motion';
import {pageAnimation} from "../styles/animations";

const LOAD_MORE_STEP = 4;

export default function Blog({articles, total}) {
  console.log(articles);
  
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
              <div/>
            </Title>
            <Articles>
            {articles.map((article) => (
              <div key={article._id}>
                <ArticleWrapper>
                  <img src={urlFor(article.image).url()} alt="image-article" />
                  <Content>
                    <h2>{article.Title}</h2>
                    <h3>{article.Author}</h3>
                    <p>{article.releaseDate}</p>
                  </Content>
                  <Line/>
                </ArticleWrapper>
              </div>
            ))
            }
            </Articles>
          </BlogWrapper>
        </motion.div>
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