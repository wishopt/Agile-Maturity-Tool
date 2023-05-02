<script>

    import { onMount } from 'svelte'
	import { emptyUserInfo, emptyUserData } from "./stores/constants"
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
	let dimensionDescriptions = $dimensionDesc
	let capabilites = $capabilityList

	try {
		userInput = dataManager.loadFromLocalStorage("dataUserInput")
	} catch (error) {
		console.log(error)
		userInfo = $emptyUserData
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
			divisor = Number(Object.keys(userInput[dimension]).length)
			average = 0
			
			for (let capability in userInput[dimension]) {
				dividend += Number(userInput[dimension][capability].value)
			}

			averages[dimension] = round(dividend/(divisor*1.0), 1)
		}
	}

	function getLabels(dimension) {
		let array = []

		for (const [id, capabilityData] of Object.entries(capabilites)) {
			if (capabilityData.dimension == dimension && !(userInput[id].notRelevant && appConfig.hideIrrelevant)) {
				array.push(capabilityData.title)
			}
		}

		// apply filter

		return array
	}

	function getIsValues(dimension) {
		let array = []

		for (const [id, capabilityData] of Object.entries(capabilites)) {
			if (capabilityData.dimension == dimension && !(userInput[id].notRelevant && appConfig.hideIrrelevant)) {
				array.push(Number(userInput[id].isValue))
			}
		}

		// apply filter

		return array
	}

	function getShouldValues(dimension) {
		let array = []

		for (const [id, capabilityData] of Object.entries(capabilites)) {
			if (capabilityData.dimension == dimension && !(userInput[id].notRelevant && appConfig.hideIrrelevant)) {
				array.push(Number(userInput[id].shouldValue))
			}
		}

		// apply filter

		return array
	}


</script>

<div id="auswertung">

	<ExportButton data={userInput}/>

	{#each Object.entries(userInput) as [dimension, capabilites]}
	
	<EvaluationChart dimension={dimension} labels={getLabels(dimension)} isValues={getIsValues(dimension)} shouldValues={getShouldValues(dimension)} average={averages[dimension]} bind:images/>

	<EvaluationDataTable capabilites={capabilites} dimension={dimension}/>

	{/each}

	<ExportButton data={userInput}/>
</div>