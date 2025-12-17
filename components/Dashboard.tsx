import React from 'react';
import { 
  FileCheck, ChevronRight, BarChart3, MessageSquare, Sparkles, 
  Clock, TrendingUp, Search, ArrowRight, Zap, FileText,
  Activity, Microscope, PenTool, Stars
} from 'lucide-react';
import { ViewState } from '../types';

interface DashboardProps {
  setCurrentView: (view: ViewState) => void;
  userName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentView, userName }) => {
  return (
    <div className="animate-fade-in pb-10 text-slate-200">
      
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-cyan-300 uppercase tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.1)] backdrop-blur-md">
              Laboratório Pessoal
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-[1.1]">
            Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">{userName}</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mt-3 font-medium leading-relaxed">
            Sua central de inteligência está calibrada. <span className="text-white">O que vamos descobrir hoje?</span>
          </p>
        </div>
        
        {/* Holographic Stats Widgets */}
        <div className="flex gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <div className="group relative bg-white/[0.02] backdrop-blur-md px-6 py-5 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 min-w-[170px] overflow-hidden hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3 font-heading flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" /> Créditos
            </p>
            <div className="flex items-end gap-2 relative z-10">
              <span className="text-4xl font-black text-white tracking-tight drop-shadow-lg">100</span>
              <span className="text-[10px] text-cyan-950 font-bold bg-cyan-400 px-2 py-0.5 rounded-md mb-2 shadow-[0_0_15px_rgba(34,211,238,0.6)]">+20</span>
            </div>
          </div>
          
          <div className="group relative bg-white/[0.02] backdrop-blur-md px-6 py-5 rounded-3xl border border-white/10 hover:border-fuchsia-400/30 transition-all duration-500 min-w-[170px] overflow-hidden hover:shadow-[0_0_30px_rgba(232,121,249,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest mb-3 font-heading flex items-center gap-2">
              <Activity className="w-3.5 h-3.5" /> Avaliações
            </p>
            <div className="flex items-end gap-2 relative z-10">
              <span className="text-4xl font-black text-white tracking-tight drop-shadow-lg">12</span>
              <span className="text-[10px] text-slate-400 font-bold mb-2 uppercase">/mês</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 relative z-10">
        {/* Left Column - Main Content */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* Holographic Hero Card */}
          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border border-white/10 group cursor-default bg-white/[0.02] backdrop-blur-xl">
            {/* Holographic Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400/10 via-purple-500/10 to-transparent rounded-full blur-[80px] -mr-24 -mt-24 pointer-events-none group-hover:bg-cyan-400/20 transition duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-fuchsia-500/5 to-transparent rounded-full blur-[60px] -ml-20 -mb-20 pointer-events-none"></div>
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>

            <div className="relative z-10 p-10 sm:p-14">
              <div className="flex items-start justify-between mb-10">
                <div className="w-18 h-18 p-4 bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center">
                  <FileCheck className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
                <span className="bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide flex items-center gap-2 shadow-lg">
                  <Stars className="w-3 h-3 text-cyan-300" />
                  IA Generativa v2.5
                </span>
              </div>
              
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-[1.05] font-heading tracking-tight text-white drop-shadow-xl">
                  Avaliação de Artigos <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 animate-gradient-x">
                    Nível Peer-Review
                  </span>
                </h2>
                <p className="text-blue-100/70 text-lg mb-12 leading-relaxed font-medium max-w-xl">
                  Obtenha um parecer técnico detalhado em segundos. Analise metodologia, ineditismo e estrutura com a precisão dos maiores journals do mundo.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <button 
                  onClick={() => setCurrentView('review')}
                  className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-black hover:bg-cyan-50 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:-translate-y-1 duration-300 font-heading tracking-wide group/btn"
                >
                  <Sparkles className="w-5 h-5 fill-slate-950 text-slate-950" />
                  INICIAR AVALIAÇÃO
                </button>
                <button className="px-8 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition flex items-center gap-2 border border-white/10 hover:border-white/30 tracking-wide backdrop-blur-sm">
                  <Clock className="w-4 h-4 text-cyan-200" />
                  Histórico
                </button>
              </div>
            </div>
          </div>

          {/* Lighter Quick Access Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Chat PDF (Lighter Amber/Orange) */}
            <div 
              onClick={() => setCurrentView('chat')}
              className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-xl hover:shadow-[0_0_40px_rgba(251,146,60,0.1)] hover:border-orange-300/30 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-400/10 rounded-full blur-[80px] group-hover:bg-orange-400/20 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400/10 to-amber-300/10 rounded-2xl flex items-center justify-center mb-6 border border-orange-400/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(251,146,60,0.1)]">
                  <MessageSquare className="w-7 h-7 text-orange-200" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Chat PDF</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  Interaja com documentos. Extraia insights e tire dúvidas instantaneamente.
                </p>
                <span className="text-orange-300 text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Abrir Chat <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Literature Review (Lighter Emerald/Teal) */}
            <div 
              onClick={() => setCurrentView('literature')}
              className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-xl hover:shadow-[0_0_40px_rgba(45,212,191,0.1)] hover:border-teal-300/30 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-teal-400/10 rounded-full blur-[80px] group-hover:bg-teal-400/20 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400/10 to-emerald-300/10 rounded-2xl flex items-center justify-center mb-6 border border-teal-400/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(45,212,191,0.1)]">
                  <Microscope className="w-7 h-7 text-teal-200" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Review Literatura</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  Mapeie o estado da arte. Encontre referências globais para sua pesquisa.
                </p>
                <span className="text-teal-300 text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Iniciar Busca <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar Widgets */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          
          {/* Lighter Search Widget */}
          <div className="bg-white/5 p-2 rounded-3xl border border-white/10 shadow-xl focus-within:ring-1 focus-within:ring-cyan-400/30 transition-all focus-within:bg-white/10 backdrop-blur-md">
            <div className="relative bg-transparent rounded-2xl overflow-hidden">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar (Ctrl + K)" 
                className="w-full bg-transparent border-none pl-12 pr-4 py-4 text-sm text-white focus:outline-none placeholder:text-slate-500 font-bold"
              />
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[450px] relative">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <h3 className="font-bold text-white font-heading text-sm uppercase tracking-wider">Timeline</h3>
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-white/20"></div>
                 <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar relative">
               <div className="absolute left-11 top-8 bottom-8 w-px bg-gradient-to-b from-white/10 to-transparent"></div>

              {/* Empty State */}
              <div className="text-center py-20 opacity-60 relative z-10">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-inner transform rotate-6 backdrop-blur-md">
                  <Clock className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-base font-bold text-white mb-2">Silêncio no Laboratório</p>
                <p className="text-sm text-slate-400 max-w-[180px] mx-auto leading-relaxed">Suas atividades de pesquisa aparecerão aqui.</p>
              </div>
            </div>
            
            <div className="p-6 bg-white/[0.02] border-t border-white/5 backdrop-blur-xl">
              <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-bold text-white uppercase tracking-wider transition-all flex items-center justify-center gap-2 hover:border-white/20 hover:shadow-lg">
                <FileText className="w-4 h-4 text-cyan-300" />
                Upload Rápido
              </button>
            </div>
          </div>

          {/* Bright Promo Widget (Pink/Rose) */}
          <div className="group relative rounded-[2.5rem] p-8 text-white overflow-hidden shadow-2xl border border-white/20 bg-white/[0.05] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-orange-500/10 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                   <PenTool className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-90 drop-shadow-md">Novidade</span>
              </div>
              
              <h4 className="text-2xl font-black mb-3 font-heading drop-shadow-md">Redator Neural</h4>
              <p className="text-sm leading-relaxed mb-8 text-white/80 font-medium">
                Transforme tópicos soltos em parágrafos acadêmicos fundamentados automaticamente.
              </p>
              
              <button 
                onClick={() => setCurrentView('writer')}
                className="w-full text-xs font-black bg-white text-rose-600 hover:bg-rose-50 px-6 py-4 rounded-xl transition shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex justify-between items-center group/btn uppercase tracking-wide"
              >
                <span>Experimentar Agora</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;