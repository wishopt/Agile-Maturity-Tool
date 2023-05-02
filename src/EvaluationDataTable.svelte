<script>
    import { capabilityList, emptyUserData } from "./stores/constants"
    import dataManager from "./dataManager";

    export let dimension

    let capabilities = $capabilityList
    let userInput

    try {
		userInput = dataManager.loadFromLocalStorage("dataUserInput")
	} catch (error) {
		console.log(error)
		userInfo = $emptyUserData
	}

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

    {#each Object.entries(userInput) as [capability_id, data]}
    {#if capabilities[capability_id].dimension == dimension && !data.notRelevant}
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