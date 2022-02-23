import Head from "next/head";
import { Articles } from "../components/organisms/Articles";

export default function Home(props: { articles: { data: { data: any; } | undefined; }; }) {
  return (
    <>
      <Head>
        <title>日台one!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Articles articles={props.articles.data}/>
      {/* {console.log(props.articles.data)}; */}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/v1/articles`);
  const articles = await response.json();
  
  return{
    props: {
      articles
    }
  };
}