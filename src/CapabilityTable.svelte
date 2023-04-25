<script>

    import {levelDesc, levelAmount, dimensionDesc, capabilityList, emptyUserData} from "./stores/constants"
    import TableRow from "./CapabilityTableRow.svelte"
	import dataManager from "./dataManager";

	let constants = $capabilityList
	let numLevels = $levelAmount
	let levelDescriptions = $levelDesc
	let dimensionDescriptions = $dimensionDesc

	let userInput
	try {
		userInput = dataManager.loadFromLocalStorage("dataUserInput")
	} catch (error) {
		console.log(error)
		userInput = $emptyUserData
	}

</script>

{#each Object.entries(constants) as [dimension, capabilities]}
<div class="capability_container">

	<div class="titlebar">
		<details class="col dimensionDescription">
			<summary class="summary-level">{dimension}</summary>
			{dimensionDescriptions[dimension]}
		</details>
	</div>

	<div class="row titles">
		<div class="empty col"></div>
		{#each Array(numLevels) as _, i}
			<details class="col level-item">
				<summary class="summary-level">Level {i + 1}</summary>
				{levelDescriptions[i]}
			</details>
		{/each}
		<span class="col explanation" id="explanation">Explanation</span>
	</div>

	<div class="capabilities">
		{#each Object.entries(capabilities) as [capabilityID, data]}
		<TableRow capabilityID={capabilityID} data={data} dimension={dimension} userInput={userInput}/>
		{/each}
	</div>

</div>
{/each}

<style>
    #explanation {
		padding-left: 0;
		height: 1em;
		margin-top: 0.8em;
	}

	.capabilities {
		width: 85%;
		margin: auto;
	}

	.summary-level {
		padding-bottom: 1em;
	}

	.titles {
		width: 85%;
		margin: auto;
		font-weight: bold;
	}

	.empty {
		flex: 4;
	}

	.explanation {
		flex: 3;
		text-align: left;
		padding-bottom: 1em;
		padding-left: 0;
	}

	.dimensionDescription {
		text-align: center;
	}

	.level-item {
		flex: 1;
		text-align: center;
	}

	.level-item {
		text-align: left;
	}

	.level-item > summary {
		text-align: center;
	}

	.row {
		display: flex;
	}


	details {
		flex: 4;
		text-align: right;
		font-weight: normal;
		font-size: smaller;
		margin-top: 1em;
		margin-bottom: 1em;
	}

	summary {
		font-weight: bold;
		font-size: medium;
		padding-bottom: 0.5em;
		cursor: pointer;
	}
</style>