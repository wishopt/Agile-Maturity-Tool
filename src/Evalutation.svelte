<script>

    import { onMount } from 'svelte'
	import { emptyUserInfo, emptyUserData } from "./stores/constants"
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
		for (let dimension in userInput) {
			dividend = 0
			divisor = Number(Object.keys(userInput[dimension]).length)
			average = 0
			
			for (let capability in userInput[dimension]) {
				dividend += Number(userInput[dimension][capability].value)
			}

			averages[dimension] = round(dividend/(divisor*1.0), 1)
		}
	}

</script>

<div id="auswertung">

	<ExportButton data={userInput}/>

	{#each Object.entries(userInput) as [dimension, capabilites]}
	
	<EvaluationChart dimension={dimension} averages={averages}/>

	<EvaluationDataTable capabilites={capabilites} dimension={dimension}/>

	{/each}

	<ExportButton data={userInput}/>

</div>