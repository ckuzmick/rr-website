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
    { revalidate: 3600 * 24, tags: ["articles"] }
);