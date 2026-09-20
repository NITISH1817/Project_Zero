// API Client implementation for Phase 12
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

export const apiClient = {
  // Auth
  async login(credentials) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return res.json();
  },
  async register(data) {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },
  async getCurrentUser() {
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // Problems
  async getProblems() {
    const res = await fetch(`${API_URL}/problems`, { headers: getAuthHeaders() });
    return res.json();
  },
  async getProblem(id) {
    const res = await fetch(`${API_URL}/problems/${id}`, { headers: getAuthHeaders() });
    return res.json();
  },
  async createProblem(data) {
    const res = await fetch(`${API_URL}/problems`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },
  async upvoteProblem(id) {
    const res = await fetch(`${API_URL}/problems/${id}/vote`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },
  async saveProblem(id) {
    const res = await fetch(`${API_URL}/problems/${id}/save`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },
  async unsaveProblem(id) {
    const res = await fetch(`${API_URL}/problems/${id}/save`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return res.json();
  },
  async analyzeProblem(id) {
    const res = await fetch(`${API_URL}/problems/${id}/analyze`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // Dashboard
  async getDashboard() {
    const res = await fetch(`${API_URL}/dashboard`, { headers: getAuthHeaders() });
    return res.json();
  }
};
