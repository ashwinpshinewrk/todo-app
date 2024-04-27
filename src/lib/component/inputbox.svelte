<script lang="ts">
    import { id, todo_arr, toggle_value } from "$lib/util/serve";
    let  description : string;

    function handleSubmit(){
        $todo_arr = [...$todo_arr,{id:$id,difficulty : $toggle_value,description:description}];
        $id = $todo_arr.length - 1;
        description = ''
    }
</script>

<div class="w-10/12 m-auto flex justify-center mt-7 border-2 h-10 rounded-md text-input-text-color p-0.5" >
    <input type="text" id="todo" bind:value={description} placeholder="Make my bed."
    class=" w-10/12 active:outline-none focus:outline-none"/>
    <button type="submit" on:click={handleSubmit}  class=" w-1/6 bg-input-box rounded-l hover:bg-btn-released-color">Send</button>
</div>