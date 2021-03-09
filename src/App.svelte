<script lang="ts">
	import Chat from './component/Chat.svelte';
	import MessageInput from './component/MessageInput.svelte';
	import Login from './component/Login.svelte';
	import { logon } from './stores/stores';
</script>

<main>

	{ #if $logon.isLogon }
		<div class="min-w-max h-screen flex flex-col p-2 pb-2 bg-gradient-to-br from-blue-300 to-purple-300">
			<Chat />
			<MessageInput />
		</div>
	{ :else }
		<Login />
	{ /if }
</main>