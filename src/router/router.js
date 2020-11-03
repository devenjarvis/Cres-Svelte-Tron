import { writable } from 'svelte/store'

function createRouter() {
	const { subscribe, set } = writable('/');

	return {
		subscribe,
		navigate: (path) => {
            window.history.pushState(null, null, path);
            set(path)
        }
	};
}

export const path = createRouter();
