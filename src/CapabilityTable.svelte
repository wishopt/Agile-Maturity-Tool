<script>

    import {ui, levelDesc, dimensionDesc, capabilityList, levelAmount, emptyUserData, defaultFilters, categories, defaultPresets, emptyUserInfo, capabilityConverter} from "./stores/constants"
    import TableRow from "./CapabilityTableRow.svelte"
	import dataManager from "./dataManager"
    import App from "./App.svelte";

	export let appConfig

	let categoryNames = $categories.en
	let text 
	$: text = $ui[appConfig.language].capabilityTable
	let numLevels = $levelAmount
	let levelDescriptions = $levelDesc[appConfig.language]
	let dimensionDescriptions = $dimensionDesc[appConfig.language]
	let capabilities = $capabilityList[appConfig.language]
	let reload = {}

	let editMode = false

	let userInput
	let selectedPreset = "other"
	let emptyPreset = "other"

	try {
		userInput = dataManager.loadFromLocalStorage("dataUserInput")
	} catch (error) {
		console.log(error)
		userInput = $emptyUserData
	}

	let userInfo

	try {
		userInfo = dataManager.loadFromLocalStorage("dataUserInfo")
	} catch (error) {
		console.log(error)
		userInfo = $emptyUserInfo
	}

		function openFilterPopUp() {
		document.getElementById("overlay").style.display = "block"
	}

	let presets

	try {
		presets = dataManager.loadFromLocalStorage("dataUserPresets")
	} catch (error) {
		console.log(error)
		presets = $defaultPresets
	}

	let filters

	try {
		filters = dataManager.loadFromLocalStorage("dataUserFilters")
	} catch (error) {
		console.log(error)
		filters = $defaultFilters
	}


	function closeFilterPopUp() {

		initFilter()

		document.getElementById("overlay").style.display = "none"
	}

	function initFilter() {
		let newFilter = []

		for (filter in appConfig.checkedFilters) {
			let idArray = filters[filter]

			if (appConfig.checkedFilters[filter]) {
				for (id of idArray) {
					newFilter.push(id)
				}
			}
		}

		appConfig.currentFilter = newFilter
	}

	function resetFilter() {
		appConfig.currentFilter = []
		for (filter in appConfig.checkedFilters) {
			appConfig.checkedFilters[filter] = false
		}

		selectedPreset = ""
	}

	function updateFilters() {
		appConfig.checkedFilters = presets[selectedPreset]
	}

	function arrayIntersection(array1, array2) {
		let intersection
		intersection = array1.filter(item => array2.includes(item))
		if (intersection.length > 0) {
			return true
		} else {
			return false
		}
	}

	function toggleEditMode(event) {
		if (editMode && event.target.textContent == "speichern") {
			event.target.textContent = "bearbeiten"

			let newFilter = appConfig.checkedFilters

			presets[event.srcElement.value] = newFilter

			dataManager.saveToLocalStorage("dataUserPresets", presets)	

			editMode = !editMode
			
		} else if (!editMode && event.target.textContent == "bearbeiten") {
			event.target.textContent = "speichern"

			selectedPreset = event.srcElement.value

			updateFilters()

			initFilter()

			editMode = !editMode
		}
	}

	function resetPresets() {
		presets = $defaultPresets

		dataManager.saveToLocalStorage("dataUserPresets", presets)	

		alert("Presets zurückgesetzt")
	}

	function addPreset() {
		let name = prompt()
		presets[name] = $defaultPresets['anderes (alle Capabilites anzeigen)']
	}

	if (userInfo.function) {
		selectedPreset = userInfo.function
	} else {
		selectedPreset = emptyPreset
	}
	

	updateFilters()

	initFilter()


</script>

<button on:click={openFilterPopUp}>{text.applyFilter}</button>

<br>

<span style="color:red;">{text.is}</span> | <span style="color:blue;">{text.should}</span>
{#each Object.entries(dimensionDescriptions) as [dimension, description]}

<div class="capability_container">
	{#if arrayIntersection(appConfig.currentFilter, filters[$capabilityConverter[dimension]])}
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
		<span class="col explanation" id="explanation">{text.explanation}</span>
	</div>
	<div class="capabilities">
		{#each Object.entries(capabilities) as [id, capability]}
		{#if capability.dimension == dimension && !(userInput[id].notRelevant && appConfig.hideIrrelevant) && appConfig.currentFilter.includes(id)}
		<TableRow capabilityID={id} userInput={userInput} bind:appConfig/>
		{/if}
		{/each}
	</div>
	{/if}

</div>

{/each}

<div id="overlay">
	<div id="filterwindow">
		<h2>{text.filterCapabilites}</h2>

		<div class="filterwindowContent">
			<div class="filterContainer">
				<h3>{text.categories}</h3>
				{#each Object.entries(filters) as [name, idArray]}
					{#if !(name in categoryNames)}
						<div class="filterRow">
							<input type="checkbox" name="filter" id="filter_{name}" bind:checked={appConfig.checkedFilters[name]}>
							<span>{$ui[appConfig.language].categories[name]}</span>
						</div>
						<br>	
					{/if}
				{/each}
			</div>
			<div class="filterContainer">
				<h3>{text.topics}</h3>
				{#each Object.entries(filters) as [name, idArray]}
					{#if name in categoryNames}
						<div class="filterRow">
							<input type="checkbox" name="filter" id="filter_{name}" class="filterCheckbox" bind:checked={appConfig.checkedFilters[name]}>
							<span>{$ui[appConfig.language].categories[name]}</span>
						</div>
						<br>	
					{/if}
				{/each}
			</div>
			<div class="filterContainer">
				<h3>Presets</h3>
				{#each Object.entries(presets) as [title, filterNames]}
				<div class="preset">
					<input type="radio" name="selectedPreset" id="{title}" bind:group={selectedPreset} value="{title}" on:change={updateFilters}>
					<span >{$ui[appConfig.language].presets[title]}</span>
					<button id="btn_{title}" value="{title}" on:click={toggleEditMode}>{text.edit}</button>
					<br>
				</div>
				{/each}
			</div>
		</div>

		<div class="buttonRow">
			<button on:click={closeFilterPopUp}>{text.filterClose}</button>

			<button on:click={resetFilter}>{text.filterRemove}</button>
	
			<button on:click={addPreset}>{text.filterAddPreset}</button>

			<button on:click={resetPresets} style="color:red;">{text.filterResetPresets}</button>
		</div>

	</div>
</div>

<style>
	#overlay {
		position: fixed; /* Sit on top of the page content */
		display: none; /* Hidden by default */
		width: 100%; /* Full width (cover the whole page) */
		height: 100%; /* Full height (cover the whole page) */
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.5); /* Black background with opacity */
		z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
	}

	#filterwindow {
		padding: 1%;
		background-color: white;
		margin: auto;
		margin-top: 5em;
		text-align: left;
		width: fit-content;
	}

	.filterwindowContent {
		display: inline-block;
	}

	.filterContainer {
		float: left;
		padding-right: 1em;
	}

	.filterRow {
		font-size: small;
	}

	.buttonRow {

	}

	.filterCheckbox {
		color: blue;
	}

	.preset {
		display: flex,
	}

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
		flex: 3.3;
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