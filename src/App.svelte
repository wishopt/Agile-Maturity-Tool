<script>

	import { onMount } from 'svelte'
	import { navOptions } from "./Nav.svelte"
	import { ui } from "./stores/constants"
    import dataManager from './dataManager';

	let appConfig = {
		hideCustomFilter: true,
		language: "de",
		currentFilter: [],
		checkedFilters: {
			'Strategy & Purpose': true,
  			Structure: true,
  			Process: true,
		  	IT: true,
			People: true,
  			'Customer-Centric Product Development': true,
  			Leadership: true,
			Adaptability: false,
			'CI-CD': false,
			Collaboration: false,
			Communication: false,
			'Customer Focus': false,
			Efficiency: false,
			Innovation: false,
			'Knowledge Management': false,
			'Organizational and Management Structures': false,
			'Custom Filter': true
		},
	}
	let text 
	$: text = $ui[appConfig.language].main
	let buttonText
    let selected = navOptions[0]
    let currentNav = 0
    let buttonHidden = false

	function changeComponent(event) {
        let index = Number(event.target.id)
        buttonText = "Next"
        buttonHidden = false
        if (index == 2) {
            buttonHidden = true
        } 
        if (index < 3) {
            currentNav = index
            selected = navOptions[event.srcElement.id];
        }
		unique = {}
	}

	function changeLanguage() {
		if (appConfig.language == "en") {
			appConfig.language = "de"
		} else if (appConfig.language == "de") {
			appConfig.language = "en"
		}
	}

</script>

<main>
	<img src="bei.png" alt="BEI Logo" id="logo">
	<h1>Agile Maturity Tool</h1>
	<div>
		<div id="languageSwitch">
			<span class="lang">DE</span>
			<label class="switch" on:change={changeLanguage}>
				<input type="checkbox">
				<span class="slider round"></span>
			</label>
			<span class="lang"> EN</span>
		</div>

		<ul>
			{#each navOptions as option, componentId}
			<li>
				<button on:click={changeComponent} id={String(componentId)} role="tab">{text.nav[option.page]}</button>
			</li>
			{/each}
		</ul>

		{#if currentNav != 0}
		<!-- <button id="hide" on:click={toggleHidden}>{text.hideButton}</button> -->
		{/if}
		
		<div class="page">
			<h2>{text.nav[selected.page]}</h2>
			<svelte:component this={selected.component} bind:appConfig/>
		</div>
		
		{#if !buttonHidden}
		<button on:click={changeComponent} id={currentNav+1}>{text.next}</button>
		{/if}
	</div>

	© BEI 2023
</main>

<style>

	#logo {
		position: absolute;
        top: 0px;
        right: 0px;
		width: 10%;
		margin-top: 1em;
		margin-right: 1em;
	}

	#hide {
		margin-left: 2.4em;
	}

	#languageSwitch {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.5em;
	}

	.lang {
		padding: 0.5em;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #0f8015;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin-bottom: 0.5em;
	}

	li {
		display: inline-flex;
	}

	button {
		width: 200px;
		padding: 15px;
		margin: 5px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

    button {
        cursor: pointer;
    }

	.switch {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
	}

	.switch input {
	opacity: 0;
	width: 0;
	height: 0;
	}

	.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: .4s;
	transition: .4s;
	}

	.slider:before {
	position: absolute;
	content: "";
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: white;
	-webkit-transition: .4s;
	transition: .4s;
	}

	input:checked + .slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
	}

	.slider.round {
	border-radius: 34px;
	}

	.slider.round:before {
	border-radius: 50%;
	} 

</style>