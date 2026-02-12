export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'client' | 'user' | 'superadmin';
  status: 'active' | 'inactive';
  lastActiveAt?: string;
  avatarUrl?: string;
}

export interface AuditLog {
  id: string;
  action: string;
  actor: string;
  target: string;
  createdAt: string;
  metadata?: Record<string, string>;
}
