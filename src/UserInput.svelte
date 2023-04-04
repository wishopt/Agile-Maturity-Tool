<script>

	// Svelte stores

	import {capabilityList, levelDesc, levelAmount, dimensionDesc, defaultCompanyInfo} from "./stores/constants"

	let constants = $capabilityList
	let numLevels = $levelAmount
	let levelDescriptions = $levelDesc
	let dimensionDescriptions = $dimensionDesc
	let inputFirmenInfo = $defaultCompanyInfo

	// Load previous input or set default values

    export let input	

	let localStorageFirmenInfo = JSON.parse(localStorage.getItem("firmenInfo_en"))

	if (localStorageFirmenInfo == null) {
		console.log("localStorage empty")
	} else {
		inputFirmenInfo = localStorageFirmenInfo
	}

	// Functions for processing user input

    function processInput(event) {
		let value = this.value
		if (typeof value == "string") {
			value = value.replace(/(\r\n|\n|\r)/gm, " ")
		}
		input[this.dataset.dimension][this.name].value = Number(value)
		updateLocalStorage()
	}

	function updateLocalStorage() {
		localStorage.setItem("input_en", JSON.stringify(input))
		localStorage.setItem("firmenInfo_en", JSON.stringify(inputFirmenInfo))
	}

</script>

<form id="firmenInfo">
	
	<label for="unternehmen">Company:</label>
	<input type="text" id="unternehmen" name="unternehmen" class="frontmatter" bind:value={inputFirmenInfo.unternehmen} on:change={updateLocalStorage}>

	<label for="bereich">Organisation:</label>
	<input type="text" id="bereich" name="bereich" class="frontmatter" bind:value={inputFirmenInfo.bereich} on:change={updateLocalStorage}>

	<label for="projekt">Name of agile project:</label>
	<input type="text" id="projekt" name="projekt" class="frontmatter" bind:value={inputFirmenInfo.projekt} on:change={updateLocalStorage}>


	<label for="beschreibung">Description:</label>
	<textarea id="beschreibung" name="beschreibung" class="frontmatter" bind:value={inputFirmenInfo.beschreibung} on:change={updateLocalStorage}></textarea>

</form>

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
            {#each Object.entries(capabilities) as [capability_id, data]}
				<div class="row">
					<details class="col">
						<summary class="capability_title">{data.title} [{capability_id}]</summary>
						{data.description}
					</details>
					{#each Array.from(Array(numLevels).keys()) as i}
						{#if i+1 == input[dimension][capability_id].value}
						<input type="radio" class="col" name={capability_id} data-dimension={dimension} value={i+1} checked="checked" on:change={processInput}>
						{:else}
						<input type="radio" class="col" name={capability_id} data-dimension={dimension} value={i+1} on:change={processInput}>
						{/if}
					{/each}
					<textarea class="col" name={capability_id} data-dimension={dimension} bind:value={input[dimension][capability_id].explanation} on:change={updateLocalStorage}></textarea>
				</div>
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

	input[type=radio] {
		width: 5%;
		max-height: 20px;
		flex: 1;
		margin-top: 1em;
		cursor: pointer;
	}

	textarea {
		flex: 3;
		padding: 0;
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


	.capabilities {
		width: 85%;
		margin: auto;
	}


	.capability_title {
		font-weight: bold;
	}


	.frontmatter {
		width: 30%;
		margin: auto;
		margin-top: 0.5em;
		margin-bottom: 1em;
	}

</style>