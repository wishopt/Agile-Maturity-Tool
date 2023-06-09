<script>
    import { writeXLSX } from "xlsx";
    import * as XLSX from 'xlsx'
    import UserInfo from "./UserInfo.svelte"
    import { ui, emptyUserData, emptyUserInfo } from "./stores/constants"
    import dataManager from "./dataManager";

    export let appConfig

    let text = $ui[appConfig.language].index
    let files
    let filetype
    let sheetNames = ["Capabilities", "User Info"]

    async function handleFileUpload(event) {
        const file = files[0]
        filetype = getFileType(file)
        const reader = new FileReader()

        reader.readAsBinaryString(file)
        reader.onload = function () {
            importData(reader.result)
        }
    }

    function getFileType(file) {
        return file.name.split('.').pop()
    }

    function importData(data) {
        if (filetype == "csv") {
            importCSV(data)
        } else if (filetype == "xlsx") {
            importXLSX(data)
        } else {
            alert("The import must be a .csv or .xlsx file")
        }
    }

    function importXLSX(data) {
        let newUserInput = $emptyUserData
        let workbook = XLSX.read(data, {type: "binary"})
        const inputData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
        for (const capability of inputData) {
            let id = capability.ID
            newUserInput[id].explanation = capability["Comments"]
            newUserInput[id].isValue = capability["Is Value"]
            newUserInput[id].shouldValue = capability["Should Value"]
            newUserInput[id].notRelevant = capability["Not Relevant"]
        }
        
        dataManager.saveToLocalStorage("dataUserInput", newUserInput)
        location.reload()
    }

    function importCSV(data) {
        let newUserInput = $emptyUserData
        let newUserInfo = $emptyUserInfo
        let workbook = XLSX.read(data, {type: "binary"})
        const inputData = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"])
        newUserInfo.company = inputData[0].Firma
        newUserInfo.department = inputData[0].Bereich
        newUserInfo.project = inputData[0].Projekt

        for (const row of inputData) {
            if (row.Begruendung) {
                newUserInput[row.Capability].explanation = row.Begruendung
            }
            if (row.Bewertung) {
                newUserInput[row.Capability].isValue = row.Bewertung
            }
        }

        dataManager.saveToLocalStorage("dataUserInput", newUserInput)
        dataManager.saveToLocalStorage("dataUserInfo", newUserInfo)
        location.reload()
    }

    function deleteLocalStorage() {
        localStorage.clear()
        location.reload()
    }


</script>

<form on:submit|preventDefault={handleFileUpload}>

    <div class="import">
        <p>{text.import}</p>
        <input type="file" id="file-selector" accept=".csv, .xlsx" bind:files>
        <button type="submit">Upload</button>
    </div>

</form>

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

    .import {
        border-width: 1px;
        padding: none;
        margin: auto;
        margin-bottom: 2em;
        background-color: #bbf5b6;
        width: 30%;
    }

    .import > p {
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