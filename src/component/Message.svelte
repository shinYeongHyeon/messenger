<script>
    export let message;
    export let datetime;
</script>

<div class="flex mb-2">
    <div class="flex-initial p-2 rounded-md bg-gray-50 bg-opacity-50">
        { message }
    </div>
    <div class="flex items-end text-xs ml-1">{ datetime }</div>
</div>