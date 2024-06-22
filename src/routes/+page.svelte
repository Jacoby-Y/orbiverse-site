<script lang="ts">
    import games, { buildIFrameSrc } from "$lib/games";
    import { onMount } from "svelte";
    import type { Post } from "./blog/posts/+server";
    import BlogCard from "$lib/BlogCard.svelte";


    let latest_posts: Post[] = [];

    onMount(async ()=>{
        try {
            const res = await fetch("/blog/posts");
            latest_posts = ((await res.json()) as Post[]).toSorted((a, b)=> +a.date.split("-").join("") - +b.date.split("-").join(""));
        } catch { }
    });

</script>

<svelte:head>
    <title>Orbiverse</title>
</svelte:head>

<main>
    <div class="latest-games">
        <h1>
            Latest Games
        </h1>
        {#each games.filter(game => game.hidden !== true).slice(0, 2).map(game => buildIFrameSrc(game)) as src}
            <iframe title="Game" frameborder="0" {src} width="100%" height="167"></iframe>
        {/each}
    </div>
    <div class="latest-blogs">
        <h1>
            Latest Blog Posts
        </h1>
        {#each latest_posts as post}
            <BlogCard {post} />
        {/each}
    </div>
</main>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        padding-top: 5.3rem;
        gap: 4rem;
    }

    .latest-games {
        max-width: 310px;
    }

    .latest-games, .latest-blogs {
        width: 100%;

        h1 {
            text-align: center;
            margin-bottom: 1rem;
        }
    }

    @media (min-width: 565px) {
        .latest-games {
            max-width: 100%;
        }
    }
</style>