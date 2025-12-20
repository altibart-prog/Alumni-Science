
import React from 'react';
import { 
  Home, Brain, Bot, FileEdit, MessageSquare, FileSearch, PenTool, 
  FileText, Search, FileCheck, Award, Database, LogOut,
  X, Zap, Library
} from 'lucide-react';
import { ViewState, User } from '../types';
import { SovereignEagleLogo } from './LandingPage';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
  user: User;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  sidebarOpen, 
  setSidebarOpen, 
  currentView, 
  setCurrentView, 
  user,
  onLogout 
}) => {
  
  const menuGroups = [
    {
      title: "PRINCIPAL",
      color: "teal",
      items: [
        { id: 'dashboard', label: 'Início', icon: Home, view: 'dashboard' as ViewState },
        { id: 'intelligence', label: 'Inteligência Acadêmica', icon: Brain, view: 'academic-intelligence' as ViewState },
        { id: 'journals', label: 'Revistas Científicas', icon: Library, view: 'journals' as ViewState },
      ]
    },
    {
      title: "ANÁLISE",
      items: [
        { id: 'review', label: 'Avaliação de Artigos', icon: FileCheck, view: 'review' as ViewState },
        { id: 'chat', label: 'Chat com PDF', icon: MessageSquare, view: 'chat' as ViewState },
        { id: 'literature', label: 'Rev. Literatura', icon: FileSearch, view: 'literature' as ViewState },
        { id: 'agents', label: 'Agentes Especialistas', icon: Bot, view: 'agents' as ViewState },
      ]
    },
    {
      title: "CRIAÇÃO",
      items: [
        { id: 'writer', label: 'Redator Neural', icon: PenTool, view: 'writer' as ViewState },
        { id: 'draft', label: 'Esboço Inteligente', icon: FileEdit, view: 'draft' as ViewState },
        { id: 'abstract', label: 'Resumo', icon: FileText, view: 'abstract' as ViewState },
        { id: 'topics', label: 'Tópicos', icon: Search, view: 'topics' as ViewState },
        { id: 'citations', label: 'Citações', icon: Award, view: 'citations' as ViewState },
        { id: 'extract', label: 'Extrair Dados', icon: Database, view: 'extract' as ViewState },
      ]
    }
  ];

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) setSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) setSidebarOpen(false);
  };

  const getActiveStyles = (isActive: boolean) => {
    if (!isActive) return 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent';
    return 'bg-[#0da1a1]/10 text-[#0da1a1] border-[#0da1a1]/50 shadow-[0_0_20px_rgba(13,161,161,0.2)] font-bold';
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          fixed lg:relative z-50 h-screen 
          bg-[#0f172a]/80 backdrop-blur-xl border-r border-white/5
          flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
          ${sidebarOpen ? 'w-72 translate-x-0' : 'w-[88px] -translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="h-24 flex items-center px-6 relative">
          <div className="flex items-center gap-4 w-full">
             <div className="relative flex-shrink-0 group cursor-pointer" onClick={() => setCurrentView('landing')}>
                <div className="absolute inset-0 bg-[#0da1a1] blur-lg opacity-10 group-hover:opacity-30 transition-opacity rounded-full"></div>
                <SovereignEagleLogo className="relative w-10 h-8 transition-transform group-hover:scale-110" />
             </div>

             <div className={`flex flex-col transition-all duration-500 overflow-hidden whitespace-nowrap ${sidebarOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}`}>
                <div className="flex items-center">
                  <span className="font-black text-xl leading-none text-white font-heading tracking-tighter">ALUMNI</span>
                  <span className="font-black text-xl leading-none text-[#0da1a1] font-heading tracking-tighter ml-1">INDEX</span>
                </div>
                <span className="text-[9px] text-slate-400 font-black tracking-[0.2em] uppercase mt-1">Sovereign Intelligence</span>
             </div>
          </div>

          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden ml-auto text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 space-y-8 py-4 custom-scrollbar">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
                <div className={`
                    text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 px-3
                    transition-all duration-300 flex items-center gap-2
                    ${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 lg:opacity-100 lg:justify-center lg:px-0'}
                `}>
                    <span className={!sidebarOpen ? 'hidden' : ''}>{group.title}</span>
                    {!sidebarOpen && <div className={`w-1 h-1 rounded-full bg-slate-700`}></div>}
                </div>

                <div className="space-y-1.5">
                    {group.items.map((item) => {
                    const isActive = currentView === item.view;
                    return (
                        <button
                        key={item.id}
                        onClick={() => {
                            setCurrentView(item.view);
                            if (window.innerWidth < 1024) setSidebarOpen(false);
                        }}
                        className={`
                            w-full flex items-center relative group
                            rounded-xl transition-all duration-300
                            ${sidebarOpen ? 'px-4 py-3 gap-3' : 'p-3 justify-center'}
                            ${getActiveStyles(isActive)}
                        `}
                        >
                        <item.icon 
                            className={`
                            transition-all duration-300 flex-shrink-0
                            ${isActive ? `w-5 h-5 text-[#0da1a1] drop-shadow-[0_0_5px_currentColor]` : `w-5 h-5 group-hover:scale-110`}
                            `} 
                        />
                        
                        <span className={`
                            text-sm font-medium tracking-tight whitespace-nowrap overflow-hidden transition-all duration-500
                            ${sidebarOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 hidden lg:block'}
                        `}>
                            {item.label}
                        </span>

                        {isActive && sidebarOpen && (
                            <div className={`ml-auto w-1.5 h-1.5 rounded-full bg-[#0da1a1] shadow-[0_0_8px_currentColor]`}></div>
                        )}
                        </button>
                    );
                    })}
                </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/5 bg-[#0a0f1e]/40 backdrop-blur-md">
          <div className={`flex items-center transition-all duration-300 ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
            <div className="w-10 h-10 bg-gradient-to-tr from-[#0da1a1] to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white/10 group-hover:ring-[#0da1a1]/50 transition-all">
              {user.name.substring(0, 2).toUpperCase()}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ${sidebarOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}`}>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-white truncate font-heading tracking-wide">{user.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] bg-[#0da1a1]/20 text-[#0da1a1] px-1.5 py-px rounded border border-[#0da1a1]/30 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Zap className="w-2 h-2" />
                    {user.tier}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={onLogout}
            className={`
              mt-4 flex items-center rounded-xl transition-all duration-300 group
              text-slate-400 hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/20
              ${sidebarOpen ? 'w-full px-4 py-2 gap-3' : 'w-10 h-10 justify-center mx-auto'}
            `}
          >
            <LogOut className="w-4 h-4 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
            <span className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden transition-all duration-500 ${sidebarOpen ? 'opacity-100 max-w-[100px]' : 'opacity-0 max-w-0'}`}>
              Sair
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
