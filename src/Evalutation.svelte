<script>

    import { onMount } from 'svelte'
	import { emptyUserInfo, emptyUserData, dimensionDesc, capabilityList } from "./stores/constants"
	import EvaluationChart from './EvaluationChart.svelte'
    import EvaluationDataTable from './EvaluationDataTable.svelte'
	import ExportButton from './ExportButton.svelte'
	import dataManager from './dataManager'

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
			let values = getValues(dimension)
			dividend = 0
			divisor = values.length
			average = 0
			
			for (const value in values) {
				dividend += value
			}

			averages[dimension] = dividend/(divisor*1.0)
		}
	}

	function getLabels(dimension) {
		let array = []

		for (const [id, capabilityData] of Object.entries(capabilites)) {
			if (capabilityData.dimension == dimension) {
				array.push(capabilityData.title)
			}
		}

		// apply filter

		return array
	}

	function getValues(dimension) {
		let array = []

		for (const [id, capabilityData] of Object.entries(capabilites)) {
			if (capabilityData.dimension == dimension) {
				array.push(Number(userInput[id].isValue))
			}
		}

		// apply filter

		return array
	}

</script>

<div id="auswertung">

	<ExportButton data={userInput}/>

	{#each Object.keys(dimensionDescriptions) as dimension}
	
	<EvaluationChart dimension={dimension} labels={getLabels(dimension)} values={getValues(dimension)} average={averages[dimension]}/>

	<EvaluationDataTable dimension={dimension}/>

	{/each}

	<ExportButton data={userInput}/>

</div>