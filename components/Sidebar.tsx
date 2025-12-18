import React from 'react';
import { 
  Home, Brain, Bot, FileEdit, MessageSquare, FileSearch, PenTool, 
  FileText, Search, FileCheck, Award, Database, BookOpen, LogOut,
  X, Sparkles, Zap
} from 'lucide-react';
import { ViewState, User } from '../types';

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
  
  // Theme configuration: "Neon Glass" Palette
  const menuGroups = [
    {
      title: "PRINCIPAL",
      color: "cyan",
      items: [
        { id: 'dashboard', label: 'Início', icon: Home, view: 'dashboard' as ViewState },
        { id: 'intelligence', label: 'Inteligência Acadêmica', icon: Brain, view: 'academic-intelligence' as ViewState },
      ]
    },
    {
      title: "ANÁLISE",
      color: "fuchsia",
      items: [
        { id: 'review', label: 'Avaliação de Artigos', icon: FileCheck, view: 'review' as ViewState },
        { id: 'chat', label: 'Chat com PDF', icon: MessageSquare, view: 'chat' as ViewState },
        { id: 'literature', label: 'Rev. Literatura', icon: FileSearch, view: 'literature' as ViewState },
        { id: 'agents', label: 'Agentes Especialistas', icon: Bot, view: 'agents' as ViewState },
      ]
    },
    {
      title: "CRIAÇÃO",
      color: "emerald",
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

  // Helper: "Neon Glass" Theme Logic
  const getGroupColor = (color: string, isActive: boolean) => {
    const map: any = {
        cyan: { 
            activeText: 'text-cyan-200', 
            bg: 'bg-cyan-500/10', 
            border: 'border-cyan-400/50', 
            glow: 'shadow-[0_0_20px_rgba(34,211,238,0.3)]',
            indicator: 'bg-cyan-400'
        },
        fuchsia: { 
            activeText: 'text-fuchsia-200', 
            bg: 'bg-fuchsia-500/10', 
            border: 'border-fuchsia-400/50', 
            glow: 'shadow-[0_0_20px_rgba(232,121,249,0.3)]',
            indicator: 'bg-fuchsia-400'
        },
        emerald: { 
            activeText: 'text-emerald-200', 
            bg: 'bg-emerald-500/10', 
            border: 'border-emerald-400/50', 
            glow: 'shadow-[0_0_20px_rgba(52,211,153,0.3)]',
            indicator: 'bg-emerald-400'
        }
    };
    return map[color];
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
          bg-[#0f172a]/60 backdrop-blur-xl border-r border-white/5
          flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
          ${sidebarOpen ? 'w-72 translate-x-0' : 'w-[88px] -translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="h-24 flex items-center px-6 relative">
          <div className="flex items-center gap-3 w-full">
             <div className="relative flex-shrink-0 group cursor-pointer">
                <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg ring-1 ring-white/10 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
             </div>

             <div className={`flex flex-col transition-all duration-500 overflow-hidden whitespace-nowrap ${sidebarOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}`}>
                <span className="font-black text-xl leading-none text-white font-heading tracking-tighter">
                  ALUMNI<span className="text-cyan-400">INDEX</span>
                </span>
                <span className="text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase mt-1">Sovereign Platform</span>
             </div>
          </div>

          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden ml-auto text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
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
                    const activeTheme = getGroupColor(group.color, isActive);

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
                            ${isActive 
                            ? `${activeTheme.bg} ${activeTheme.activeText} border ${activeTheme.border} ${activeTheme.glow}` 
                            : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}
                        `}
                        >
                        <item.icon 
                            className={`
                            transition-all duration-300 flex-shrink-0
                            ${isActive ? `w-5 h-5 ${activeTheme.activeText} drop-shadow-[0_0_5px_currentColor]` : `w-5 h-5 group-hover:scale-110`}
                            `} 
                        />
                        
                        <span className={`
                            text-sm font-medium tracking-tight whitespace-nowrap overflow-hidden transition-all duration-500
                            ${sidebarOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 hidden lg:block'}
                            ${isActive ? 'font-bold' : ''}
                        `}>
                            {item.label}
                        </span>

                        {/* Active Dot Indicator (Right Side) */}
                        {isActive && sidebarOpen && (
                            <div className={`ml-auto w-1.5 h-1.5 rounded-full ${activeTheme.indicator} shadow-[0_0_8px_currentColor]`}></div>
                        )}

                        {/* Tooltip for Collapsed State */}
                        {!sidebarOpen && (
                            <div className="hidden lg:block absolute left-14 bg-[#1e293b] text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 shadow-xl border border-white/10">
                            {item.label}
                            </div>
                        )}
                        </button>
                    );
                    })}
                </div>
            </div>
          ))}
        </div>

        {/* User Footer */}
        <div className="p-4 border-t border-white/5 bg-[#0a0f1e]/40 backdrop-blur-md">
          <div className={`
            flex items-center transition-all duration-300 
            ${sidebarOpen ? 'gap-3' : 'justify-center'}
          `}>
            <div className="relative flex-shrink-0 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white/10 group-hover:ring-cyan-400/50 transition-all">
                {user.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0f172a] rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ${sidebarOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}`}>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-white truncate font-heading tracking-wide">{user.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-200 px-1.5 py-px rounded border border-amber-500/30 font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
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