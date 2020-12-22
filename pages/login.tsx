import Head from "next/head";
import { BigTitle } from "@components/Text";

const Login = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BigTitle>Log In</BigTitle>
      </main>
    </>
  );
};

export default Login;
