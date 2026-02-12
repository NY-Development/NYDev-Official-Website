import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import api from '../services/api';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(window.localStorage.getItem('nydev-admin-token'));
  const [isLoading, setIsLoading] = useState(true);

  const fetchMe = useCallback(async () => {
    try {
      const { data } = await api.get('/api/users/me');
      setUser(data);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchMe();
    } else {
      setIsLoading(false);
    }
  }, [fetchMe, token]);

  const login = useCallback(async (email: string, password: string) => {
    const { data } = await api.post('/api/auth/login', { email, password });
    window.localStorage.setItem('nydev-admin-token', data.token);
    setToken(data.token);
    setUser(data.user);
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem('nydev-admin-token');
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, token, isLoading, login, logout }), [user, token, isLoading, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
