<script>
  import { messages } from '../stores/stores';

  let messageValue = '';

  function sendMessage() {
    $messages = [...$messages, {
      messageValue,
      datetime: new Date(),
    }]

    messageValue = '';
  }
</script>

<div class="h-20 rounded-md flex flex-row bg-white p-1">
    <label class="flex-grow mr-2">
        <textarea
                class="w-full h-full resize-none focus:outline-none"
                bind:value={ messageValue }
        ></textarea>
    </label>
    <button
            class="w-16 bg-gray-100 rounded-lg text-sm font-semibold"
            on:click={ sendMessage }
    >전&nbsp;송</button>
</div>