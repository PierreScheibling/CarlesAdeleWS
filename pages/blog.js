import { loadData} from './api/article';

const LOAD_MORE_STEP = 4;

export default function Blog(initialArticles, total) {
  console.log(initialArticles);
    return (
        <h1>Blog</h1>
        )
      }


export async function getServerSideProps() {
  const {article, total} = await loadData(0, LOAD_MORE_STEP)
    return {
      props: {
        initialArticles: article,
        total,
      },
    }
  }