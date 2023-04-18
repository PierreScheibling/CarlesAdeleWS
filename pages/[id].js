/* eslint-disable react/no-unescaped-entities */
import { getArticle, urlFor } from './api/article';
//Style
import { motion } from 'framer-motion';
import { pageAnimation } from "../styles/animations";
import { ContentWrapper, Content, Title, Subtitle} from '../styles/articleStyles';

export default function Article({ article }) {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ContentWrapper>
          <img className="imgArt" src={urlFor(article.image).url()} alt="image-article" />
          <Content>
            <Title>
              <h2>{article.title}</h2>
            </Title>
            <Subtitle>
              <h3>{article.author}</h3>
              <p>{article.createdDate}</p>
            </Subtitle>
            <p>{article.description}</p>
          </Content>
      </ContentWrapper>
    </motion.div>
  );
}


export async function getServerSideProps(context) {
  const { id } = context.params;
  const article = await getArticle(id);
  console.log(id);

  return {
    props: {
      article,
    },
  };
}