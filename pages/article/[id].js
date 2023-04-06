// article/[id].js

import { loadData, urlFor } from '../api/article';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../styles/animations';
import { ArticleWrapper, Title, Content } from '../../styles/blogStyles';

export default function Article({ article }) {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ArticleWrapper>
        <Title>
          <h1>{article.Title}</h1>
        </Title>
        <img src={urlFor(article.image).url()} alt="article" />
        <Content>
          <h2>{article.Title}</h2>
          <h3>{article.Author}</h3>
          <p>{article.releaseDate}</p>
          <p>{article.Description}</p>
        </Content>
      </ArticleWrapper>
    </motion.div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const article = await loadData(id);

  return {
    props: {
      article,
    },
  };
}
