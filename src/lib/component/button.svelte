<script lang="ts">
	import { toggle_value } from '$lib/util/serve';
	import { range } from '$lib/util/range';
	import { ToggleGroup } from 'bits-ui';
</script>

<ToggleGroup.Root bind:value={$toggle_value} type="single" class="table w-full " >
	{#each range(0, 11, 1) as i}
		<ToggleGroup.Item
			value={i.toString()}
			class="h-9 w-9 table-cell rounded-full m-1 bg-btn-released-color text-base hover:bg-btn-hover-color
         data-[disabled]:cursor-pointer data-[state=on]:bg-btn-pressed-color"
			>{i}
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
