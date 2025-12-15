import React from 'react';
import { 
  Home, Brain, Bot, FileEdit, MessageSquare, FileSearch, PenTool, 
  FileText, Search, FileCheck, Award, Database, Menu, X, BookOpen, LogOut 
} from 'lucide-react';
import { MenuItem, ViewState, User } from '../types';

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
  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Início', icon: Home, subtitle: 'Visão geral', view: 'dashboard' },
    { id: 'intelligence', label: 'Inteligência', icon: Brain, subtitle: 'CAPES & Impacto', view: 'members' },
    { id: 'agents', label: 'Galeria de Agentes', icon: Bot, subtitle: 'Assistentes IA', view: 'agents' },
    { id: 'draft', label: 'Esboço Inteligente', icon: FileEdit, subtitle: 'Artigo via Zotero', view: 'draft' },
    { id: 'chat', label: 'Chat com PDF', icon: MessageSquare, subtitle: 'Interaja c/ docs', view: 'chat' },
    { id: 'literature', label: 'Rev. Literatura', icon: FileSearch, subtitle: 'Estado da arte', view: 'literature' },
    { id: 'writer', label: 'Redator IA', icon: PenTool, subtitle: 'Escrita acadêmica', view: 'writer' },
    { id: 'abstract', label: 'Resumo', icon: FileText, subtitle: 'Builder estruturado', view: 'abstract' },
    { id: 'topics', label: 'Explorar Tópicos', icon: Search, subtitle: 'Descobrir temas', view: 'topics' },
    { id: 'paraphrase', label: 'Parafraseador', icon: FileCheck, subtitle: 'Reescrever textos', view: 'paraphrase' },
    { id: 'citations', label: 'Citações', icon: Award, subtitle: 'Zotero, APA', view: 'citations' },
    { id: 'extract', label: 'Extrair Dados', icon: Database, subtitle: 'Tabelas e gráficos', view: 'extract' },
  ];

  return (
    <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-screen fixed lg:relative z-20`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between h-16">
        {sidebarOpen && (
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 min-w-[32px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg whitespace-nowrap">
              <span className="text-gray-900">Alumni</span>
              <span className="text-cyan-600"> Apps</span>
            </span>
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`p-2 hover:bg-gray-100 rounded-lg transition ${!sidebarOpen && 'mx-auto'}`}
        >
          {sidebarOpen ? <X className="w-5 h-5 text-gray-500" /> : <Menu className="w-5 h-5 text-gray-500" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-1 custom-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.view)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative ${
              currentView === item.view
                ? 'bg-cyan-50 text-cyan-700 shadow-sm'
                : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
            }`}
          >
            <item.icon className={`w-5 h-5 min-w-[20px] ${currentView === item.view ? 'text-cyan-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
            
            <div className={`flex-1 text-left transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 w-0 hidden'}`}>
              <p className="text-sm font-semibold tracking-tight">{item.label}</p>
              <p className={`text-[10px] truncate ${currentView === item.view ? 'text-cyan-600/70' : 'text-gray-400'}`}>{item.subtitle}</p>
            </div>
            
            {!sidebarOpen && (
              <div className="absolute left-16 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                {item.label}
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50/50">
        <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
          <div className="w-10 h-10 min-w-[40px] bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-white">
            {user.name.substring(0, 2).toUpperCase()}
          </div>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.tier} • {user.credits} créditos</p>
            </div>
          )}
        </div>
        {sidebarOpen && (
          <button
            onClick={onLogout}
            className="w-full mt-3 flex items-center justify-center gap-2 text-gray-600 hover:text-red-600 py-2 hover:bg-red-50 rounded-lg transition text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;