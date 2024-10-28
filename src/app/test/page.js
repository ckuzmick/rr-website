import "@/styles/home.css";
import Image from "next/image";
import Head from "next/head";
import { getArticles } from "@/utils/getArticles";

export default async function Page() {
  const articles = await getArticles();

  return (
    <>
      <Head>
        <title>The Rindge Radical</title>
        <meta name="description" content="The News of Tomorrow" />
        <meta name="keywords" content="crls, news, register, forum" />
      </Head>
      <div id="site-home">
        {/* <h2>RINDGE RADICAL:</h2> */}
        <h1>THE FIRST EDITION</h1>
        <div id="read-button">
            <a href="/writing"><h2>READ NOW</h2></a>
        </div>
      </div>
    </>
  );
}

export const revalidate = 14400;