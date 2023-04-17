/* eslint-disable react/no-unescaped-entities */
import {loadData, urlFor} from './api/article';
import Image from 'next/image';
//Style
import {BlogWrapper, ArticleWrapper, Title, Articles, Content, Line, TitleLine} from '../styles/publicationsStyles';
import { motion } from 'framer-motion';
import {pageAnimation, titlelineAnim, articlesAnim} from "../styles/animations";

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
            <h2>{article.Title}</h2>
            <h3>{article.Author}</h3>
            <p>{article.releaseDate}</p>
            <p>{article.content}</p>
          </Content>
          <Line />
        </ArticleWrapper>
      </BlogWrapper>
    </motion.div>
  );
}


export async function getServerSideProps(context) {
  const { id } = context.query;
  const article = await loadData(id);
  console.log(id);
  console.log("hello");

  return {
    props: {
      article,
    },
  };
}