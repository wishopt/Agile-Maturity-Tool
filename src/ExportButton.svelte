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
        
        for (const [id, capabilityData] of Object.entries(data)) {
            try {
                row = {
                    ID: `${id}`,
                    Dimension: `${capabilityInfo[id].dimension}`,
                    Capability: `${capabilityInfo[id].title}`,
                    Description: `${capabilityInfo[id].description}`,
                    "Should Value": `${capabilityData.shouldValue}`,
                    "Is Value": `${capabilityData.isValue}`,
                    "Not Relevant": `${capabilityData.notRelevant}`,
                    Comments: `${capabilityData.explanation}`
                }
            } catch (error) {
                console.log(error)
            }
            
            transformedData.push(row)
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