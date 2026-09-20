import { apiClient } from './apiClient';

const AUTH_KEY = 'project_zero_auth';
const TOKEN_KEY = 'token';

export const authService = {
  login: async (email, password) => {
    try {
      const res = await apiClient.login({ email, password });
      if (res.success) {
        localStorage.setItem(AUTH_KEY, JSON.stringify(res.data));
        localStorage.setItem(TOKEN_KEY, res.data.token);
      }
      return res;
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  
  register: async (userData) => {
    try {
      const res = await apiClient.register(userData);
      if (res.success) {
        localStorage.setItem(AUTH_KEY, JSON.stringify(res.data));
        localStorage.setItem(TOKEN_KEY, res.data.token);
      }
      return res;
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(TOKEN_KEY);
  },

  getCurrentUser: () => {
    const user = localStorage.getItem(AUTH_KEY);
    return user ? JSON.parse(user) : null;
  }
};
