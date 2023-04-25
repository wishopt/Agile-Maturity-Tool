<script>

    import { onMount } from 'svelte'
	import { CSVDownloader } from 'svelte-csv'
	import { emptyUserInfo, emptyUserData } from "./stores/constants"
	import EvaluationChart from './EvaluationChart.svelte'
    import EvaluationDataTable from './EvaluationDataTable.svelte';
	import dataManager from './dataManager'

	let userInfo
	let userInput	
	let schlussfolgerung = { }
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

	function prepareForCsvConversion(jsObject) {
		let newObject = []
		newObject.push({Capability: "", Bewertung: "", Begruendung: "", Firma: userInfo.company, Bereich: userInfo.department, Projekt: userInfo.project, Beschreibung: userInfo.description.replace(/(\r\n|\n|\r)/gm, ""), Dimension: "", Schlussfolgerung: ""})
		for (const [keyDimension, valueCapability] of Object.entries(userInput)) {
			for (const [keyCapability, capabilityValues] of Object.entries(valueCapability)) {
				let capabilityData = {Capability: keyCapability, Bewertung: capabilityValues.value, Begruendung: capabilityValues.explanation.replace(/(\r\n|\n|\r)/gm, ""), Firma: "", Bereich: "", Projekt: "", Beschreibung: ""}
				newObject.push(capabilityData)
			}

			let neueSchlussfolgerung = {Capability: "", Bewertung: "", Begruendung: "", Firma: "", Bereich: "", Projekt: "", Beschreibung: "", Dimension: keyDimension, Schlussfolgerung: schlussfolgerung.keyDimension}
			newObject.push(neueSchlussfolgerung)

		}

		return newObject
	}

	function getCurrentDate() {
		const date = new Date()

		let day = date.getDate()
		let month = date.getMonth() + 1
		let year = date.getFullYear()

		return `${year}${month}${day}`
	}

</script>

<div id="auswertung">

	<CSVDownloader
	data={prepareForCsvConversion(userInput)}
	type={'button'}
	filename={`Export_Agile_Maturity_${getCurrentDate()}`}
	bom={true}>
	Export Results
  	</CSVDownloader>

	{#each Object.entries(userInput) as [dimension, capabilites]}
	
	<EvaluationChart dimension={dimension} averages={averages}/>

	<EvaluationDataTable capabilites={capabilites} dimension={dimension}/>

	{/each}

	<CSVDownloader
	data={prepareForCsvConversion(userInput)}
	type={'button'}
	filename={`Export_Agile_Maturity_${getCurrentDate()}`}
	bom={true}>
	Export Results
  	</CSVDownloader>

</div>