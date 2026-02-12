import api from './api';
import type { TeamMember } from '../types/team';

export const getTeam = async (): Promise<TeamMember[]> => {
  const { data } = await api.get('/api/admin/team');
  return data;
};

export const createTeamMember = async (payload: Partial<TeamMember>): Promise<TeamMember> => {
  const { data } = await api.post('/api/admin/team', payload);
  return data;
};

export const updateTeamMember = async (id: string, payload: Partial<TeamMember>): Promise<TeamMember> => {
  const { data } = await api.put(`/api/admin/team/${id}`, payload);
  return data;
};

export const deleteTeamMember = async (id: string): Promise<void> => {
  await api.delete(`/api/admin/team/${id}`);
};

export const toggleTeamStatus = async (id: string, status: TeamMember['status']): Promise<TeamMember> => {
  const { data } = await api.patch(`/api/admin/team/${id}/status`, { status });
  return data;
};
