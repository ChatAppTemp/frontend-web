import LandingPage from "@components/landing_page/LandingPage";
import Layout from "@components/Layout";

const Home = () => {
  return (
    <Layout title="Chat App" description="A simple easy to use chat app">
      <LandingPage />
    </Layout>
  );
};

export default Home;
