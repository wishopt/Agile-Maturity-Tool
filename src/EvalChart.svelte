<script>

    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto/auto.js';
	import { CSVDownloader } from 'svelte-csv';
	import { capabilityList, defaultCompanyInfo } from "./stores/constants"

    export let input

	let inputFirmenInfo = $defaultCompanyInfo

	let localStorageFirmenInfo = JSON.parse(localStorage.getItem("firmenInfo_en"))

	if (localStorageFirmenInfo == null) {

	} else {
		inputFirmenInfo = localStorageFirmenInfo
	}

	let schlussfolgerung = { }

	let config = {
		type: 'radar',
		data: { 
			labels: Object.keys(input["Strategy & Purpose"]), // remove hardcode
			datasets: [{
				label: "Strategy and Purpose", // remove hardcode
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 0.6)',
				data: Object.values(input["Strategy & Purpose"])
				}],
			},
		options: {
			scale: {
				ticks: {
					stepSize: 1
				},
				r: {
					min: 0,
					max: 5,
				}
			},
			maintainAspectRatio: false
		},
	};

	
	let ctx;
	let chart;
	let dividend;
	let divisor;
	let average;
	let averages = [];

	onMount(async (promise) => {
		updateChart()
		getAverages()
	});	

	function round(value, precision) {
		var multiplier = Math.pow(10, precision || 0);
		return Math.round(value * multiplier) / multiplier;
	}

	function updateData(dimension) {
		let newConfig = {}
		let newData = []

		for (const [title, dataPoint] of Object.entries(input[dimension])) {
			newData.push(dataPoint.value)
		}

		let labels = []

		for (let capabilityID in $capabilityList[dimension]) {
			labels.push($capabilityList[dimension][capabilityID].title)
		}

		console.log(labels)

		newConfig.labels = (labels)
		newConfig.datasets = [{
			label: dimension,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 0.6)',
			data: newData
		}]
		return newConfig
	}
	
	function updateChart() {
		for (let dimension in input) {
			ctx = document.getElementById("chart-" + dimension.replace(/\s+/g, '')).getContext("2d")
			config.data = updateData(dimension)

			chart = new Chart(ctx, config)
			chart.update()
		}
	}

	function getAverages() {
		for (let dimension in input) {
			dividend = 0
			divisor = Number(Object.keys(input[dimension]).length)
			average = 0
			
			for (let capability in input[dimension]) {
				dividend += Number(input[dimension][capability].value)
			}

			averages[dimension] = round(dividend/(divisor*1.0), 1)
		}
	}

	function prepareForCsvConversion(jsObject) {
		let newObject = []
		newObject.push({Capability: "", Bewertung: "", Begruendung: "", Firma: inputFirmenInfo.unternehmen, Bereich: inputFirmenInfo.bereich, Projekt: inputFirmenInfo.projekt, Beschreibung: inputFirmenInfo.beschreibung.replace(/(\r\n|\n|\r)/gm, ""), Dimension: "", Schlussfolgerung: ""})
		for (const [keyDimension, valueCapability] of Object.entries(input)) {
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
	data={prepareForCsvConversion(input)}
	type={'button'}
	filename={`Export_Agile_Maturity_${getCurrentDate()}`}
	bom={true}>
	Export Results
  	</CSVDownloader>

	{#each Object.entries(input) as [dimension, capabilites]}
	
	<h2>{dimension}</h2>
	<div class="chart">
		<canvas id="chart-{dimension.replace(/\s+/g, '')}"></canvas>
		<p>Average: {averages[dimension]}</p>
	</div>

	<table>
		<tr>
			<th class="middle">
				ID
			</th>
			<th class="left">
				Capability
			</th>
			<th class="middle">Value</th>
			<th class="right">
				Comment
			</th>
		</tr>
	{#each Object.entries(capabilites) as [capability_id, data]}

			<tr>
				<td class="middle">
					{capability_id}
				</td>
				<td class="left">
					{$capabilityList[dimension][capability_id].title}
				</td>
				<td class="middle">
					{data.value}
				</td>
				<td class="right">
					{data.explanation}
				</td>
			</tr>
		
	{/each}
	</table>

	{/each}

	<CSVDownloader
	data={prepareForCsvConversion(input)}
	type={'button'}
	filename={`Export_Agile_Maturity_${getCurrentDate()}`}
	bom={true}>
	Export Results
  	</CSVDownloader>

</div>

<style>
	.middle {
		width: 3%;
	}

	.left {
		width: 17%;
	}

	.right {
		width: 27%;
	}

	table, th, td {
		border: 1px solid;
	}

	table {
		font-size: smaller;
		border-collapse: collapse;
		width: 50%;
		margin: auto;
		margin-bottom: 3em;
	}

	.chart {
		width: 100%;
		height: 40em;
		margin: auto;
		margin-bottom: 4em;
	}


</style>