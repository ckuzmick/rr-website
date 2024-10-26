import Airtable from "airtable";
import { image } from "d3";
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
            slug: record.get("slug"),
            content: record.get("content"),
        }));

        return articles;
    },
    ["articles"],
    { revalidate: 3600, tags: ["articles"] }
);