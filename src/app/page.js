import "@/styles/home.css";
import Image from "next/image";
import Head from "next/head";

export default function Page({ asciiText }) {
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
        <Image src="/ascii-art/cover-1.svg" alt="Cover Photo: CRLS Exterior" width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} id="ascii-art" />
        <div id="articles-list">
          <p>An Open Letter To The Register Forum</p>
          <p>Brawl Stars is Destroying Our World</p>
          <p>Getting Back on Track After Detracking</p>
          <p>An Exclusive Interview With ...</p>
          <p>+ What is The Free Thinkers Journal?</p>
        </div>
      </div>
    </>
  );
}
