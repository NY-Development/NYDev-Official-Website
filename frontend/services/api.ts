export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiGet = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error('Request failed');
  }
  return response.json() as Promise<T>;
};
