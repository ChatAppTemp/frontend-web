import Head from "next/head";
import LandingPage from "@components/landing_page/LandingPage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  );
};

export default Home;
