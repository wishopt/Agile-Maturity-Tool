<script>

	import { onMount } from 'svelte'
	import { navOptions } from "./Nav.svelte"
	import { emptyUserData, ui } from "./stores/constants"
    import dataManager from './dataManager';

	let appConfig = {
		hideIrrelevant: false,
		language: "en"
	}
	let text 
	$: text = $ui[appConfig.language].main
	let buttonText
	let userInput = $emptyUserData
    let selected = navOptions[0]
    let currentNav = 0
    let buttonHidden = false
	let unique = {}

    onMount(async () => {
		try {
			userInput = dataManager.loadFromLocalStorage("dataUserInput")
		} catch (error) {
			console.log(error)
			userInput = $emptyUserData
		}
    });	

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

	function toggleHidden() {
		appConfig.hideIrrelevant = !appConfig.hideIrrelevant
		unique = {}
	}

	function changeLanguage() {
		if (appConfig.language == "en") {
			appConfig.language = "de"
		} else if (appConfig.language == "de") {
			appConfig.language = "en"
		}
		unique = {}
	}

</script>

<main>
	<h1>Agile Maturity Tool - Demo</h1>
	<div>
		<div id="languageSwitch">
			<span class="lang">EN</span>
			<label class="switch" on:change={changeLanguage}>
				<input type="checkbox">
				<span class="slider round"></span>
			</label>
			<span class="lang"> DE</span>
		</div>

		{#key unique}
		<ul>
			{#each navOptions as option, componentId}
			<li>
				<button on:click={changeComponent} id={String(componentId)} role="tab">{text.nav[option.page]}</button>
			</li>
			{/each}
		</ul>

		{#if currentNav != 0}
		<button id="hide" on:click={toggleHidden}>{text.hideButton}</button>
		{/if}
		
		
		<div class="page">
			<h2>{text.nav[selected.page]}</h2>
			<svelte:component this={selected.component} bind:appConfig/>
		</div>
		
		{#if !buttonHidden}
		<button on:click={changeComponent} id={currentNav+1}>{text.next}</button>
		{/if}
		{/key}
	</div>
</main>

<style>

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