<script>
    import "../global.scss";

    let dropdown = false;
</script>

<main>
    <nav class="pc">
        <a class="item" href="/">Orbiverse</a>
        <div class="gap"></div>
        <a class="item" href="/games">Games</a>
        <a class="item" href="/blog">Blog</a>
        <a class="item" href="/about-us">About Us</a>
    </nav>
    <nav class="mobile">
        <a class="item" href="/">Orbiverse</a>
        <div class="gap"></div>
        <button class="menu-toggle" on:click={()=>{ dropdown = !dropdown }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </button>

        <div class="dropdown" class:show={dropdown}>
            <a class="item" href="/games">Games</a>
            <a class="item" href="/blog">Blog</a>
            <a class="item" href="/about-us">About Us</a>
        </div>
    </nav>

    <slot />

    <footer>
        Copyright © 2024 Orbiverse 
        <a href="/secret">Secret</a>
    </footer>
</main>

<style lang="scss">
    main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr max-content;
        height: 100%;

        max-width: 1000px;
        margin: auto;
        padding-top: 4rem;
    }

    nav {
        display: flex;
        gap: 1rem;
        padding: 0 1rem;
        align-items: center;
        font-size: 1.2rem;

        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        width: 100vw;
        max-width: 1000px;
        border-bottom: 5px solid #111;

        &.pc {
            display: none;
        }
        &.mobile {
            display: flex;
            padding-right: 0;
        }

        a {
            cursor: pointer;
            padding: 1rem;
            color: inherit;
            font-weight: bold;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }

        .gap {
            flex-grow: 1;
        }

        .menu-toggle {
            border: none;
            background-color: inherit;
            color: white;
            padding: 0;
            padding: 0.5rem 1rem;
            cursor: pointer;
        }

        .dropdown {
            position: absolute;
            right: 0;
            top: 100%;
            background-color: inherit;
            display: flex;
            flex-direction: column;
            width: 15rem;
            max-width: 100vw;
            border-bottom: 5px solid #111;
            border-left: 5px solid #111;
            transition-duration: 0.3s;
            clip-path: inset(0 0 100% 0);

            &.show {
                clip-path: inset(0 0 0 0);
            }
        }
    }

    footer {
        padding: 1rem;
        text-align: center;

        a {
            color: #333;
            float: right;
        }
    }

    nav, footer {
        background-color: #202020;
    }
    
    @media (min-width: 565px) {
        nav {
            &.pc {
                display: flex;
            }
            &.mobile {
                display: none;
            }
        }
    }
</style>