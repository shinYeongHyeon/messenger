<div class="flex flex-col min-w-full min-h-screen bg-gray-100 flex items-center justify-center">
    <span class="text-4xl font-black">Chat Service</span>
    <span class="text-xs font-semibold mb-20">(w/ Svelte, GoLang)</span>
    <div class="flex flex-col pr-20 pl-20 bg-gray-200 rounded-md shadow-2xl">
        <label for="id">
            <input
                    class="bg-gray-200 mt-10 rounded-sm p-2 text-center focus:outline-none"
                    id="id"
                    placeholder="Enter your ID"
            />
        </label>
        <label for="pw">
            <input
                    type="password"
                    class="mt-2 bg-gray-200 rounded-sm p-2 text-center focus:outline-none"
                    id="pw"
                    placeholder="Enter you Password."
            />
        </label>
        <button type="submit" class="mt-4 mb-10 bg-gray-700 rounded-2xl text-white text-lg p-2">LogOn</button>
    </div>
</div>