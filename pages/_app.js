import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ChangeLog</title>
      </Head>
      <div className="grid wrapper">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
