<script lang="ts">
    import Button from "./button.svelte";
    import Inputbox from "./inputbox.svelte";
    import Collapsible from "./collapsible.svelte";
</script>

<div style="background-color: white;" class="h-52 w-5/12 min-w-40 rounded-xl mt-8 mx-auto font-poppins">
    <div class=" max-w-fit text-wrap ml-auto mr-auto mt-2  h-1">How would you rate your activity priority?</div>
    <nav class="font-extralight w-full text-center m-0">
        <p class="font-extralight w-full ml-auto mr-auto mt-2 p-4">From 1 -10</p>
        <div class=" w-full">
        <Button/>
        </div>
    </nav>
    <Inputbox/>
</div>
<Collapsible/>