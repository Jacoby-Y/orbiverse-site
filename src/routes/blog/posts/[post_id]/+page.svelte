<script lang="ts">
    export let data;

    const { meta, content } = data;

    const months = [
        null,
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    function formatDate(str: string) {
        const [year, month, day] = str.split("-");

        return `${months[+month]} ${day}, ${year}`;
    }
</script>

<!-- SEO -->
<svelte:head>
    <title>{meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={meta.title} />
</svelte:head>

<article>
    <!-- Title -->
    <hgroup>
        <h1>{meta.title}</h1>
        <p>{formatDate(meta.date)}</p>
    </hgroup>

    <!-- Tags -->
    <!-- <div class="tags">
        {#each meta.categories as category}
            <span>&num;{category}</span>
        {/each}
    </div> -->

    <!-- Post -->
    <div class="post-content">
        <svelte:component this={content} />
    </div>
</article>

<style lang="scss">
    article {
        padding: 3rem;
    }

    hgroup {
        text-align: center;
        margin-bottom: 2rem;
        border-bottom: 2px solid #333;
        padding-bottom: 2rem;

        h1 {
            font-size: 3rem;
        }

        p {
            margin-top: 1rem;
        }
    }

    .post-content {
        padding-bottom: 20rem;
    }
</style>
