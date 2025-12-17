import React from 'react';
import { Sparkles, LucideIcon, Construction } from 'lucide-react';
import { ViewState } from '../types';

interface PlaceholderViewProps {
  view: ViewState;
  icon?: LucideIcon;
  label: string;
  subtitle: string;
  onBack: () => void;
}

const PlaceholderView: React.FC<PlaceholderViewProps> = ({ 
  icon: Icon, 
  label, 
  subtitle, 
  onBack 
}) => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-1 relative animate-fade-in">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] border border-white/10 p-16 text-center shadow-2xl">
        <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-xl shadow-cyan-900/20">
          {Icon ? <Icon className="w-10 h-10 text-cyan-300" /> : <Construction className="w-10 h-10 text-slate-500" />}
        </div>
        
        <h2 className="text-4xl font-extrabold text-white mb-4 font-heading">{label}</h2>
        <p className="text-slate-300 text-lg mb-12 max-w-lg mx-auto leading-relaxed">{subtitle}</p>
        
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-6 mb-12 max-w-lg mx-auto backdrop-blur-md">
          <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
             <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse" />
          </div>
          <div className="text-left">
            <p className="text-sm text-cyan-200 font-bold mb-1">Em Desenvolvimento</p>
            <p className="text-xs text-slate-400 leading-relaxed">
                Nossa equipe de engenharia está finalizando os últimos detalhes desta ferramenta neural. Disponível na próxima atualização (v2.5).
            </p>
          </div>
        </div>
        
        <button 
          onClick={onBack}
          className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl transition-all hover:scale-105 font-bold text-sm tracking-wide"
        >
          Voltar ao Dashboard
        </button>
      </div>
    </div>
  );
};

export default PlaceholderView;