<script>
    import { capabilityList } from "./stores/constants"

    export let tableData
    export let isHidden

</script>

<table>
    <tr>
        <th class="middle">
            ID
        </th>
        <th class="left">
            Capability
        </th>
        <th class="middle">Value</th>
        <th class="right">
            Comment
        </th>
    </tr>

    {#each Object.entries(tableData) as [capability_id, data]}
    {#if data.notRelevant && isHidden}
    
    {:else}
    <tr>
        <td class="middle">
            {capability_id}
        </td>
        <td class="left">
            {$capabilityList[capability_id].title}
        </td>
        <td class="middle">
            {data.isValue}
        </td>
        <td class="right">
            {data.explanation}
        </td>
    </tr>
    {/if}
    {/each}
</table>

<style>
	.middle {
		width: 3%;
	}

	.left {
		width: 17%;
	}

	.right {
		width: 27%;
	}

	table, th, td {
		border: 1px solid;
	}

	table {
		font-size: smaller;
		border-collapse: collapse;
		width: 50%;
		margin: auto;
		margin-bottom: 3em;
	}
</style>