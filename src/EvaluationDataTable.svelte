<script>
    import { ui, capabilityList } from "./stores/constants"

    export let tableData
    export let isHidden
    export let language

    let text = $ui[language].evaluationDataTable
</script>

<table>
    <tr>
        <th class="middle">
            {text.id}
        </th>
        <th class="left">
            {text.capability}
        </th>
        <th class="middle">Value</th>
        <th class="right">
            {text.comment}
        </th>
    </tr>

    {#each Object.entries(tableData) as [capability_id, data]}
    {#if !data.inFilter && isHidden}
    
    {:else}
    <tr>
        <td class="middle">
            {capability_id}
        </td>
        <td class="left">
            {$capabilityList[language][capability_id].title}
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