import axios from 'axios';


export async function signUp({ userName, mobilePhone }) {
  try {
    await axios.post('localhost:9000/signUp', { userName, mobilePhone })
  } catch (error) {
    console.error(error.message);
  }
}

