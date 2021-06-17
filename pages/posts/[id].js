import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.props.post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          {postData.props.post.id} - {postData.props.post.title}
        </h1>

        <h1 className={utilStyles.lightText}>{postData.props.post.body}</h1>
      </article>
    </Layout>
  );
}
