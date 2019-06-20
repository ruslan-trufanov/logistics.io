import { writable } from 'svelte/store';


export const isUserLoggedIn = writable(!!localStorage.getItem('isUserLoggedIn'));

export const userUnLoggedInCredential = writable({
  userName: '',
  mobilePhone: '',
  company: ''
});

export async function sendRequestProblem({ mobilePhone, message }) {
  // 2DO smth
}

export async function login({ userName, mobilePhone }) {
  userUnLoggedInCredential.set({ userName, mobilePhone });
}

export async function registrate({ userName, mobilePhone, company }) {
  userUnLoggedInCredential.set({ userName, mobilePhone, company });
}

export async function confirmation({ code }) {
  isUserLoggedIn.set(!!code);
  localStorage.setItem('isUserLoggedIn', !!code);
} 


