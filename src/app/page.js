import "@/styles/home.css";
import Image from "next/image";
import Head from "next/head";
import { getArticles } from "@/utils/getArticles";
import { getCover } from "@/utils/getCover";

export default async function Page() {
  const articles = await getArticles();
  const cover = await getCover();

  return (
    <>
      <Head>
        <title>The Rindge Radical</title>
        <meta name="description" content="The News of Tomorrow" />
        <meta name="keywords" content="crls, news, register, forum" />
      </Head>
      <div id="site-home">
        <h1 id="first-edition-subtitle">Rindge Radical</h1>
        <div id="divider" />
        <h1 id="first-edition-title">The First Edition</h1>
        <div id="articles-list">
          {articles.map((article, index) => (
            <div className="article" key={index}>
              <p className="article-title">{article.title}</p>
            </div>
          ))}
        </div>
        <Image
          src={cover}
          alt="Cover Photo: CRLS Exterior"
          unoptimized
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          id="cover"
        />
      </div>
    </>
  );
}
