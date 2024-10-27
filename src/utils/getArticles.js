import Airtable from "airtable";
import { unstable_cache } from "next/cache";

export const getArticles = unstable_cache(
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
        const records = await base("articles")
            .select({
                view: "Grid view",
            })
            .all();

        const articles = records.map((record) => ({
            title: record.get("title"),
            date: record.get("date"),
            writer: record.get("writerName"),
            slug: record.get("slug"),
            content: record.get("content"),
            edition: record.get("editionNumber"),
            cover: record.get("image") ? record.get("image")[0].url : null,
        }));

        console.log(articles);

        return articles;
    },
    ["articles"],
    { revalidate: 3600, tags: ["articles"] }
);