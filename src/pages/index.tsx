import Head from 'next/head';
import HomePage from '@modules/Home';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
