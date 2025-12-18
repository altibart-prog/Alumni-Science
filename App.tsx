
import React, { useState } from 'react';
import { 
  BookOpen, FileText, MessageSquare, Search, Award, 
  PenTool, FileSearch, Bot, FileCheck, FileEdit, Database, Home, Menu 
} from 'lucide-react';
import LandingPage, { SovereignEagleLogo } from './components/LandingPage';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = (provider: string) => {
    setUser({
      name: 'Pesquisador Alumni',
      email: 'pesquisador@alumniin.com',
      institution: 'Universidade Alumni',
      tier: 'PRO',
      credits: 100
    });
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('landing');
  };

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

  if (!user) {
    if (currentView === 'committee') {
      return <ScientificCommittee onBack={() => setCurrentView('landing')} />;
    }
    return <LandingPage onLogin={handleLogin} onNavigate={setCurrentView} />;
  }

  const currentMenu = getMenuDetails(currentView);

  return (
    <div className="min-h-screen flex bg-[#020617] text-slate-100 overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-[100]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        currentView={currentView}
        setCurrentView={setCurrentView}
        user={user}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        <header className="lg:hidden h-16 flex items-center px-4 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl shrink-0">
           <button 
             onClick={() => setSidebarOpen(true)}
             className="p-2 rounded-xl bg-white/5 border border-white/10 text-white"
           >
             <Menu className="w-6 h-6" />
           </button>
           <div className="ml-4 flex items-center gap-2">
              <SovereignEagleLogo className="w-7 h-6" />
              <div className="flex items-baseline gap-0.5">
                <span className="font-black text-lg text-white tracking-tighter uppercase">Alumni</span>
                <span className="font-black text-lg text-[#0da1a1] tracking-tighter lowercase">.in</span>
              </div>
           </div>
        </header>

        <main className="flex-1 overflow-auto transition-all duration-300">
          <div className="p-4 md:p-8 min-h-full max-w-[1600px] mx-auto">
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
    </div>
  );
}