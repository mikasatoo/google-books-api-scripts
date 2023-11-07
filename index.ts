// deno equivalent for dotenv
import { config } from "https://deno.land/x/dotenv/mod.ts";

const apiKey = config().GOOGLE_BOOKS_API_KEY

const searchVolumes = async (volumeNames: string) => {
    try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${volumeNames}&key=${apiKey}`)
        return await res.json();
    } catch (err) {
        console.error('unexpected error occurred when calling google books api', err);
        throw err;
    }
}

console.log(await searchVolumes('dune'));