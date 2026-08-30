import { create } from 'zustand';
export const useAuthStore = create((set) => ({ user: null, hydrated: false, setSession: ({ user, token }) => { localStorage.setItem('agentflow-token', token); set({ user, hydrated: true }); }, setUser: (user) => set({ user, hydrated: true }), logout: () => { localStorage.removeItem('agentflow-token'); set({ user: null, hydrated: true }); } }));
