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
    <div className="animate-fade-in pb-10 text-slate-200">
      {/* Welcome Section & Metrics */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
        <div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight font-heading">
            Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{userName}</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Bem-vindo ao seu laboratório pessoal. O que vamos descobrir hoje?
          </p>
        </div>
        
        <div className="flex gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <div className="bg-[#0f172a] px-6 py-4 rounded-2xl border border-white/5 shadow-lg min-w-[140px]">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-heading">Créditos</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-extrabold text-white">100</span>
              <span className="text-xs text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded mb-1.5">+20 bonus</span>
            </div>
          </div>
          <div className="bg-[#0f172a] px-6 py-4 rounded-2xl border border-white/5 shadow-lg min-w-[140px]">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-heading">Avaliações</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-extrabold text-white">12</span>
              <span className="text-xs text-slate-400 font-medium mb-1.5">este mês</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Main Content */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Hero Card - Avaliação */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#020617] text-white shadow-2xl border border-white/10 group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/20 via-blue-600/10 to-transparent rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none group-hover:bg-cyan-500/30 transition duration-700"></div>
            
            <div className="relative z-10 p-8 sm:p-12">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <span className="bg-white/10 backdrop-blur-md border border-white/10 text-cyan-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Mais Popular
                </span>
              </div>
              
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold mb-4 leading-tight font-heading">Avaliação de Artigos <br/>com Inteligência Artificial</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Obtenha um parecer técnico detalhado em segundos. Analise metodologia, ineditismo e estrutura com precisão de peer-review.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => setCurrentView('review')}
                  className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-cyan-50 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-[1.02] duration-200 font-heading"
                >
                  Iniciar Avaliação
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-6 py-4 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-white/5 transition flex items-center gap-2 border border-transparent hover:border-white/10">
                  <Clock className="w-5 h-5" />
                  Ver Histórico
                </button>
              </div>
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div 
              onClick={() => setCurrentView('chat')}
              className="bg-[#0f172a] p-8 rounded-[2rem] border border-white/5 shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition">
                <MessageSquare className="w-32 h-32 text-cyan-600" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <MessageSquare className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">Chat PDF</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Converse com seus documentos. Extraia insights, resumos e tire dúvidas instantaneamente.
                </p>
                <span className="text-cyan-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Acessar Ferramenta <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div 
              onClick={() => setCurrentView('literature')}
              className="bg-[#0f172a] p-8 rounded-[2rem] border border-white/5 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition">
                <TrendingUp className="w-32 h-32 text-purple-600" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <TrendingUp className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">Revisão de Literatura</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Mapeie o estado da arte. Encontre as referências mais relevantes e atuais para sua pesquisa.
                </p>
                <span className="text-purple-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Iniciar Pesquisa <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar Widgets */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Search Widget */}
          <div className="bg-[#0f172a] p-5 rounded-2xl border border-white/5 shadow-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Buscar ferramentas ou arquivos..." 
                className="w-full bg-[#020617] border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition placeholder:text-slate-600"
              />
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-[#0f172a] rounded-2xl border border-white/5 shadow-lg overflow-hidden flex flex-col h-[400px]">
            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-[#1e293b]/30">
              <h3 className="font-bold text-white font-heading">Atividade Recente</h3>
              <button className="text-xs text-cyan-400 font-bold hover:text-cyan-300">Ver tudo</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar">
              {/* Empty State for Demo */}
              <div className="text-center py-12 opacity-40">
                <div className="w-14 h-14 bg-[#1e293b] rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
                  <Clock className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-sm font-bold text-slate-300 mb-1">Nenhuma atividade recente.</p>
                <p className="text-xs text-slate-500">Suas análises aparecerão aqui.</p>
              </div>
            </div>
            
            <div className="p-4 bg-[#020617] border-t border-white/5">
              <button className="w-full py-3 bg-[#1e293b] border border-white/5 rounded-xl text-sm font-bold text-slate-300 hover:bg-[#2d3b55] hover:text-white transition flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                Novo Upload Rápido
              </button>
            </div>
          </div>

          {/* Promo/Tip Widget */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="text-xs font-bold tracking-widest uppercase opacity-90">Dica Pro</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 opacity-90 font-medium">
                Use o <strong>Agente de Escrita</strong> para expandir seus tópicos em parágrafos fundamentados automaticamente.
              </p>
              <button 
                onClick={() => setCurrentView('writer')}
                className="text-xs font-bold bg-white text-indigo-900 hover:bg-indigo-50 px-4 py-2.5 rounded-lg transition shadow-lg"
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