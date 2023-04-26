<script>
	import dataManager from "./dataManager"
	import { levelAmount, capabilityList } from "./stores/constants"

    export let capabilityID
	export let userInput
	export let reload

	let levelArray = Array($levelAmount).fill().map((x,i) => i)
	let capabilities = $capabilityList

    function updateInputData(event) {
		let newValue = this.value
		if (typeof newValue == "string") {
			newValue = Number(newValue.replace(/(\r\n|\n|\r)/gm, " "))
		}
		userInput[capabilityID].isValue = newValue
		dataManager.saveToLocalStorage("dataUserInput", userInput)	
	}

	function reloadParent() {
		dataManager.saveToLocalStorage("dataUserInput", userInput)
		reload = {}
	}

</script>

<div class="row">
	<details class="col">
		<summary class="capability_title">{capabilities[capabilityID].title} [{capabilityID}]</summary>
		{capabilities[capabilityID].description}
	</details>

	{#each levelArray as i}
	{#if i+1 == userInput[capabilityID].isValue}
	<input type="radio" class="col" checked={true}>
	{:else}
	<input type="radio" class="col" value={i+1} on:change={updateInputData}>
	{/if}
	{/each}

	<textarea class="col" bind:value={userInput[capabilityID].explanation} on:change={dataManager.saveToLocalStorage("dataUserInput", userInput)}></textarea>

	<input type="checkbox" bind:checked={userInput[capabilityID].notRelevant} on:change={reloadParent}>
</div>


<style>
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

	.capability_title {
		font-weight: bold;
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