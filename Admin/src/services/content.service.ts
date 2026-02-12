import api from './api';
import type { ContentBlock } from '../types/content';

export const getContentBlocks = async (): Promise<ContentBlock[]> => {
  const { data } = await api.get('/api/admin/content');
  return data;
};

export const getContentBlock = async (key: string): Promise<ContentBlock> => {
  const { data } = await api.get(`/api/admin/content/${key}`);
  return data;
};

export const updateContentBlock = async (key: string, value: string): Promise<ContentBlock> => {
  const { data } = await api.put(`/api/admin/content/${key}`, { value });
  return data;
};
