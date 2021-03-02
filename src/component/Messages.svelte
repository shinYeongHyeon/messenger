<script>
  import { messages } from '../stores/stores';
  import Message from './Message.svelte';
</script>

{ #each $messages as message }
    <Message
            message={ message.messageValue }
            datetime={ message.datetime }
    />
{ /each }


