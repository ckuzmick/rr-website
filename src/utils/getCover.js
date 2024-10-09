import Airtable from "airtable";
import { unstable_cache } from "next/cache";

export const getCover = unstable_cache(
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
        const records = await base("editions")
            .select({
                view: "Grid view",
            })
            .all();

        const cover = records[0].fields.cover[0].url;

        return cover;
    },
    ["cover"],
    { revalidate: 3600, tags: ["cover"] }
);