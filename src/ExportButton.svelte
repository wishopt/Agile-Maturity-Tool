<script>
    import { ui, capabilityList, emptyUserInfo, defaultPresets } from './stores/constants'
    import dataManager from './dataManager'
    import * as XLSX from 'xlsx'
    import JSZip from 'jszip'
	import FileSaver from 'file-saver'
    import App from './App.svelte';

    export let data
    export let images
    export let appConfig

	const zip = new JSZip()
	const img = zip.folder("images")

    let capabilityInfo = $capabilityList[appConfig.language]
    let userInfo
    let presetData
    let customFilter

    try {
        presetData = dataManager.loadFromLocalStorage("dataUserPresets")
    } catch (error) {
        presetData = $defaultPresets
    } 

    try {
        customFilter = dataManager.loadFromLocalStorage("dataUserFilters")
    } catch (error) {
        customFilter = {}
    }

    try {
        userInfo = dataManager.loadFromLocalStorage("dataUserInfo")
    } catch (error) {
        console.log(error)
        userInfo = $emptyUserInfo
    }

	function getCurrentDate() {
		const date = new Date()

		let day = date.getDate()
		let month = date.getMonth() + 1
		let year = date.getFullYear()

		return `${year}${month}${day}`
	}

    function transformUserInfo(data) {
        let newUserInfo = [ ]
        let row = {}

        for (const [key, value] of Object.entries(data)) {
            row[key] = value    
        }
        row["selectedPreset"] = appConfig.selectedPreset

        newUserInfo.push(row)

        return newUserInfo
    }

    function transformPresetData(data) {
        let newPresetData = [ ]
        let length = Object.keys(data.IT).length
        let titles = Object.keys(data)

        for (let i = 0; i < length; i++) {
            let row = { }
            for (preset of titles) {
                let obj = { }
                obj[preset] = Object.values(data[preset])[i]
                row = Object.assign({}, row, obj)
            }
            newPresetData.push(row)
        }

        return newPresetData
    }

    function transformCustomFilter(data) {
        let newCustomFilter = data["Custom Filter"]
        if (newCustomFilter === undefined) {
            newCustomFilter = []
        }

        let transformedData = []
        let row = {}
        for (capability of newCustomFilter) {
            row = {"Capability": capability}
            
            transformedData.push(row)
        }

        return transformedData
    }

    function createDownload(data) {
        let workbook = createXSLX(data)
        zip.file("export.xlsx", workbook, {base64: true})

        for (const [dimension, base64] of Object.entries(images)) {
            img.file(`${dimension}.png`, base64, {base64: true})
        }
        
        zip.generateAsync({type:"blob"}).then(function(content) {
            saveAs(content, "example.zip")
        })
    }

    function transformData(data) {

        // TODO: Validate input

        /*
        Expected format by SheetJS: 
        [
            { Column1: "Row1 Cell1", Column2: "Row1 Cell2" },
            { Column1: "Row2 Cell1", Column2: "Row2 Cell2" },
            ...
        ]
        */

        let transformedData = []
        let row = {}
        
        for (const [id, capabilityData] of Object.entries(data)) {
            try {
                row = {
                    ID: `${id}`,
                    Dimension: `${capabilityInfo[id].dimension}`,
                    Capability: `${capabilityInfo[id].title}`,
                    Description: `${capabilityInfo[id].description}`,
                    "Should Value": `${capabilityData.shouldValue}`,
                    "Is Value": `${capabilityData.isValue}`,
                    "In Filter": `${capabilityData.inFilter}`,
                    Comments: `${capabilityData.explanation}`
                }
            } catch (error) {
                console.log(error)
            }
            
            transformedData.push(row)
        }

        return transformedData
    }

    function createXSLX(data) {
        let transformedData = transformData(data)

        const workbook = XLSX.utils.book_new()
        const worksheetData = XLSX.utils.json_to_sheet(transformedData)
        const worksheetUserInfo = XLSX.utils.json_to_sheet(transformUserInfo(userInfo))
        const worksheetPresetData = XLSX.utils.json_to_sheet(transformPresetData(presetData))
        const worksheetCustomFilter = XLSX.utils.json_to_sheet(transformCustomFilter(customFilter))
        XLSX.utils.book_append_sheet(workbook, worksheetData, "Capabilities")
        XLSX.utils.book_append_sheet(workbook, worksheetUserInfo, "User Info")
        XLSX.utils.book_append_sheet(workbook, worksheetPresetData, "Presets")
        XLSX.utils.book_append_sheet(workbook, worksheetCustomFilter, "Custom Filter")

        return XLSX.write(workbook, {bookType: "xlsx", type: "base64"})
    }

</script>

<button on:click={createDownload(data)}>{$ui[appConfig.language].exportButton.button}</button>