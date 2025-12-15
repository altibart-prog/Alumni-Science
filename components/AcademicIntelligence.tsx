import React, { useState } from 'react';
import { 
  Atom, FlaskConical, Wrench, Heart, Sprout, Scale, Users, PenTool, LayoutGrid, ChevronLeft, BookOpen, CheckCircle, Sparkles
} from 'lucide-react';

interface Area {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  subAreas: string[];
}

const AcademicIntelligence: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  // Dados baseados no CNPq
  const areas: Area[] = [
    {
      id: '10000003',
      name: 'Ciências Exatas e da Terra',
      icon: Atom,
      color: 'bg-blue-500',
      subAreas: [
        'Matemática', 'Probabilidade e Estatística', 'Ciência da Computação', 
        'Astronomia', 'Física', 'Química', 'Geociências', 'Oceanografia'
      ]
    },
    {
      id: '20000006',
      name: 'Ciências Biológicas',
      icon: FlaskConical,
      color: 'bg-green-500',
      subAreas: [
        'Biologia Geral', 'Genética', 'Botânica', 'Zoologia', 'Ecologia', 
        'Morfologia', 'Fisiologia', 'Bioquímica', 'Biofísica', 'Farmacologia',
        'Imunologia', 'Microbiologia', 'Parasitologia'
      ]
    },
    {
      id: '30000009',
      name: 'Engenharias',
      icon: Wrench,
      color: 'bg-indigo-500',
      subAreas: [
        'Engenharia Civil', 'Engenharia de Minas', 'Engenharia de Materiais e Metalúrgica',
        'Engenharia Elétrica', 'Engenharia Mecânica', 'Engenharia Química',
        'Engenharia Sanitária', 'Engenharia de Produção', 'Engenharia Nuclear',
        'Engenharia de Transportes', 'Engenharia Naval e Oceânica', 
        'Engenharia Aeroespacial', 'Engenharia Biomédica'
      ]
    },
    {
      id: '40000001',
      name: 'Ciências da Saúde',
      icon: Heart,
      color: 'bg-red-500',
      subAreas: [
        'Medicina', 'Odontologia', 'Farmácia', 'Enfermagem', 'Nutrição',
        'Saúde Coletiva', 'Fonoaudiologia', 'Fisioterapia e Terapia Ocupacional',
        'Educação Física'
      ]
    },
    {
      id: '50000004',
      name: 'Ciências Agrárias',
      icon: Sprout,
      color: 'bg-emerald-500',
      subAreas: [
        'Agronomia', 'Recursos Florestais e Eng. Florestal', 'Engenharia Agrícola',
        'Zootecnia', 'Medicina Veterinária', 'Recursos Pesqueiros e Eng. de Pesca',
        'Ciência e Tecnologia de Alimentos'
      ]
    },
    {
      id: '60000007',
      name: 'Ciências Sociais Aplicadas',
      icon: Scale,
      color: 'bg-violet-500',
      subAreas: [
        'Direito', 'Administração', 'Economia', 'Arquitetura e Urbanismo',
        'Planejamento Urbano e Regional', 'Demografia', 'Ciência da Informação',
        'Museologia', 'Comunicação', 'Serviço Social', 'Economia Doméstica',
        'Desenho Industrial', 'Turismo'
      ]
    },
    {
      id: '70000000',
      name: 'Ciências Humanas',
      icon: Users,
      color: 'bg-orange-500',
      subAreas: [
        'Filosofia', 'Sociologia', 'Antropologia', 'Arqueologia', 'História',
        'Geografia', 'Psicologia', 'Educação', 'Ciência Política', 'Teologia'
      ]
    },
    {
      id: '80000002',
      name: 'Linguística, Letras e Artes',
      icon: PenTool,
      color: 'bg-pink-500',
      subAreas: [
        'Linguística', 'Letras', 'Artes'
      ]
    },
    {
      id: '90000005',
      name: 'Multidisciplinar',
      icon: LayoutGrid,
      color: 'bg-slate-500',
      subAreas: [
        'Interdisciplinar', 'Ensino', 'Materiais', 'Biotecnologia', 'Ciências Ambientais'
      ]
    }
  ];

  if (selectedArea) {
    return (
      <div className="animate-fade-in max-w-6xl mx-auto">
        <button 
          onClick={() => setSelectedArea(null)}
          className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition mb-6 font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar para Grandes Áreas
        </button>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-4 mb-2">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedArea.color} bg-opacity-10`}>
                <selectedArea.icon className={`w-6 h-6 ${selectedArea.color.replace('bg-', 'text-')}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{selectedArea.name}</h2>
                <p className="text-slate-500">Selecione sua área específica de atuação para ver os critérios.</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedArea.subAreas.map((subArea, index) => (
                <button 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-cyan-500 hover:shadow-md hover:bg-cyan-50/30 transition text-left group"
                >
                  <span className="font-medium text-slate-700 group-hover:text-cyan-800">{subArea}</span>
                  <ChevronRightIcon className="w-4 h-4 text-slate-300 group-hover:text-cyan-500" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold tracking-wide uppercase mb-6">
        <Sparkles className="w-3 h-3" />
        Configuração Inicial
      </div>
      
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2 text-center">
        Qual sua área de atuação?
      </h1>
      <p className="text-slate-500 text-lg mb-12 text-center max-w-2xl">
        Personalizaremos os critérios de avaliação e as sugestões de inteligência artificial baseados nas diretrizes do CNPq para sua área.
      </p>

      <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
           <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">1</div>
           <span className="text-lg font-bold text-slate-700">Selecione a Grande Área</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => setSelectedArea(area)}
              className="flex flex-col items-start p-6 rounded-2xl border border-slate-100 bg-white hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group h-full"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${area.color} bg-opacity-10 group-hover:bg-opacity-20`}>
                <area.icon className={`w-6 h-6 ${area.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors text-left leading-snug">
                {area.name.toUpperCase()}
              </h3>
              <p className="text-xs text-slate-400 font-medium text-left mt-auto pt-2">
                {area.subAreas.length} áreas
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default AcademicIntelligence;