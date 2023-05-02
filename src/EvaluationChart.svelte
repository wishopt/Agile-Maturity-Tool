<script>
    import { onMount } from 'svelte'
    import { emptyUserData, capabilityList } from './stores/constants';
    import { Chart } from 'chart.js/dist/chart';
    import dataManager from './dataManager';

    export let dimension
    export let average
	export let labels
	export let isValues
	export let shouldValues
	export let images

    let ctx
	let chart

    try {
		userInput = dataManager.loadFromLocalStorage("dataUserInput")
	} catch (error) {
		console.log(error)
		userInfo = $emptyUserData
	}

    let config = {
		type: 'radar',
		data: { 
			labels: Object.keys(userInput[dimension]),
			datasets: [{
					label: "is Value",
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 0.6)',
					data: isValues
				},
				{
					label: "should Value",
					backgroundColor: 'rgba(15, 58, 128, 0.2)',
					borderColor: 'rgba(15, 58, 128, 0.6)',
					data: shouldValues
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
			maintainAspectRatio: false,
			animation: {
      			onComplete: function () {
        			images[dimension] = chart.toBase64Image();
      			},
    		},
		},
	}

    onMount(async (promise) => {
		updateChart()
	})	

    function updateChart() {
        ctx = document.getElementById("chart-" + dimension.replace(/\s+/g, '')).getContext("2d")
        config.data = updateData(dimension)

        chart = new Chart(ctx, config)
        chart.update()
    }

    function updateData(dimension) {
		let newConfig = {}
		let newData = []

		for (const [title, dataPoint] of Object.entries(userInput[dimension])) {
			newData.push(dataPoint.value)
		}

		let labels = []

		for (let capabilityID in $capabilityList[dimension]) {
			labels.push($capabilityList[dimension][capabilityID].title)
		}

		newConfig.labels = (labels)
		newConfig.datasets = [{
			label: dimension,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 0.6)',
			data: newData
		}]
		return newConfig
	}
</script>

<h2>{dimension}</h2>
<div class="chart">
    <canvas id="chart-{dimension.replace(/\s+/g, '')}"></canvas>
    <p>Average: {averages[dimension]}</p>
</div>

<style>
	.chart {
		width: 100%;
		height: 40em;
		margin: auto;
		margin-bottom: 4em;
	}
</style>