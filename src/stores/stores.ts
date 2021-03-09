import { writable } from 'svelte/store';

export const logon = writable({
    isLogon: false,
});
export const messages = writable([]);

export const socket = new WebSocket('ws://localhost:8080/room/1?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTc3MTQ0MzQsImlzcyI6IkxlYXJuaW5nU3Bvb25zIENoYXQiLCJ1aWQiOjF9.RywnzBnpVdj8wOJN2IaVDxNsRa510XuvdP8mr3xUDDU');
