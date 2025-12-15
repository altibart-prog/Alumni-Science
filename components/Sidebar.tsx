import React from 'react';
import { 
  Home, Brain, Bot, FileEdit, MessageSquare, FileSearch, PenTool, 
  FileText, Search, FileCheck, Award, Database, Menu, X, BookOpen, LogOut, Sparkles, LayoutGrid
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
  
  const menuGroups = [
    {
      title: "PRINCIPAL",
      items: [
        { id: 'dashboard', label: 'Início', icon: Home, view: 'dashboard' as ViewState },
        { id: 'intelligence', label: 'Inteligência Acadêmica', icon: Brain, view: 'academic-intelligence' as ViewState },
      ]
    },
    {
      title: "ANÁLISE & PESQUISA",
      items: [
        { id: 'review', label: 'Avaliação de Artigos', icon: FileCheck, view: 'review' as ViewState },
        { id: 'chat', label: 'Chat com PDF', icon: MessageSquare, view: 'chat' as ViewState },
        { id: 'literature', label: 'Rev. Literatura', icon: FileSearch, view: 'literature' as ViewState },
        { id: 'agents', label: 'Galeria de Agentes', icon: Bot, view: 'agents' as ViewState },
      ]
    },
    {
      title: "ESCRITA & FERRAMENTAS",
      items: [
        { id: 'writer', label: 'Redator IA', icon: PenTool, view: 'writer' as ViewState },
        { id: 'draft', label: 'Esboço Inteligente', icon: FileEdit, view: 'draft' as ViewState },
        { id: 'abstract', label: 'Resumo', icon: FileText, view: 'abstract' as ViewState },
        { id: 'topics', label: 'Tópicos', icon: Search, view: 'topics' as ViewState },
        { id: 'citations', label: 'Citações', icon: Award, view: 'citations' as ViewState },
        { id: 'extract', label: 'Extrair Dados', icon: Database, view: 'extract' as ViewState },
      ]
    }
  ];

  return (
    <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col h-screen fixed lg:relative z-30 shadow-2xl`}>
      {/* Header */}
      <div className="p-4 flex items-center justify-between h-20 border-b border-slate-800/50">
        {sidebarOpen && (
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-white tracking-tight">Alumni<span className="text-cyan-400">.ai</span></span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Science Platform</span>
            </div>
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white ${!sidebarOpen && 'mx-auto'}`}
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-8 custom-scrollbar">
        {menuGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {sidebarOpen && (
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 pl-3 animate-fade-in">
                {group.title}
              </h3>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = currentView === item.view;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.view)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/5 text-cyan-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] border border-cyan-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 min-w-[20px] transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                    
                    {sidebarOpen && (
                      <span className="text-sm font-medium tracking-tight animate-fade-in truncate">
                        {item.label}
                      </span>
                    )}

                    {!sidebarOpen && (
                      <div className="absolute left-14 bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity shadow-xl border border-slate-700 ml-2">
                        {item.label}
                      </div>
                    )}
                    
                    {isActive && sidebarOpen && (
                      <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer User Profile */}
      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'} mb-4`}>
          <div className="relative">
            <div className="w-10 h-10 min-w-[40px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner ring-2 ring-slate-800">
              {user.name.substring(0, 2).toUpperCase()}
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></div>
          </div>
          
          {sidebarOpen && (
            <div className="flex-1 min-w-0 animate-fade-in">
              <p className="text-sm font-semibold text-slate-200 truncate">{user.name}</p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-500/20 font-medium">
                  {user.tier}
                </span>
                <span className="text-xs text-slate-500 truncate">{user.credits} créditos</span>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={onLogout}
          className={`w-full flex items-center gap-2 text-slate-400 hover:text-white hover:bg-red-500/10 hover:border-red-500/20 border border-transparent rounded-lg transition-all duration-200 group ${
            sidebarOpen ? 'px-4 py-2.5 justify-start' : 'p-2 justify-center'
          }`}
        >
          <LogOut className="w-5 h-5 min-w-[20px] group-hover:text-red-400 transition-colors" />
          {sidebarOpen && <span className="text-sm font-medium group-hover:text-red-400 animate-fade-in">Sair da Conta</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;