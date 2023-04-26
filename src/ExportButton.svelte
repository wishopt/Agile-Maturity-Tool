<script>
    import * as XLSX from 'xlsx'
    import { capabilityList } from './stores/constants';

    export let data
    let capabilityInfo = $capabilityList

	function getCurrentDate() {
		const date = new Date()

		let day = date.getDate()
		let month = date.getMonth() + 1
		let year = date.getFullYear()

		return `${year}${month}${day}`
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
        
        for (const [dimension, capabilities] of Object.entries(data)) {
            for (const [id, values] of Object.entries(capabilities)) {
                try {
                    row = {
                    Dimension: `${dimension}`,
                    Capability: `${capabilityInfo[dimension][id].title}`,
                    Description: `${capabilityInfo[dimension][id].description}`,
                    "Should Value": `${values["should-value"]}`,
                    "Is Value": `${values["value"]}`,
                    Relevance: `${values["relevance"]}`,
                    Comments: `${values["explanation"]}`
                }
                } catch (error) {
                    console.log(error)
                }
                
                transformedData.push(row)
            }
        }

        return transformedData
    }

    function createExport(data) {
        let transformedData = transformData(data)

        const workbook = XLSX.utils.book_new()
        const worksheet = XLSX.utils.json_to_sheet(transformedData)
        XLSX.utils.book_append_sheet(workbook, worksheet, "Capabilities")  
        XLSX.writeFile(workbook, `Export_Agile_Maturity_${getCurrentDate()}.xlsx`, { compression: true })
    }
</script>

<button on:click={createExport(data)}>Export Results</button>