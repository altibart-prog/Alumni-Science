
import React from 'react';
import { 
  FileCheck, MessageSquare, Sparkles, 
  Clock, Search, ArrowRight, Zap,
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
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 relative z-10">
        <div className="w-full text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="px-3 md:px-4 py-1.5 rounded-full bg-[#0da1a1]/10 border border-[#0da1a1]/30 text-[9px] md:text-[10px] font-black text-[#0da1a1] uppercase tracking-widest shadow-[0_0_20px_rgba(13,161,161,0.2)]">
              Central de Inteligência
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter font-heading leading-tight drop-shadow-2xl">
            Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0da1a1] via-white to-cyan-200">{userName}</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mt-4 font-bold leading-relaxed mx-auto lg:mx-0">
            Seu núcleo de pesquisa está online. <span className="text-white">Qual o insight de hoje?</span>
          </p>
        </div>
        
        <div className="flex gap-4 md:gap-6 w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 px-2 lg:px-0 no-scrollbar">
          <div className="flex-shrink-0 group relative bg-[#0c1a2d]/80 backdrop-blur-2xl px-6 md:px-8 py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] border border-[#0da1a1]/30 min-w-[160px] md:min-w-[200px]">
            <p className="text-[9px] md:text-[10px] font-black text-[#0da1a1] uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
              <Zap className="w-3 md:w-4 h-3 md:h-4" /> Créditos
            </p>
            <div className="flex items-end gap-2 md:gap-3">
              <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">100</span>
              <span className="text-[9px] md:text-[11px] text-white font-black bg-[#0da1a1] px-2 py-0.5 rounded-md mb-1.5">+20</span>
            </div>
          </div>
          
          <div className="flex-shrink-0 group relative bg-[#1a0c2e]/80 backdrop-blur-2xl px-6 md:px-8 py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] border border-[#0da1a1]/30 min-w-[160px] md:min-w-[200px]">
            <p className="text-[9px] md:text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
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
          <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 bg-[#0c1a2d]/60 backdrop-blur-3xl group shadow-[0_40px_100px_-20px_rgba(13,161,161,0.2)]">
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#0da1a1]/10 rounded-full blur-[80px] md:blur-[100px] -mr-32 -mt-32 pointer-events-none group-hover:opacity-100 transition-opacity opacity-50"></div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="flex items-start justify-between mb-8 md:mb-12">
                <div className="w-14 h-14 md:w-20 md:h-20 p-4 md:p-5 bg-[#0da1a1]/10 rounded-2xl md:rounded-[2rem] border border-[#0da1a1]/40 shadow-2xl flex items-center justify-center">
                  <FileCheck className="w-7 md:w-10 h-7 md:h-10 text-[#0da1a1]" />
                </div>
                <span className="hidden sm:flex bg-white/5 backdrop-blur-xl border border-white/10 text-white text-[9px] md:text-[10px] font-black px-4 md:px-5 py-2 md:py-2.5 rounded-2xl uppercase tracking-widest items-center gap-2">
                  <Stars className="w-3 md:w-4 h-3 md:h-4 text-[#0da1a1] animate-pulse" />
                  Alumni AI v2.5
                </span>
              </div>
              
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight font-heading tracking-tight text-white">
                  Avaliação de Artigos <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0da1a1] via-white to-cyan-100">
                    Transformação Acadêmica
                  </span>
                </h2>
                <p className="text-blue-100/70 text-base md:text-xl mb-10 md:mb-14 leading-relaxed font-bold max-w-xl mx-auto md:mx-0">
                  Pareceres técnicos fundamentados. Transforme seu manuscrito em referência internacional com nossa IA soberana.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <button 
                  onClick={() => setCurrentView('review')}
                  className="w-full sm:w-auto bg-[#0da1a1] text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-xs md:text-sm hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1"
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

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div 
              onClick={() => setCurrentView('chat')}
              className="bg-[#0c1a2d]/60 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-[#0da1a1]/20 shadow-2xl hover:border-[#0da1a1]/50 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0da1a1]/10 rounded-xl md:rounded-[1.5rem] flex items-center justify-center mb-6 md:mb-8 border border-[#0da1a1]/30">
                <MessageSquare className="w-6 md:w-8 h-6 md:h-8 text-[#0da1a1]" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 font-heading tracking-tight">Chat com PDF</h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 md:mb-8 font-bold">
                Interaja com seus documentos. Extraia insights profundos para sua tese em tempo real.
              </p>
              <span className="text-[#0da1a1] text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2">
                Abrir Portal <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            <div 
              onClick={() => setCurrentView('literature')}
              className="bg-[#0b201a]/60 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-[#0da1a1]/20 shadow-2xl hover:border-[#0da1a1]/50 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0da1a1]/10 rounded-xl md:rounded-[1.5rem] flex items-center justify-center mb-6 md:mb-8 border border-[#0da1a1]/30">
                <Microscope className="w-6 md:w-8 h-6 md:h-8 text-[#0da1a1]" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 font-heading tracking-tight">Rev. Literatura</h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 md:mb-8 font-bold">
                Mapeie o estado da arte e identifique lacunas de inovação em segundos.
              </p>
              <span className="text-[#0da1a1] text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2">
                Explorar Agora <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0da1a1]/60" />
              <input 
                type="text" 
                placeholder="Busca Global Alumni" 
                className="w-full bg-transparent border-none pl-11 pr-4 py-4 text-xs md:text-sm text-white focus:outline-none placeholder:text-slate-600 font-bold"
              />
            </div>
          </div>

          <div className="bg-[#0f172a]/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col h-[400px] md:h-[500px]">
            <div className="p-6 md:p-8 border-b border-white/5 bg-white/[0.02]">
              <h3 className="font-black text-white font-heading text-[10px] uppercase tracking-[0.2em]">Timeline</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              <div className="text-center py-12 md:py-24 opacity-60">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                  <Clock className="w-8 h-8 text-slate-500" />
                </div>
                <p className="text-base md:text-lg font-black text-white mb-1 tracking-tight">Sem atividades</p>
                <p className="text-xs text-slate-500 font-bold">Suas análises aparecerão aqui.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;