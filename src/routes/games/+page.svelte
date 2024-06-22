<script>
    import games, { buildIFrameSrc } from "$lib/games";

    let sources = games.filter(game => game.hidden !== true).map(buildIFrameSrc);
</script>

<svelte:head>
    <title>Games</title>
</svelte:head>

<main>
    <div class="games">
        {#each sources as src}
            <iframe title="Game" frameborder="0" {src} width="100%" height="167"></iframe>
            <!-- <iframe title="Game" frameborder="0" {src} width="206" height="167"></iframe> -->
        {/each}
    </div>
</main>

<style>
    .games {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 2rem;
    }
</style>