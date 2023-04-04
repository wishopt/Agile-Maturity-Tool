<script>
    function deleteLocalStorage() {
        localStorage.clear()
        location.reload()
}

</script>

<p>Welcome to the demo page of the Agile Maturity Tool!</p>

<p>This is a demo version of the tool to illustrate the functionality. The tool is still under development, which is why the visual aspects of the tool are not yet fully developed.<p>



<p>
The agile maturity model was developed in Competence Centre 08 and 09. The aim is to assess the maturity level of agile skills, to derive the agile maturity level of the company and to provide indicative recommendations for action to build up skills. 
</p>

<p>The model includes the following artefacts:</p>
<ul>
    <li>The <b>Agile Maturity Grid</b> provides an overview of necessary agile capabilities including a description and a mapping to the associated agility dimension</li>
    <li>The benefit of the <b>Quick Check</b> lies in the quick assessment of the existing maturity level of the corresponding agile capabilities as well as an indication of the agile maturity level of the company</li>
    <li>The <b>Tool</b> serves to complement the first two artefacts and allows users to make indicative recommendations for action to improve the agile capabilities and thus the agile maturity of the company</li>
    <li>The <b>Tool</b> serves to complement the first two artefacts and allows users to make indicative recommendations for action to improve the agile capabilities and thus the agile maturity of the company</li>
</ul>

<p>All three artefacts can be applied to different areas of the company. The prerequisite for this is that the business unit in question is at the beginning or in the middle of an agile transformation. The model should be completed by a representative number of employees. It should be noted that different departments and hierarchical levels are also taken into account in order to contain as realistic an estimate as possible of the extent to which the agile skills listed are being implemented.</p>


<div class="delete">
    <p>If you've already tested a previous version of the tool in the same browser, the existing data in the local storage might break the tool. If this happens, you can click on the "Delete Data" button below.</p>
    <button on:click={deleteLocalStorage}><b>Delete Data</b></button>
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