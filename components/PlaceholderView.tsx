import React from 'react';
import { Sparkles, LucideIcon } from 'lucide-react';
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
    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 p-16 text-center shadow-sm animate-fade-in">
      <div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-100">
        {Icon && <Icon className="w-12 h-12 text-cyan-600" />}
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-3">{label}</h2>
      <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">{subtitle}</p>
      
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-6 mb-10 max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-cyan-600" />
          <p className="text-base text-cyan-900 font-bold">Em Desenvolvimento</p>
        </div>
        <p className="text-sm text-cyan-700">
          Nossa equipe de engenharia está finalizando os últimos detalhes desta ferramenta. 
          Ela estará disponível na próxima atualização.
        </p>
      </div>
      
      <button 
        onClick={onBack}
        className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition font-medium"
      >
        Voltar ao Dashboard
      </button>
    </div>
  );
};

export default PlaceholderView;