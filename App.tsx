import React, { useState } from 'react';
import { 
  BookOpen, Users, FileText, MessageSquare, Search, Award, 
  PenTool, FileSearch, Bot, FileCheck, FileEdit, Database, Home 
} from 'lucide-react';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ReviewPage from './components/ReviewPage';
import AcademicIntelligence from './components/AcademicIntelligence';
import PlaceholderView from './components/PlaceholderView';
import ScientificCommittee from './components/ScientificCommittee';
import { User, ViewState, MenuItem } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogin = (provider: string) => {
    // Mock Login
    setUser({
      name: 'Pesquisador',
      email: 'pesquisador@universidade.edu.br',
      institution: 'Universidade Federal',
      tier: 'PRO',
      credits: 100
    });
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('landing');
  };

  // Helper to find current menu item details
  const getMenuDetails = (view: ViewState) => {
    const items: MenuItem[] = [
      { id: 'dashboard', label: 'Início', icon: Home, subtitle: 'Visão geral', view: 'dashboard' },
      { id: 'intelligence', label: 'Inteligência Acadêmica', icon: BookOpen, subtitle: 'CAPES, Qualis & Impacto', view: 'academic-intelligence' },
      { id: 'agents', label: 'Galeria de Agentes', icon: Bot, subtitle: 'Assistentes especializados', view: 'agents' },
      { id: 'draft', label: 'Esboço Inteligente', icon: FileEdit, subtitle: 'Artigo via Zotero/Mendeley', view: 'draft' },
      { id: 'chat', label: 'Chat com PDF', icon: MessageSquare, subtitle: 'Interaja com documentos', view: 'chat' },
      { id: 'literature', label: 'Revisão de Literatura', icon: FileSearch, subtitle: 'Estado da arte', view: 'literature' },
      { id: 'writer', label: 'Redator IA', icon: PenTool, subtitle: 'Escrita acadêmica', view: 'writer' },
      { id: 'abstract', label: 'Construtor de Resumo', icon: FileText, subtitle: 'Resumo estruturado', view: 'abstract' },
      { id: 'topics', label: 'Explorar Tópicos', icon: Search, subtitle: 'Descobrir temas', view: 'topics' },
      { id: 'paraphrase', label: 'Parafraseador', icon: FileCheck, subtitle: 'Reescrever textos', view: 'paraphrase' },
      { id: 'citations', label: 'Gerador de Citações', icon: Award, subtitle: 'Zotero, APA & mais', view: 'citations' },
      { id: 'extract', label: 'Extrair Dados', icon: Database, subtitle: 'Tabelas e gráficos', view: 'extract' },
    ];
    return items.find(i => i.view === view);
  };

  // Se o usuário não estiver logado
  if (!user) {
    if (currentView === 'committee') {
      return <ScientificCommittee onBack={() => setCurrentView('landing')} />;
    }
    // Landing Page agora aceita onNavigate
    return <LandingPage onLogin={handleLogin} onNavigate={setCurrentView} />;
  }

  const currentMenu = getMenuDetails(currentView);

  return (
    <div className="min-h-screen flex font-sans text-slate-50 overflow-hidden relative">
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        currentView={currentView}
        setCurrentView={setCurrentView}
        user={user}
        onLogout={handleLogout}
      />

      <main className={`flex-1 overflow-auto transition-all duration-300 relative z-10 ${sidebarOpen ? 'lg:ml-0' : 'lg:ml-0'}`}>
        <div className="p-4 md:p-8 pt-20 lg:pt-8 min-h-full">
          {currentView === 'dashboard' && (
            <Dashboard setCurrentView={setCurrentView} userName={user.name} />
          )}

          {currentView === 'review' && (
            <ReviewPage />
          )}

          {currentView === 'academic-intelligence' && (
            <AcademicIntelligence />
          )}

          {currentView !== 'dashboard' && currentView !== 'review' && currentView !== 'academic-intelligence' && currentMenu && (
            <PlaceholderView 
              view={currentView}
              icon={currentMenu.icon}
              label={currentMenu.label}
              subtitle={currentMenu.subtitle}
              onBack={() => setCurrentView('dashboard')}
            />
          )}
        </div>
      </main>
    </div>
  );
}