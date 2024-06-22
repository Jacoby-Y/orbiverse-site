import { error } from '@sveltejs/kit'

export async function load(event) {
	const posts = await event.fetch("/blog/posts");
    const json = await posts.json();

    return { posts: json }
}
