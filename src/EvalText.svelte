<script>
    export let input
</script>

<h2>Auswertung</h2>
{#each Object.entries(input) as [dimensionTitle, capabilities]}
    <h3>{dimensionTitle}</h3>
    <ul>
        {#each Object.entries(capabilities) as [capabilityTitle, capabilityScore]}
            <li>{capabilityTitle}: {capabilityScore}</li>
        {/each}
    </ul>
{/each}