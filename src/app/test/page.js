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
        {/* <h1 id="first-edition-subtitle">Rindge Radical</h1>
        <div id="divider" /> */}
        <h1 id="first-edition-title">THE FIRST EDITION</h1>
        <div id="read-button">
            <a href="/writing"><h2>READ NOW</h2></a>
        </div>
        <Image
          src="/cover-1.png"
          alt="Cover Photo: CRLS Exterior"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          id="cover"
          loading="eager"
          priority
        />
      </div>
    </>
  );
}

export const revalidate = 14400;