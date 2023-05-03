<script>
    import { onMount } from 'svelte'
    import { emptyUserData, capabilityList, dimensionDesc } from './stores/constants';
    import { Chart } from 'chart.js/dist/chart';
    import dataManager from './dataManager';

    export let chartData
	export let images

    let ctx
	let chart

    try {
		  userInput = dataManager.loadFromLocalStorage("dataUserInput")
	  } catch (error) {
		  console.log(error)
		  userInfo = $emptyUserData
	  }

	let generatePNG = function () {
		images[chartData.title] = chart.toBase64Image().replace(/^data:image\/(png|jpg);base64,/, "")
	}

    let config = {
		type: 'radar',
		data: { 
			labels: chartData.labels,
			datasets: [{
					label: "is Value",
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 0.6)',
					data: chartData.isValues
				},
				{
					label: "should Value",
					backgroundColor: 'rgba(15, 58, 128, 0.2)',
					borderColor: 'rgba(15, 58, 128, 0.6)',
					data: chartData.shouldValues
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
      			onComplete: generatePNG,
    		},
		},
	}

    onMount(async (promise) => {
		updateChart()
	})	

    function updateChart() {
        ctx = document.getElementById("chart-" + chartData.title.replace(/\s+/g, '')).getContext("2d")

        chart = new Chart(ctx, config)
        chart.update()
    }

</script>

<h2>{chartData.title}</h2>
<div class="chart">
    <canvas id="chart-{chartData.title.replace(/\s+/g, '')}"></canvas>
</div>

<style>
	.chart {
		width: 100%;
		height: 40em;
		margin: auto;
		margin-bottom: 4em;
	}
</style>