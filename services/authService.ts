// This would connect to a real backend in production
import { User } from '../types';

export const loginUser = async (provider: string): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return {
    name: 'Pesquisador',
    email: 'pesquisador@universidade.edu.br',
    institution: 'Universidade Federal',
    tier: 'PRO',
    credits: 100
  };
};

export const logoutUser = async (): Promise<void> => {
  // Simulate API logout
  await new Promise(resolve => setTimeout(resolve, 300));
};