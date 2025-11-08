<script>
    import Footer from "./lib/templates/Footer.svelte";
    import LeftPanel from "./lib/templates/LeftPanel.svelte";
    import MainPanel from "./lib/templates/MainPanel.svelte";
    import Navbar from "./lib/templates/Navbar.svelte";
</script>

<LeftPanel />
<Navbar />
<MainPanel />
<Footer />

<style>
    :global(div#app),
    :global(body) {
        background-color: red;
        height: 100vh;
    }

    :global(div#app) {
        display: grid;
        gap: 0.5rem;
        padding: 0.5rem clamp(5rem, 8vw, 10rem);
        grid-template-areas:
            "leftPanel rightPanelHeader"
            "leftPanel rightPanelBody"
            "leftPanel rightPanelFooter";
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto 1fr auto;
        max-width: 1440px;
        margin: auto auto;
    }
</style>
