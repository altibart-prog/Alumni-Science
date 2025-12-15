import React from 'react';
import { 
  FileCheck, ChevronRight, BarChart3, MessageSquare, Sparkles, 
  Clock, TrendingUp, Search, ArrowRight, Zap, FileText
} from 'lucide-react';
import { ViewState } from '../types';

interface DashboardProps {
  setCurrentView: (view: ViewState) => void;
  userName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentView, userName }) => {
  return (
    <div className="animate-fade-in pb-10">
      {/* Welcome Section & Metrics */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">{userName}</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Bem-vindo ao seu laboratório pessoal. O que vamos descobrir hoje?
          </p>
        </div>
        
        <div className="flex gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm min-w-[140px]">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Créditos</p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-slate-900">100</span>
              <span className="text-xs text-green-600 font-medium mb-1.5">+20 bonus</span>
            </div>
          </div>
          <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm min-w-[140px]">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Avaliações</p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-slate-900">12</span>
              <span className="text-xs text-slate-500 font-medium mb-1.5">este mês</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Main Content */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Hero Card - Avaliação */}
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-slate-900/20 group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/20 via-blue-600/10 to-transparent rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none"></div>
            
            <div className="relative z-10 p-8 sm:p-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <FileCheck className="w-7 h-7 text-white" />
                </div>
                <span className="bg-white/10 backdrop-blur-md border border-white/10 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Mais Popular
                </span>
              </div>
              
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold mb-4 leading-tight">Avaliação de Artigos <br/>com Inteligência Artificial</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Obtenha um parecer técnico detalhado em segundos. Analise metodologia, ineditismo e estrutura com precisão de peer-review.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => setCurrentView('review')}
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-cyan-50 transition-colors flex items-center gap-2 shadow-lg group-hover:scale-[1.02] duration-200"
                >
                  Iniciar Avaliação
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-4 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-white/5 transition flex items-center gap-2 border border-transparent hover:border-white/10">
                  <Clock className="w-4 h-4" />
                  Ver Histórico
                </button>
              </div>
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div 
              onClick={() => setCurrentView('chat')}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <MessageSquare className="w-24 h-24 text-cyan-600" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                  <MessageSquare className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Chat PDF</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Converse com seus documentos. Extraia insights, resumos e tire dúvidas instantaneamente.
                </p>
                <span className="text-cyan-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Acessar Ferramenta <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div 
              onClick={() => setCurrentView('literature')}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <TrendingUp className="w-24 h-24 text-purple-600" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Revisão de Literatura</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Mapeie o estado da arte. Encontre as referências mais relevantes e atuais para sua pesquisa.
                </p>
                <span className="text-purple-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Iniciar Pesquisa <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar Widgets */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Search Widget */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar ferramentas ou arquivos..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[400px]">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Atividade Recente</h3>
              <button className="text-xs text-cyan-600 font-medium hover:text-cyan-700">Ver tudo</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar">
              {/* Empty State for Demo */}
              <div className="text-center py-10 opacity-60">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-5 h-5 text-slate-400" />
                </div>
                <p className="text-sm text-slate-500">Nenhuma atividade recente.</p>
                <p className="text-xs text-slate-400">Suas análises aparecerão aqui.</p>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <button className="w-full py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                Novo Upload Rápido
              </button>
            </div>
          </div>

          {/* Promo/Tip Widget */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-bold tracking-wide uppercase opacity-90">Dica Pro</span>
              </div>
              <p className="text-sm leading-relaxed mb-4 opacity-90">
                Use o <strong>Agente de Escrita</strong> para expandir seus tópicos em parágrafos fundamentados automaticamente.
              </p>
              <button 
                onClick={() => setCurrentView('writer')}
                className="text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition"
              >
                Experimentar Agora
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;