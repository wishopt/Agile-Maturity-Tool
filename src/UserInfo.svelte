
<script>
    import dataManager from "./dataManager";
    import { emptyUserInfo, ui } from "./stores/constants"

	export let appConfig

	let text = $ui[appConfig.language].userInfo

	let userInfo

	try {
		userInfo = dataManager.loadFromLocalStorage("dataUserInfo")
	} catch (error) {
		console.log(error)
		userInfo = $emptyUserInfo
	}

	function saveUserInfo() {
		dataManager.saveToLocalStorage("dataUserInfo", userInfo)
	}
</script>

<form id="firmenInfo">
	
	<label for="unternehmen">{text.company}</label>
	<input type="text" id="unternehmen" name="unternehmen" class="frontmatter" bind:value={userInfo.company} on:change={saveUserInfo}>

	<label for="bereich">{text.organisation}</label>
	<input type="text" id="bereich" name="bereich" class="frontmatter" bind:value={userInfo.department} on:change={saveUserInfo}>

	<label for="projekt">{text.project}</label>
	<input type="text" id="projekt" name="projekt" class="frontmatter" bind:value={userInfo.project} on:change={saveUserInfo}>


	<label for="beschreibung">{text.description}</label>
	<textarea id="beschreibung" name="beschreibung" class="frontmatter" bind:value={userInfo.description} on:change={saveUserInfo}></textarea>

</form>

<style>
	.frontmatter {
		width: 30%;
		margin: auto;
		margin-top: 0.5em;
		margin-bottom: 2em;
	}

</style>