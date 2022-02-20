import Head from "next/head";
import Image from "next/image";
import { Articles } from "../components/organisms/Articles";

export default function Home() {
  return (
    <>
      <Head>
        <title>日台one!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Articles />
    </>
  );
}
