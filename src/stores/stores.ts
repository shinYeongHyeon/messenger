import { writable } from 'svelte/store';

export const messages = writable([]);
export const socket = new WebSocket('ws://localhost:8081');
