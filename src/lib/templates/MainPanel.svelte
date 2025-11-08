{#snippet section()}
    <section class="bg-cyan-300 rounded-lg my-2 mx-auto p-2">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at risus
            vitae lorem vehicula pretium. Vivamus quis porttitor ex. Vivamus et
            turpis venenatis, pellentesque libero eget, tristique nibh. Aenean
            porta ipsum leo, nec eleifend metus semper vitae. Duis dapibus orci
            purus, eget tincidunt metus laoreet sed. Pellentesque at leo
            venenatis, accumsan tortor vitae, pretium purus. Suspendisse
            convallis urna non nunc blandit bibendum. Vivamus commodo gravida
            sodales. Proin dictum nulla non diam faucibus tincidunt. Nam
            pharetra ex non ante pharetra, quis gravida justo tempus. Sed at
            augue eu enim feugiat vehicula. Fusce nec eros finibus, suscipit
            ante ac, mollis nunc. Duis condimentum, neque sit amet fringilla
            suscipit, velit mauris semper erat, eget elementum lacus massa et
            erat. Etiam luctus malesuada sollicitudin.
        </p>
    </section>
{/snippet}
<main
    style="grid-area: rightPanelBody;"
    class="rounded-lg p-2 bg-yellow-300 border-[0.5rem] border-solid border-yellow-300 overflow-auto"
>
    <h1>right panel body</h1>
    {#each { length: 7 }}
        {@render section()}
    {/each}
</main>
