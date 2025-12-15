import React from 'react';
import { 
  Home, Brain, Bot, FileEdit, MessageSquare, FileSearch, PenTool, 
  FileText, Search, FileCheck, Award, Database, Menu, X, BookOpen, LogOut,
  ChevronRight, ChevronLeft
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

  // Logic to handle hover interactions for desktop
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          fixed lg:relative z-50 h-screen 
          bg-[#0f172a]/95 backdrop-blur-2xl border-r border-slate-700/50 
          flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
          ${sidebarOpen ? 'w-72 translate-x-0 shadow-2xl shadow-cyan-900/10' : 'w-[88px] -translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="h-24 flex items-center px-6 border-b border-white/5 relative overflow-hidden group">
          {/* Logo Icon */}
          <div className="relative z-10 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
             <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
               <BookOpen className="w-5 h-5 text-white" />
             </div>
          </div>

          {/* Logo Text (Animated) */}
          <div className={`ml-4 transition-all duration-500 ease-out overflow-hidden whitespace-nowrap ${sidebarOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}`}>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight text-white tracking-tight font-heading">
                Alumni<span className="text-cyan-400">.ai</span>
              </span>
              <span className="text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">Science Platform</span>
            </div>
          </div>

          {/* Mobile Close */}
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden ml-auto text-slate-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-8 custom-scrollbar">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <div className={`
                text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 px-2
                transition-all duration-300 ${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 lg:opacity-100 lg:text-center lg:text-[0px]'}
              `}>
                <span className={!sidebarOpen ? 'hidden' : ''}>{group.title}</span>
                {!sidebarOpen && <div className="h-0.5 w-6 bg-slate-700/50 mx-auto my-2 rounded-full"></div>}
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
                        ${isActive 
                          ? 'bg-cyan-500/10 text-cyan-300 shadow-inner shadow-cyan-500/5' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}
                      `}
                    >
                      {/* Active Indicator Line */}
                      {isActive && (
                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-cyan-400 rounded-r-full shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300 ${sidebarOpen ? 'h-6' : 'h-4'}`}></div>
                      )}

                      <item.icon 
                        className={`
                          transition-all duration-300 flex-shrink-0
                          ${isActive ? 'w-5 h-5 text-cyan-300' : 'w-5 h-5 text-slate-500 group-hover:text-slate-300'}
                        `} 
                      />
                      
                      <span className={`
                        text-sm font-medium tracking-tight whitespace-nowrap overflow-hidden transition-all duration-500
                        ${sidebarOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 hidden lg:block'}
                        ${isActive ? 'font-bold text-cyan-50' : ''}
                      `}>
                        {item.label}
                      </span>

                      {/* Tooltip for collapsed state */}
                      {!sidebarOpen && (
                        <div className="hidden lg:block absolute left-16 bg-slate-800/90 backdrop-blur-md text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 border border-slate-700/50 shadow-xl">
                          {item.label}
                          <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-800/90 rotate-45 border-l border-b border-slate-700/50"></div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-white/5 bg-[#0f172a]/50">
          <div className={`
            flex items-center transition-all duration-300 
            ${sidebarOpen ? 'gap-3' : 'justify-center'}
          `}>
            <div className="relative flex-shrink-0 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner ring-2 ring-slate-800 group-hover:ring-cyan-500/50 transition-all">
                {user.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full animate-pulse"></div>
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ${sidebarOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}`}>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-slate-200 truncate font-heading">{user.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] bg-cyan-500/10 text-cyan-300 px-1.5 py-px rounded border border-cyan-500/20 font-bold uppercase tracking-wider">
                    {user.tier}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">{user.credits} CR</span>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={onLogout}
            className={`
              mt-4 flex items-center rounded-lg transition-all duration-300 group
              text-slate-400 hover:text-red-400 hover:bg-red-500/10
              ${sidebarOpen ? 'w-full px-4 py-2 gap-3' : 'w-10 h-10 justify-center mx-auto'}
            `}
            title="Sair"
          >
            <LogOut className="w-5 h-5 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
            <span className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-500 ${sidebarOpen ? 'opacity-100 max-w-[100px]' : 'opacity-0 max-w-0'}`}>
              Sair da Conta
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;