<script>

	import { onMount } from 'svelte'
	import { navOptions } from "./Nav.svelte"
	import { emptyUserData } from "./stores/constants"
    import dataManager from './dataManager';

	let userInput = $emptyUserData
    let selected = navOptions[0]
    let currentNav = 0
    let buttonText = "Next"
    let buttonHidden = false

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
	}

</script>

<main>
	<h1>Agile Maturity Tool - Demo</h1>
	<div>
		<ul>
			{#each navOptions as option, componentId}
			<li>
				<button on:click={changeComponent} id={String(componentId)} role="tab">{option.page}</button>
			</li>
			{/each}
		</ul>
		<div class="page">
			<h2>{selected.page}</h2>
			<svelte:component this={selected.component}/>
		</div>
	</div>
    	{#if !buttonHidden}
        <button on:click={changeComponent} id={currentNav+1}>{buttonText}</button>
    	{/if}
</main>

<style>

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

</style>