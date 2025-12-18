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
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 relative z-10">
        <div className="w-full text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="px-3 md:px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[9px] md:text-[10px] font-black text-cyan-300 uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              Central de Inteligência
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter font-heading leading-tight drop-shadow-2xl">
            Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#e0faff] to-indigo-300">{userName}</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mt-4 font-bold leading-relaxed mx-auto lg:mx-0">
            Seu núcleo de pesquisa está online. <span className="text-white">Qual o insight de hoje?</span>
          </p>
        </div>
        
        {/* Luminous Stats Widgets - Scrollable on mobile */}
        <div className="flex gap-4 md:gap-6 w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 px-2 lg:px-0 no-scrollbar">
          <div className="flex-shrink-0 group relative bg-[#0c1a2d]/80 backdrop-blur-2xl px-6 md:px-8 py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] border border-cyan-500/30 min-w-[160px] md:min-w-[200px]">
            <p className="text-[9px] md:text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
              <Zap className="w-3 md:w-4 h-3 md:h-4" /> Créditos
            </p>
            <div className="flex items-end gap-2 md:gap-3">
              <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">100</span>
              <span className="text-[9px] md:text-[11px] text-cyan-950 font-black bg-cyan-400 px-2 py-0.5 rounded-md mb-1.5">+20</span>
            </div>
          </div>
          
          <div className="flex-shrink-0 group relative bg-[#1a0c2e]/80 backdrop-blur-2xl px-6 md:px-8 py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] border border-fuchsia-500/30 min-w-[160px] md:min-w-[200px]">
            <p className="text-[9px] md:text-[10px] font-black text-fuchsia-400 uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
              <Activity className="w-3 md:w-4 h-3 md:h-4" /> Atividade
            </p>
            <div className="flex items-end gap-2 md:gap-3">
              <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">12</span>
              <span className="text-[10px] text-slate-500 font-black mb-1.5 uppercase tracking-widest">Aval.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Hero Card - Mobile Optimized Padding */}
          <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 bg-[#0c1a2d]/60 backdrop-blur-3xl group">
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-400/10 rounded-full blur-[80px] md:blur-[100px] -mr-32 -mt-32 pointer-events-none group-hover:opacity-100 transition-opacity opacity-50"></div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="flex items-start justify-between mb-8 md:mb-12">
                <div className="w-14 h-14 md:w-20 md:h-20 p-4 md:p-5 bg-cyan-500/10 rounded-2xl md:rounded-[2rem] border border-cyan-400/40 shadow-2xl flex items-center justify-center">
                  <FileCheck className="w-7 md:w-10 h-7 md:h-10 text-cyan-300" />
                </div>
                <span className="hidden sm:flex bg-white/5 backdrop-blur-xl border border-white/10 text-white text-[9px] md:text-[10px] font-black px-4 md:px-5 py-2 md:py-2.5 rounded-2xl uppercase tracking-widest items-center gap-2">
                  <Stars className="w-3 md:w-4 h-3 md:h-4 text-cyan-300 animate-pulse" />
                  IA Generativa v2.5
                </span>
              </div>
              
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight font-heading tracking-tight text-white">
                  Avaliação de Artigos <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-indigo-300">
                    Alta Performance
                  </span>
                </h2>
                <p className="text-blue-100/70 text-base md:text-xl mb-10 md:mb-14 leading-relaxed font-bold max-w-xl mx-auto md:mx-0">
                  Pareceres técnicos instantâneos. Prepare seu manuscrito para journals Q1 do mundo todo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <button 
                  onClick={() => setCurrentView('review')}
                  className="w-full sm:w-auto bg-white text-slate-950 px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-xs md:text-sm hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1"
                >
                  <Sparkles className="w-5 h-5" />
                  INICIAR AVALIAÇÃO
                </button>
                <button className="w-full sm:w-auto px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs text-white hover:bg-white/10 border border-white/10 tracking-widest uppercase flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Histórico
                </button>
              </div>
            </div>
          </div>

          {/* Quick Access Grid - Stacks on mobile */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div 
              onClick={() => setCurrentView('chat')}
              className="bg-[#25150c]/60 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-orange-500/20 shadow-2xl hover:border-orange-400/50 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/10 rounded-xl md:rounded-[1.5rem] flex items-center justify-center mb-6 md:mb-8 border border-orange-400/30">
                <MessageSquare className="w-6 md:w-8 h-6 md:h-8 text-orange-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 font-heading tracking-tight">Chat PDF</h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 md:mb-8 font-bold">
                Interaja com seus documentos. Extraia insights e cite com precisão.
              </p>
              <span className="text-orange-400 text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2">
                Abrir <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            <div 
              onClick={() => setCurrentView('literature')}
              className="bg-[#0b201a]/60 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-teal-500/20 shadow-2xl hover:border-teal-400/50 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-500/10 rounded-xl md:rounded-[1.5rem] flex items-center justify-center mb-6 md:mb-8 border border-teal-400/30">
                <Microscope className="w-6 md:w-8 h-6 md:h-8 text-teal-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 font-heading tracking-tight">Review Literatura</h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 md:mb-8 font-bold">
                Mapeie o estado da arte. Encontre lacunas de pesquisa global.
              </p>
              <span className="text-teal-400 text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2">
                Explorar <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Stacked on mobile */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Search bar - Mobile height reduction */}
          <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/60" />
              <input 
                type="text" 
                placeholder="Busca Global" 
                className="w-full bg-transparent border-none pl-11 pr-4 py-4 text-xs md:text-sm text-white focus:outline-none placeholder:text-slate-600 font-bold"
              />
            </div>
          </div>

          <div className="bg-[#0f172a]/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col h-[400px] md:h-[500px]">
            <div className="p-6 md:p-8 border-b border-white/5 bg-white/[0.02]">
              <h3 className="font-black text-white font-heading text-[10px] uppercase tracking-[0.2em]">Timeline Ativa</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              <div className="text-center py-12 md:py-24 opacity-60">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                  <Clock className="w-8 h-8 text-slate-500" />
                </div>
                <p className="text-base md:text-lg font-black text-white mb-1 tracking-tight">Sem atividades</p>
                <p className="text-xs text-slate-500 font-bold">Suas interações aparecerão aqui.</p>
              </div>
            </div>
          </div>

          {/* Neural Writer Promo - More compact on mobile */}
          <div className="group relative rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 text-white overflow-hidden border border-[#f43f5e]/30 bg-[#200e12]/60 backdrop-blur-3xl transition-all">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#f43f5e]/20 rounded-xl border border-[#f43f5e]/30">
                   <PenTool className="w-4 h-4 text-[#f43f5e]" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-[#f43f5e]">Exclusivo PRO</span>
              </div>
              
              <h4 className="text-2xl font-black mb-3 font-heading tracking-tight">Redator Neural</h4>
              <p className="text-sm md:text-base leading-relaxed mb-8 text-slate-300 font-bold">
                Acelere sua escrita científica com fundamentos densos.
              </p>
              
              <button 
                onClick={() => setCurrentView('writer')}
                className="w-full text-[10px] font-black bg-white text-[#f43f5e] px-6 py-4 rounded-xl transition-all shadow-xl flex justify-between items-center uppercase tracking-widest"
              >
                <span>Ativar Módulo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;