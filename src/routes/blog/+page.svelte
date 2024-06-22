<script>
    import BlogCard from "$lib/BlogCard.svelte";

    export let data;
</script>

<svelte:head>
    <title>Posts</title>
</svelte:head>

<main>
    {#each data.posts as post}
        <!-- <a href={`/blog/posts/${post.slug}`}>
            <div class="post">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </div>
        </a> -->
        <BlogCard {post} />
    {/each}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
    }
</style>