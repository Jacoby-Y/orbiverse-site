<script lang="ts">
    import type { Post } from "../routes/blog/posts/+server";

    export let post: Post;
</script>

<a href="/blog/posts/{post.slug}">
    <h1>
        {post.title}
        <span class="tags">
            {#each post.tags as tag}
                <b>{tag}</b>
            {/each}
        </span>
    </h1>
    <p>{post.description}</p>
</a>

<style lang="scss">
    a {
        color: inherit;
        text-decoration: none;
        display: block;
        background-color: #202020;
        border: 2px solid #333;
        padding: 1.5rem;
        width: 100%;
    }

    h1 {
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .tags {
        float: right;
        font-size: 1.2rem;
        display: flex;
        gap: 1rem;
        // align-items: center;

        b {
            font-weight: normal;
            // background-color: #eee;
            border: 2px solid currentColor;
            // color: #111;
            padding: 0.4rem 1rem;
            border-radius: 1.5rem;
        }
    }

    @media (min-width: 565px) {
      a h1 {
        text-align: left;
      }
    }
</style>
