<script>

    import { onMount } from 'svelte'
	import { emptyUserInfo, emptyUserData, dimensionDesc, categories, capabilityList, defaultFilters, capabilityConverter, topicConverter, ui } from "./stores/constants"
	import EvaluationChart from './EvaluationChart.svelte'
    import EvaluationDataTable from './EvaluationDataTable.svelte'
	import ExportButton from './ExportButton.svelte'
	import dataManager from './dataManager'

	export let appConfig

	let userInfo
	let userInput
	let dividend
	let divisor
	let average
	let averages = []
	let images = { }
	let dimensionDescriptions = $dimensionDesc[appConfig.language]
	let categoryDescriptions = $categories[appConfig.language]
	let capabilities = $capabilityList[appConfig.language]
	let snapshots

	try {
		snapshots = dataManager.loadFromLocalStorage("dataUserSnapshots")
	} catch (error) {
		console.log(error)
		snapshots = {}
	}

	try {
		userInput = dataManager.loadFromLocalStorage("dataUserInput")
	} catch (error) {
		console.log(error)
		userInput = $emptyUserData
	}

	try {
		userInfo = dataManager.loadFromLocalStorage("dataUserInfo")
	} catch (error) {
		console.log(error)
		userInfo = $emptyUserInfo
	}

	onMount(async (promise) => {
		getAverages()
	})	

	function round(value, precision) {
		var multiplier = Math.pow(10, precision || 0)
		return Math.round(value * multiplier) / multiplier
	}

	function getAverages() {
		// TODO: fix function for new data structure
		for (const dimension of Object.keys(dimensionDescriptions)) {
			let values = getIsValues(dimension)
			dividend = 0
			divisor = values.length
			average = 0
			
			for (const value in values) {
				dividend += value
			}

			averages[dimension] = dividend/(divisor*1.0)
		}
	}

	function getLabels(input) {
		// TODO: Clean up
		let array = []

		if (dimensionDescriptions.hasOwnProperty(input)) {
			for (const [id, capabilityData] of Object.entries(capabilities)) {
				if (capabilityData.dimension == input) {
					array.push(capabilityData.title)
				}
			}
		}
		else {
			for (const [id, capabilityData] of Object.entries(capabilities)) {
				if (capabilityData.category == input) {
					array.push(capabilityData.title)
				}
			}
		}

		// apply filter

		return array
	}

	function getIsValues(input) {
		// TODO: Clean up
		let array = []

		if (dimensionDescriptions.hasOwnProperty(input)) {
			for (const [id, capabilityData] of Object.entries(capabilities)) {
				if (capabilityData.dimension == input) {
					array.push(Number(userInput[id].isValue))
				}
			}
		}
		else {
			for (const [id, capabilityData] of Object.entries(capabilities)) {
				if (capabilityData.category == input) {
					array.push(Number(userInput[id].isValue))
				}
			}
		}

		// apply filter

		return array
	}

	function getShouldValues(input) {
		// TODO: Clean up
		let array = []

		if (dimensionDescriptions.hasOwnProperty(input)) {
			for (const [id, capabilityData] of Object.entries(capabilities)) {
				if (capabilityData.dimension == input) {
					array.push(Number(userInput[id].shouldValue))
				}
			}
		}
		else {
			for (const [id, capabilityData] of Object.entries(capabilities)) {
				if (capabilityData.category == input) {
					array.push(Number(userInput[id].shouldValue))
				}
			}
		}

		// apply filter

		return array
	}

	function generateTableData(input) {
		// TODO: Clean up
		let tableData = { }

		if (dimensionDescriptions.hasOwnProperty(input)) {
			for (const [key, value] of Object.entries(userInput)) {
				if (capabilities[key].dimension == input) {
					tableData[key] = value
				}
			}
		} 
		else {
			for (const [key, value] of Object.entries(userInput)) {
				if (capabilities[key].category == input) {
					tableData[key] = value
				}
			}
		}
		return tableData
	}

	function generateChartData(input) {
		let chartData = { }

		chartData.labels = getLabels(input)
		chartData.isValues = getIsValues(input)
		chartData.shouldValues = getShouldValues(input)
		chartData.title = input

		return chartData
	}

	function arrayIntersection(array1, array2) {
		// refactor to avoid duplication
		let intersection
		intersection = array1.filter(item => array2.includes(item))
		if (intersection.length > 0) {
			return true
		} else {
			return false
		}
	}

	function toggleMode() {
		let chartImages = document.getElementById("chartContainer")
		let snapshotImages = document.getElementById("snapshotContainer")
		
		if (chartImages.style.display == "none") {
			chartImages.style.display = "block"
			snapshotImages.style.display = "none"
		} else {
			chartImages.style.display = "none"
			snapshotImages.style.display = "block"
		}
	}

	function getRandomInt(max) {
  		return Math.floor(Math.random() * max)
	}

	function generateSnapshotDatasets(input) {
		let snapshotDatasets = []

		for (const [snapName, snapValues] of Object.entries(snapshots)) {
			let snapshotData = { }

			let r = getRandomInt(255)
			let g = getRandomInt(255)
			let b = getRandomInt(255)

			// snapshotData.labels = getLabels(input)
			snapshotData.label = snapName
			snapshotData.data = getIsValuesSnapshots(input, snapshots[snapName])
			snapshotData.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.2)`
			snapshotData.borderColor = `rgba(${r}, ${g}, ${b}, 0.6)`

			snapshotDatasets.push(snapshotData)
		}

		return snapshotDatasets
	}

	function getIsValuesSnapshots(input, data) {
		// TODO: Clean up
		let array = []

		if (dimensionDescriptions.hasOwnProperty(input)) {
			for (const [id, capabilityData] of Object.entries(capabilities)) {
				if (capabilityData.dimension == input) {
					array.push(Number(data[id].isValue))
				}
			}
		}
		else {
			for (const [id, capabilityData] of Object.entries(capabilities)) {
				if (capabilityData.category == input) {
					array.push(Number(data[id].isValue))
				}
			}
		}

		// apply filter

		return array
	}

	function prepareSnapshotData(data) {
		let newData = data
		newData.title = newData.title + " - Snapshot" 
		return newData
	}

</script>

<div id="auswertung">
	<ExportButton data={userInput} images={images} appConfig={appConfig}/>

	<button on:click={toggleMode}>{$ui[appConfig.language].evaluation.changeMode}</button>

	<div id="chartContainer">
		{#each Object.keys(dimensionDescriptions) as dimension}

		{#if appConfig.checkedFilters[$capabilityConverter[dimension]]}
	
		<EvaluationChart chartData={generateChartData(dimension)} bind:images language={appConfig.language}/>
	
		<EvaluationDataTable tableData={generateTableData(dimension)} isHidden={appConfig.hideIrrelevant} language={appConfig.language}/>
		{/if}
		
		{/each}
	
		{#each Object.values(categoryDescriptions) as category}
	
		{#if appConfig.checkedFilters[$topicConverter[category]]}
	
		<EvaluationChart chartData={generateChartData(category)} bind:images language={appConfig.language}/>
	
		<EvaluationDataTable tableData={generateTableData(category)} isHidden={appConfig.hideIrrelevant} language={appConfig.language}/>
			
		{/if}
	
		{/each}
	</div>

	<div id="snapshotContainer">
		{#each Object.keys(dimensionDescriptions) as dimension}

		{#if appConfig.checkedFilters[$capabilityConverter[dimension]]}
	
		<EvaluationChart chartData={prepareSnapshotData(generateChartData(dimension))} bind:images language={appConfig.language} snapConfig={generateSnapshotDatasets(dimension)}/>
	
		<!-- <EvaluationDataTable tableData={generateTableData(dimension)} isHidden={appConfig.hideIrrelevant} language={appConfig.language}/> -->
		{/if}
		
		{/each}
	
		{#each Object.values(categoryDescriptions) as category}
	
		{#if appConfig.checkedFilters[$topicConverter[category]]}
	
		<EvaluationChart chartData={prepareSnapshotData(generateChartData(category))} bind:images language={appConfig.language} snapConfig={generateSnapshotDatasets(category)}/>
	
		<!-- <EvaluationDataTable tableData={generateTableData(category)} isHidden={appConfig.hideIrrelevant} language={appConfig.language}/> -->
			
		{/if}
	
		{/each}
	</div>

	<ExportButton data={userInput} images={images} appConfig={appConfig}/>
</div>

<style>
	#chartContainer {
	}
</style>