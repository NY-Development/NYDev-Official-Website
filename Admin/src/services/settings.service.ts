import api from './api';
import type { Settings } from '../types/settings';

export const getSettings = async (): Promise<Settings> => {
  const { data } = await api.get('/api/admin/settings');
  return data;
};

export const updateSettings = async (payload: Settings): Promise<Settings> => {
  const { data } = await api.put('/api/admin/settings', payload);
  return data;
};
