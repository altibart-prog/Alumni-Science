import React from 'react';
import { 
  FileCheck, ChevronRight, BarChart3, MessageSquare, Sparkles 
} from 'lucide-react';
import { ViewState } from '../types';

interface DashboardProps {
  setCurrentView: (view: ViewState) => void;
  userName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentView, userName }) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Bom dia, <span className="text-cyan-600">{userName}.</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Seu laboratório de inteligência artificial está pronto. Qual é a descoberta de hoje?
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Card - Avaliação de Artigos */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-slate-900/10 h-full flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <FileCheck className="w-8 h-8 text-cyan-400" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Avaliação de Artigos</h2>
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Parecer "ad hoc" completo em segundos. Análise metodologia, redação e ineditismo com rigor científico.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button 
                  onClick={() => setCurrentView('review')}
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3.5 rounded-xl transition flex items-center gap-2 font-semibold shadow-lg shadow-cyan-900/20 hover:scale-105 transform duration-200"
                >
                  Iniciar Nova Análise
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 text-sm text-gray-400 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-slate-700"></div>
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-slate-700"></div>
                    <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-slate-700"></div>
                  </div>
                  <span className="font-medium">+1k avaliações</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Card - Revisão de Literatura */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-cyan-50 rounded-lg">
              <BarChart3 className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Revisão de Literatura</h3>
          </div>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Encontre o "Estado da Arte" com fontes verificadas.
          </p>
          
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Ex: Impacto da IA na educação médica..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-lg hover:bg-cyan-600 transition shadow-md">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4 mt-auto">
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase">Artigos Avaliados</span>
                <span className="bg-emerald-200 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">+12%</span>
              </div>
              <p className="text-3xl font-bold text-emerald-700">0</p>
            </div>

            <div className="bg-violet-50 border border-violet-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold tracking-wider text-violet-800 uppercase">Horas Economizadas</span>
                <span className="bg-violet-200 text-violet-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Top 5%</span>
              </div>
              <p className="text-3xl font-bold text-violet-700">0h</p>
            </div>
          </div>
        </div>

        {/* Additional Cards */}
        <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
          <div 
            onClick={() => setCurrentView('chat')}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition cursor-pointer group flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-300">
              <MessageSquare className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">Chat PDF</h3>
              <p className="text-gray-500">Converse diretamente com seus documentos e artigos.</p>
            </div>
          </div>

          <div 
            onClick={() => setCurrentView('agents')}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-amber-200 transition cursor-pointer group flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-300">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition">Alumni Lab</h3>
              <p className="text-gray-500">Crie, treine e gerencie seus assistentes especializados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;