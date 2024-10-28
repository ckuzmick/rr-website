import { getArticles } from "@/utils/getArticles";
import "@/styles/menus.css";
import Image from "next/image";

export default async function WritingPage() {
    const articles = await getArticles();

    return (
        <div id="menu-container">
            <h1>Writing</h1>
            <div id="articles-list">
            {articles.map((article, index) => (
                article.content ? (
                        <a key={index} className="article-card" href={`/writing/${article.slug}`}>
                            <Image
                                src={article.cover}
                                alt="Cover Photo"
                                width={600}
                                height={400}
                                loading="eager"
                                priority
                            />
                            <div className="info">
                                <div>
                                    <h2>{article.title}</h2>
                                    <h3>Edition {article.edition}</h3>
                                    {/* <p className="excerpt">{article.content.split(" ").slice(0, 25).join(" ")}...</p> */}
                                </div>
                                <div>
                                    <p className="byline">{article.writer} - {article.date}</p>
                                </div>
                            </div>
                        </a>
                ) : null
            ))}
            </div>
        </div>
    );
}

// Optionally, set revalidation timing (ISR)
export const revalidate = 3600;