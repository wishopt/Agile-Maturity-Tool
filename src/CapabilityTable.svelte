<script>

    import {ui, levelDesc, dimensionDesc, capabilityList, levelAmount, emptyUserData} from "./stores/constants"
    import TableRow from "./CapabilityTableRow.svelte"
	import dataManager from "./dataManager"

	export let appConfig

	let text = $ui[appConfig.language].capabilityTable
	let numLevels = $levelAmount
	let levelDescriptions = $levelDesc[appConfig.language]
	let dimensionDescriptions = $dimensionDesc[appConfig.language]
	let capabilities = $capabilityList[appConfig.language]
	let reload = {}

	let userInput
	try {
		userInput = dataManager.loadFromLocalStorage("dataUserInput")
	} catch (error) {
		console.log(error)
		userInput = $emptyUserData
	}


</script>

<span style="color:red;">{text.is}</span> | <span style="color:blue;">{text.should}</span>
{#each Object.entries(dimensionDescriptions) as [dimension, description]}
<div class="capability_container">

	<div class="titlebar">
		<details class="col dimensionDescription">
			<summary class="summary-level">{dimension}</summary>
			{description}
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
		<span class="col relevant" id="relevant">{text.notRelevant}</span>
		<span class="col explanation" id="explanation">{text.explanation}</span>
	
	</div>

	<div class="capabilities">
		{#each Object.entries(capabilities) as [id, capability]}
		{#if capability.dimension == dimension && !(userInput[id].notRelevant && appConfig.hideIrrelevant)}
		<TableRow capabilityID={id} userInput={userInput} bind:appConfig/>
		{/if}
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

	.relevant {
		width: 10%;
		padding-top: 10px;
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