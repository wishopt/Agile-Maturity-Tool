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
	let selectedSnapshot
	
	let selectedPreset = "other"
	let emptyPreset = "other"

	let userInput
	$: userInput

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

	let snapshots

	try {
		snapshots = dataManager.loadFromLocalStorage("dataUserSnapshots")
	} catch (error) {
		console.log(error)
		snapshots = {}
	}

	function openFilterPopUp() {
		document.getElementById("overlay").style.display = "block"
	}

	function closeFilterPopUp() {

		initFilter()

		document.getElementById("overlay").style.display = "none"
	}

	function applyFilter() {
		for (const [id, values] of Object.entries(userInput)) {
			if (appConfig.currentFilter.includes(id)) {
				userInput[id].inFilter = true
			} else {
				userInput[id].inFilter = false
			}
		}
		dataManager.saveToLocalStorage("dataUserInput", userInput)
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
		applyFilter()
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
		let name = prompt("Preset name")

		if (!name) {
			return
		}

		presets[name] = $defaultPresets['other']
		dataManager.saveToLocalStorage("dataUserPresets", presets)	
	}

	if (userInfo.function) {
		selectedPreset = userInfo.function
	} else {
		selectedPreset = emptyPreset
	}

	function createSnapshot() {
		let name = prompt("Insert snapshot name (ex. 2023-06-15)")
		if (!name) {
			return
		}

		selectedSnapshot = name
		snapshots[selectedSnapshot] = userInput
		console.log(snapshots)
		dataManager.saveToLocalStorage("dataUserSnapshots", snapshots)
		location.reload()
	}

	function loadSnapshot() {
		try {
			snapshots = dataManager.loadFromLocalStorage("dataUserSnapshots")
		} catch (error) {
			console.log(error)
			snapshots = {}
		}

		userInput = snapshots[selectedSnapshot]
		dataManager.saveToLocalStorage("dataUserInput", userInput)
	}

	function deleteSnapshot() {
		delete snapshots[selectedSnapshot]
		
		dataManager.saveToLocalStorage("dataUserSnapshots", snapshots)
	}

	function getPresetTitle(title) {
		let displayTitle = $ui[appConfig.language].presets[title]
		if (displayTitle) {
			return displayTitle
		}

		return title
	}

	function getCurrentPreset(input) {

		if (input) {
			return input
		}

		return text.currentPreset

	}
	
	function toggleHidden(event) {
		if (!appConfig.displayHidden) {
			event.target.textContent = "Benutzderdefinierten Filter speichern"
			displayCustomFilterColumn()
		} else {
			event.target.textContent = "Benutzerdefinierten Filter bearbeiten"
			dataManager.saveToLocalStorage("dataUserFilters", filters)
			hideCustomFilterColumn()
		}
		appConfig.displayHidden = !appConfig.displayHidden
	}

	function updateCustomFilter(event) {
		if (event.detail.state) {
			filters['Custom Filter'].push(event.detail.id)
		} else {
			filters['Custom Filter'].pop(event.detail.id)
		}
		dataManager.saveToLocalStorage("dataUserFilters", filters)
	}

	function resetCustomFilter() {
		filters['Custom Filter'] = []
		dataManager.saveToLocalStorage("dataUserFilters", filters)
	}

	function displayCustomFilterColumn() {
		let explanation = document.getElementById("explanation")
		appConfig.hideCustomFilter = false
		explanation.style["flex"] = 3.1
	}

	function hideCustomFilterColumn() {
		let explanation = document.getElementById("explanation")
		appConfig.hideCustomFilter = true
		explanation.style["flex"] = 3.3
	}
	
	updateFilters()

	initFilter()

</script>



<div class="capabilityHeader">
	<div class="padding">
	</div>
	<div class="headerContainer">

		<h3>Filter</h3>
	
		<span>{text.filterPreset}{getCurrentPreset($ui[appConfig.language].presets[selectedPreset])}</span>
		
		<br>
		
		<button on:click={openFilterPopUp} style="margin-top: 1em;">{text.applyFilter}</button>
	
		<button on:click={toggleHidden}>Benutzerdefinierten Filter bearbeiten</button>
	</div>
	
	<div class="headerContainer">
	
		<h3>Snapshots</h3>
	
		<select name="snapshots" id="snapshots" bind:value={selectedSnapshot}>
			{#each Object.keys(snapshots) as snapshotName}
			<option value="{snapshotName}">{snapshotName}</option>
			{/each}
		</select>

		<br>
		
		<button on:click={loadSnapshot}>{text.loadSnapshot}</button>
		<button on:click={deleteSnapshot}>{text.deleteSnapshot}</button>
		
		<br>
		
		<button on:click={createSnapshot}>{text.createSnapshot}</button>
		
	</div>
	<div class="padding">
	</div>
</div>

<br>

<h3>Capabilities</h3>

<span style="color:red;">{text.is}</span> | <span style="color:blue;">{text.should}</span>
{#each Object.entries(dimensionDescriptions) as [dimension, description]}

<div class="capability_container">
	{#if arrayIntersection(appConfig.currentFilter, filters[$capabilityConverter[dimension]]) || appConfig.displayHidden}
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
		<span class="col explanation inFilter">Custom Filter</span>
		<span class="col explanation" id="explanation">{text.explanation}</span>
	</div>
	<div class="capabilities">
		{#each Object.entries(capabilities) as [id, capability]}
		{#if capability.dimension == dimension && (userInput[id].inFilter || appConfig.displayHidden)}
		<TableRow capabilityID={id} userInput={userInput} bind:appConfig on:updateFilter={updateCustomFilter}/>
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
							{#if name == "Custom Filter"}
							<span>{$ui[appConfig.language].categories[name]}</span>
							<button on:click={resetCustomFilter}>Reset</button>
							{:else}
							<span>{$ui[appConfig.language].categories[name]}</span>
							{/if}
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
					<span >{getPresetTitle(title)}</span>
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
	.padding {
		flex: 2;
	}

	.capabilityHeader {
		display: flex;
	}

	.headerContainer {
		flex: 1;
	}

	.inFilter {
		flex: 1;
		padding-top: 10px;
	}


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
		flex: 3.3;
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