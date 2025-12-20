
import { LucideIcon } from 'lucide-react';

export type ViewState = 
  | 'landing' 
  | 'committee' 
  | 'dashboard' 
  | 'review' 
  | 'research' 
  | 'chat' 
  | 'literature' 
  | 'writer' 
  | 'abstract' 
  | 'topics' 
  | 'paraphrase' 
  | 'agents' 
  | 'draft' 
  | 'slides' 
  | 'extract' 
  | 'members' 
  | 'citations' 
  | 'academic-intelligence'
  | 'journals'
  | 'tools';

export type MembershipTier = 'FREE' | 'PRO' | 'INSTITUTIONAL';

export interface User {
  name: string;
  email: string;
  institution: string;
  tier: MembershipTier;
  credits: number;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  subtitle: string;
  view: ViewState;
}
