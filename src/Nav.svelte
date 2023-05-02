<script context="module">
// from https://svelte.dev/repl/ca6de655755d4ae88c4c6cbf60f85fda?version=3.23.0

// main navigation for the application
import Index from './Index.svelte';
import UserInput from './UserInput.svelte';
import Evaluation from './Evalutation.svelte';

// these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
export const navOptions = [
	{ page: 'Welcome',   component: Index },
    { page: 'Input',   component: UserInput },
    { page: 'Evaluation',   component: Evaluation },
];

</script>