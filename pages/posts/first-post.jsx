import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      {/* <Head key={'head'}> */}
      <Head>
        <title>First Post</title>
      </Head>

      <h1>It is first post</h1>
      
    </Layout>
  );
}

