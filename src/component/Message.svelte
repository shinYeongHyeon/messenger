<script>
    import { messages } from '../stores/stores';
</script>

{ #each $messages as message }
    <div class="flex mb-2">
        <div class="flex-initial p-2 rounded-md bg-gray-50 bg-opacity-50">
            { message.messageValue }
        </div>
        <div class="flex items-end text-xs ml-1">{ message.datetime }</div>
    </div>
{ /each }


