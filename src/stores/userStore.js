import { writable } from 'svelte/store';
import { signUp } from '../lib/httpClient';


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
  let result = null;
  try {
    result = await signUp({ userName, mobilePhone });
  } catch (errorMsg) {
    console.error(errorMsg);
    throw new Error(errorMsg);
  }
  if (result.status === 200) { // for test
    userUnLoggedInCredential.set({ userName, mobilePhone });
  }
  
  return Promise.resolve(result);
}

export async function registrate({ userName, mobilePhone, company }) {
  userUnLoggedInCredential.set({ userName, mobilePhone, company });
}

export async function confirmation({ code }) {
  isUserLoggedIn.set(!!code);
  localStorage.setItem('isUserLoggedIn', !!code);
}


