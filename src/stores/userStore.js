import { writable } from 'svelte/store';

export const isUserLoggedIn = writable(false);

export const userLoginCredential = writable({
  username: '',
  mobilePhone: ''
});

export async function login({ username, mobilePhone }) {
  userLoginCredential.set({ username, mobilePhone })
}

export async function confirmationLogin({ code }) {
  isUserLoggedIn.set(!!code);  
} 
