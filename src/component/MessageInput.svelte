<script>
  import { messages, socket } from '../stores/stores';
  import { dayJs } from '../stores/dayjs';

  let messageValue = '';

  function sendMessage() {
    socket.send(JSON.stringify({
      text: messageValue,
    }));



    messageValue = '';
  }

  socket.onmessage = function (e) {
    const receivedData = JSON.parse(e.data);

    $messages = [...$messages, {
      messageValue: receivedData.text,
      datetime: dayJs(),
    }];
  }

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    }
  }
</script>

<div class="h-20 rounded-md flex flex-row bg-white p-1">
    <label class="flex-grow mr-2">
        <textarea
                class="w-full h-full resize-none focus:outline-none"
                bind:value={ messageValue }
                on:keydown={ onKeyDown }
        ></textarea>
    </label>
    <button
            class="w-16 bg-gray-100 rounded-lg text-sm font-semibold"
            on:click={ sendMessage }
    >전&nbsp;송</button>
</div>