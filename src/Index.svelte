<script>
    import UserInfo from "./UserInfo.svelte"
    import { ui } from "./stores/constants"

    export let appConfig

    let text = $ui[appConfig.language].index

    function deleteLocalStorage() {
        localStorage.clear()
        location.reload()
}

</script>

<UserInfo appConfig={appConfig}/>

<p>{@html text.intro}</p>

<div class="delete">
    <p>{text.deleteButtonText}</p>
    <button on:click={deleteLocalStorage}><b>{text.deleteButton}</b></button>
</div>


<style>
    
    .delete {
        border: solid;
        border-width: 1px;
        padding: none;
        margin: auto;
        margin-bottom: 2em;
        background-color: #fceaea;
        width: 70%;
    }

    .delete > p {
        margin: none;
        margin-top: 1em;
        width: 100%;
        text-align: center;
    }

    p, ul {
        width: 70%;
        margin: auto;
        margin-bottom: 20px;
        text-align: left;
    }

</style>