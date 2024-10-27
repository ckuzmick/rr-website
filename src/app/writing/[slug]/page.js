import { getArticles } from "@/utils/getArticles";
import Image from "next/image";
import "@/styles/article.css";
import ReactMarkdown from "react-markdown";

function LinkRenderer(props) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    );
  }

export default async function ArticlePage({ params }) {
    const articles = await getArticles();
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <article>
            <div id="title-block">
                <h1>{article.title}</h1>
                <h2>By {article.writer}</h2>
            </div>
            <Image
                src={article.cover}
                alt="Cover Photo"
                width={600}
                height={400}
                loading="eager"
                priority
            />
            <div className="markdown-content">
                {article.content.split("\n").map((paragraph, index) => (
                    <ReactMarkdown components={{ a: LinkRenderer}}>{paragraph}</ReactMarkdown>
                ))}
            </div>
        </article>
    );
}

export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

// Optionally, set revalidation timing (ISR)
export const revalidate = 3600;