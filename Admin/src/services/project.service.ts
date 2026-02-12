import api from './api';
import type { Project } from '../types/project';

export const getProjects = async (): Promise<Project[]> => {
  const { data } = await api.get('/api/admin/projects');
  return data;
};

export const getProject = async (id: string): Promise<Project> => {
  const { data } = await api.get(`/api/admin/projects/${id}`);
  return data;
};

export const createProject = async (payload: Partial<Project>): Promise<Project> => {
  const { data } = await api.post('/api/admin/projects', payload);
  return data;
};

export const updateProject = async (id: string, payload: Partial<Project>): Promise<Project> => {
  const { data } = await api.put(`/api/admin/projects/${id}`, payload);
  return data;
};

export const deleteProject = async (id: string): Promise<void> => {
  await api.delete(`/api/admin/projects/${id}`);
};

export const toggleProjectStatus = async (id: string, status: Project['status']): Promise<Project> => {
  const { data } = await api.patch(`/api/admin/projects/${id}/status`, { status });
  return data;
};
