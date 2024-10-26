import { getArticles } from "@/utils/getArticles";

export default async function ArticlePage({ params }) {
    const articles = await getArticles();
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <article>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
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