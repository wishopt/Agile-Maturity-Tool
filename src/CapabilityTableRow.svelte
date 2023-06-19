<script>
	import dataManager from "./dataManager"
	import { levelAmount, capabilityList } from "./stores/constants"
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

    export let capabilityID
	export let userInput
	export let appConfig

	let levelArray = Array($levelAmount).fill().map((x,i) => i)
	let capabilities = $capabilityList[appConfig.language]

    function updateIsValue(event) {
		let newValue = this.value
		if (typeof newValue == "string") {
			newValue = Number(newValue.replace(/(\r\n|\n|\r)/gm, " "))
		}
		userInput[capabilityID].isValue = newValue
		dataManager.saveToLocalStorage("dataUserInput", userInput)	
	}

	function updateShouldValue(event) {
		let newValue = this.value
		if (typeof newValue == "string") {
			newValue = Number(newValue.replace(/(\r\n|\n|\r)/gm, " "))
		}
		userInput[capabilityID].shouldValue = newValue
		dataManager.saveToLocalStorage("dataUserInput", userInput)	
	}

	function reloadConfig() {
		dataManager.saveToLocalStorage("dataUserInput", userInput)
		appConfig = appConfig
	}

	function updateFilter(event) {
		reloadConfig()
		dispatch('updateFilter', {
			id: event.target.value,
			state: event.target.checked
		})
	}

	function hideCustomCheckbox(bool) {
		let checkboxTitles
		let checkboxDivs
		try {
			checkboxDivs = document.getElementsByClassName("inFilterCheckbox")
			checkboxTitles = document.getElementsByClassName("inFilter")
		} catch (error) {
			return
		}
		
		if (bool) {
			for (let i = 0; i < checkboxDivs.length; i++) {
				checkboxDivs[i].style["display"] = "none"
			}

			for (let i = 0; i < checkboxTitles.length; i++) {
				checkboxTitles[i].style["display"] = "none"
			}
			
		} else if (!checkboxDivs) {
			return
		} else {
			for (let i = 0; i < checkboxDivs.length; i++) {
				checkboxDivs[i].style["display"] = "block"
			}

			for (let i = 0; i < checkboxTitles.length; i++) {
				checkboxTitles[i].style["display"] = "block"
			}
		}


	}

	$: hideCustomCheckbox(appConfig.hideCustomFilter)

</script>

<div class="row">
	<details class="col">
		<summary class="capability_title">{capabilities[capabilityID].title} [{capabilityID}]</summary>
		{capabilities[capabilityID].description}
	</details>

	<div class="radioGroups">
		<div class="isValues">
			{#each levelArray as i}
			{#if i+1 == userInput[capabilityID].isValue}
			<input type="radio" class="col is" name="is{capabilityID}" checked={true}>
			{:else}
			<input type="radio" class="col is" name="is{capabilityID}" value={i+1} on:change={updateIsValue}>
			{/if}
			{/each}
		</div>
	
		<div class="shouldValues">
			{#each levelArray as i}
			{#if i+1 == userInput[capabilityID].shouldValue}
			<input type="radio" class="col should" name="should{capabilityID}" checked={true}>
			{:else}
			<input type="radio" class="col should" name="should{capabilityID}" value={i+1} on:change={updateShouldValue}>
			{/if}
			{/each}
		</div>
	</div>

	<div class="inFilterCheckbox">
		<input type="checkbox" bind:checked={userInput[capabilityID].inFilter} value="{capabilityID}" on:change={updateFilter}>
	</div> 


	<textarea class="col" bind:value={userInput[capabilityID].explanation} on:change={dataManager.saveToLocalStorage("dataUserInput", userInput)}></textarea>
	
</div>


<style>
	input[type=radio] {
		width: 5%;
		max-height: 20px;
		flex: 1;
		margin-top: 1em;
		cursor: pointer;
	}

	input[type=checkbox] {
		width: 100%;
		max-height: 20px;
		flex: 1;
		margin-top: 1em;
		cursor: pointer;
	}

	textarea {
		width: 25%;
		padding: 0;	
	}

	.is {
		accent-color: red;
	}

	.should {
		accent-color: blue;
	}

	.capability_title {
		font-weight: bold;
	}

	.row {
		display: flex;
		margin-bottom: 20px;
	}

	.radioGroups {
		width: 40%;
		justify-content: space-around;	
	}

	.isValues {
		display: flex;
		justify-content: space-around;
	}

	.shouldValues {
		display: flex;
		justify-content: space-around;	
	}

	.inFilterCheckbox {
		width: 10%;
	}

	details {
		width: 33%;
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