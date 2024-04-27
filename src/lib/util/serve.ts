import { writable} from "svelte/store";
export let todo_arr = writable([{id:0,difficulty : '10',description : 'Wake Up'}]);
export let toggle_value = writable('');
export let id = writable(0);