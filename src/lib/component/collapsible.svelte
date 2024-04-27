<script lang="ts">
	import { todo_arr } from '$lib/util/serve';
	import { Collapsible } from 'bits-ui';
	let avg = 0;

	function delete_member(id:number){
		$todo_arr = $todo_arr.splice(id)
	}
</script>

<Collapsible.Root class="h-fit w-5/12 min-w-40 mx-auto top-4 font-poppins">
	<div class="gap-1 relative">
		<h4 class="w-full absolute text-[15px] p-3 font-medium text-white flex items-start z-0">Total : {$todo_arr.length}</h4>
		<h4 class="text-[15px] p-3 font-medium text-white z-1 flex justify-center">Click ? to expand todo list</h4>
	</div>
		<Collapsible.Trigger
			class=" m-2 h-8 w-8 flex items-center justify-center rounded-9px border border-border-input text-white shadow-btn transition-all hover:bg-muted active:scale-98"
		>
            <h1 class="font-extrabold">?</h1>
            <span class="sr-only">Toggle</span>
        </Collapsible.Trigger>
		{#each $todo_arr as data}
		<div class="w-full">
			<Collapsible.Content class=" relative h-10 w-full bg-white rounded-2xl my-6">
				<h5 class=" bg-btn-pressed-color flex justify-center items-center rounded-full absolute w-6  h-6 z-0 ">{data.difficulty == '' || data.difficulty == undefined ? '0': data.difficulty}</h5>
				<h3 class="flex justify-center items-center h-full w-full z-10">{data.description}</h3>
				<button on:click={function(){
					$todo_arr = [...$todo_arr.slice(0,data.id), ...$todo_arr.slice(data.id + 1)]
					for(let i = 0;i < $todo_arr.length;i++){
						$todo_arr[i].id = i;
					}
					console.log($todo_arr)
				}} class="bg-btn-pressed-color flex justify-center items-center rounded-full absolute w-6  h-6 z-0 left-full bottom-4">x</button>
			</Collapsible.Content>
		</div>
		{/each}
	</Collapsible.Root
>
