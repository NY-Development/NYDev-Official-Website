import api from './api';
import type { AdminUser, AuditLog } from '../types/user';

export const getUsers = async (): Promise<AdminUser[]> => {
  const { data } = await api.get('/api/admin/users');
  return data;
};

export const updateUserRole = async (id: string, role: AdminUser['role']): Promise<AdminUser> => {
  const { data } = await api.patch(`/api/admin/users/${id}/role`, { role });
  return data;
};

export const getAuditLogs = async (): Promise<AuditLog[]> => {
  const { data } = await api.get('/api/admin/audit-logs');
  return data;
};
