// src/utils/logApiRequest.ts
import axios from 'axios';

export const logApiRequest = async (requestUrl: string) => {
  try {
    await axios.post('http://localhost:8080/api/logs', { requestUrl });
  } catch (error) {
    console.error('Error logging API request:', error);
  }
};
