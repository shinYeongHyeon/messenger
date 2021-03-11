<script>
  import { API_URL } from '../api/constant';
  import { logon } from '../stores/stores';

  let id = '';
  let pwd = '';

  async function signUp() {
    await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        Username: id,
        Password: pwd,
      }),
    })
    .then(r => r.json())
    .then(function (data) {
      $logon.isLogon = true;
      $logon.token = data.token;
    })
  }

  async function loginIn() {
    await fetch(`${API_URL}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        Username: id,
        Password: pwd,
      }),
    })
      .then(r => r.json())
      .then(function (data) {
        $logon.isLogon = true;
        $logon.token = data.token;
      })
  }
</script>

<div class="flex flex-col min-w-full min-h-screen bg-gray-100 flex items-center justify-center">
    <span class="text-4xl font-black">Chat Service</span>
    <span class="text-xs font-semibold mb-20">(w/ Svelte, GoLang)</span>
    <div class="flex flex-col pr-20 pl-20 bg-gray-200 rounded-md shadow-2xl">
        <label for="id">
            <input
                    class="bg-gray-200 mt-10 rounded-sm p-2 text-center focus:outline-none"
                    id="id"
                    placeholder="Enter your ID"
                    bind:value={id}
            />
        </label>
        <label for="pw">
            <input
                    type="password"
                    class="mt-2 bg-gray-200 rounded-sm p-2 text-center focus:outline-none"
                    id="pw"
                    placeholder="Enter you Password."
                    bind:value={pwd}
            />
        </label>
        <button
                type="submit"
                class="mt-4 bg-gray-700 rounded-2xl text-white text-lg p-2"
                on:click={loginIn}
        >LogOn</button>
        <button
                type="submit"
                class="mt-2 mb-10 bg-green-700 rounded-2xl text-white text-lg p-2"
                on:click={signUp}
        >Sign Up</button>
    </div>
</div>