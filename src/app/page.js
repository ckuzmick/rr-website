import "@/styles/home.css";
import Image from "next/image";
import Head from "next/head";
import Airtable from "airtable";
import { unstable_cache } from "next/cache";

export default async function Page() {
  const getArticles = unstable_cache(
    async () => {
      const pat = process.env.AIRTABLE_PAT;

      // Ensure the API key exists
      if (!pat) {
        throw new Error("Airtable API key not found");
      }

      const base = new Airtable({
        apiKey: pat,
      }).base("apps9tfZIeTLLz1nL");

      // Use async/await to fetch the records
      const records = await base("Articles")
        .select({
          view: "Grid view",
        })
        .all();

      const articles = records.map((record) => ({
        title: record.get("title"),
      }));

      return articles;
    },
    ["articles"],
    { revalidate: 3600*24, tags: ["articles"] }
  );

  const articles = await getArticles();

  console.log(articles);

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
        <Image
          src="/ascii-art/cover-1.svg"
          alt="Cover Photo: CRLS Exterior"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          id="ascii-art"
        />
        <div id="articles-list">
          {articles.map((article, index) => (
            <div className="article" key={index}>
              <p className="article-title">{article.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
