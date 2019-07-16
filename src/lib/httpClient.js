import axios from 'axios';


export async function signUp({ userName, mobilePhone }) {
  let result = null;
  try {
    result = await axios('http://localhost:9000/signUp', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { userName, mobilePhone },
    })
  } catch (error) {
    throw new Error(error.message)
  }
  
  return result;
}

