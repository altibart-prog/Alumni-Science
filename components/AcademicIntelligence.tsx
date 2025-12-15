import React, { useState } from 'react';
import { 
  Atom, FlaskConical, Wrench, Heart, Sprout, Scale, Users, PenTool, LayoutGrid, 
  ChevronLeft, ArrowRight, Target, ShieldCheck, BarChart3, 
  Search, Settings, FileText, Globe, BookCopy,
  Layers
} from 'lucide-react';

// --- Types ---
interface Area {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  glow: string;
  gradient: string;
  subAreas: string[];
}

interface SubModule {
  id: string;
  label: string;
}

interface SystemModule {
  code: string; 
  title: string;
  description: string;
  icon: React.ElementType;
  subModules: SubModule[]; 
  status: 'active' | 'beta' | 'locked';
  theme: 'cyan' | 'emerald' | 'indigo' | 'violet' | 'amber' | 'blue' | 'rose' | 'slate';
}

const AcademicIntelligence: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  // --- Dados das Áreas (Taxonomia CNPq) ---
  const areas: Area[] = [
    {
      id: '1.00.00.00-3', name: 'Ciências Exatas e da Terra', icon: Atom,
      color: 'text-cyan-400', glow: 'rgba(34, 211, 238, 0.4)',
      gradient: 'from-cyan-500/20 to-blue-600/20',
      subAreas: [
        'Matemática', 'Probabilidade e Estatística', 'Ciência da Computação', 
        'Astronomia', 'Física', 'Química', 'Geociências', 'Oceanografia'
      ]
    },
    {
      id: '2.00.00.00-6', name: 'Ciências Biológicas', icon: FlaskConical,
      color: 'text-emerald-400', glow: 'rgba(52, 211, 153, 0.4)',
      gradient: 'from-emerald-500/20 to-green-600/20',
      subAreas: [
        'Biologia Geral', 'Genética', 'Botânica', 'Zoologia', 'Ecologia', 
        'Morfologia', 'Fisiologia', 'Bioquímica', 'Biofísica', 'Farmacologia', 
        'Imunologia', 'Microbiologia', 'Parasitologia'
      ]
    },
    {
      id: '3.00.00.00-9', name: 'Engenharias', icon: Wrench,
      color: 'text-indigo-400', glow: 'rgba(129, 140, 248, 0.4)',
      gradient: 'from-indigo-500/20 to-violet-600/20',
      subAreas: [
        'Engenharia Civil', 'Engenharia de Minas', 'Engenharia de Materiais e Metalúrgica', 
        'Engenharia Elétrica', 'Engenharia Mecânica', 'Engenharia Química', 
        'Engenharia Sanitária', 'Engenharia de Produção', 'Engenharia Nuclear', 
        'Engenharia de Transportes', 'Engenharia Naval e Oceânica', 
        'Engenharia Aeroespacial', 'Engenharia Biomédica'
      ]
    },
    {
      id: '4.00.00.00-1', name: 'Ciências da Saúde', icon: Heart,
      color: 'text-rose-400', glow: 'rgba(251, 113, 133, 0.4)',
      gradient: 'from-rose-500/20 to-red-600/20',
      subAreas: [
        'Medicina', 'Odontologia', 'Farmácia', 'Enfermagem', 'Nutrição', 
        'Saúde Coletiva', 'Fonoaudiologia', 'Fisioterapia e Terapia Ocupacional', 
        'Educação Física'
      ]
    },
    {
      id: '5.00.00.00-4', name: 'Ciências Agrárias', icon: Sprout,
      color: 'text-lime-400', glow: 'rgba(163, 230, 53, 0.4)',
      gradient: 'from-lime-500/20 to-green-600/20',
      subAreas: [
        'Agronomia', 'Recursos Florestais e Engenharia Florestal', 
        'Engenharia Agrícola', 'Zootecnia', 'Medicina Veterinária', 
        'Recursos Pesqueiros e Engenharia de Pesca', 'Ciência e Tecnologia de Alimentos'
      ]
    },
    {
      id: '6.00.00.00-7', name: 'Ciências Sociais Aplicadas', icon: Scale,
      color: 'text-amber-400', glow: 'rgba(251, 191, 36, 0.4)',
      gradient: 'from-amber-500/20 to-orange-600/20',
      subAreas: [
        'Direito', 'Administração', 'Economia', 'Arquitetura e Urbanismo', 
        'Planejamento Urbano e Regional', 'Demografia', 'Ciência da Informação', 
        'Museologia', 'Comunicação', 'Serviço Social', 'Economia Doméstica', 
        'Desenho Industrial', 'Turismo'
      ]
    },
    {
      id: '7.00.00.00-0', name: 'Ciências Humanas', icon: Users,
      color: 'text-orange-400', glow: 'rgba(251, 146, 60, 0.4)',
      gradient: 'from-orange-500/20 to-red-600/20',
      subAreas: [
        'Filosofia', 'Sociologia', 'Antropologia', 'Arqueologia', 'História', 
        'Geografia', 'Psicologia', 'Educação', 'Ciência Política', 'Teologia'
      ]
    },
    {
      id: '8.00.00.00-2', name: 'Linguística, Letras e Artes', icon: PenTool,
      color: 'text-fuchsia-400', glow: 'rgba(232, 121, 249, 0.4)',
      gradient: 'from-fuchsia-500/20 to-pink-600/20',
      subAreas: [
        'Linguística', 'Letras', 'Artes'
      ]
    },
    {
      id: '9.00.00.00-5', name: 'Outra / Multidisciplinar', icon: LayoutGrid,
      color: 'text-slate-300', glow: 'rgba(203, 213, 225, 0.4)',
      gradient: 'from-slate-700/50 to-slate-800/50',
      subAreas: [
        'Multidisciplinar', 'Ensino', 'Ensino de Ciências e Matemática', 
        'Ciências Ambientais', 'Biotecnologia', 'Defesa', 'Divulgação Científica', 
        'Segurança Contra Incêndio', 'Microeletrônica', 'Robótica'
      ]
    }
  ];

  // --- Módulos Estruturados (A-H) ---
  const systemModules: SystemModule[] = [
    {
      code: 'MÓDULO A',
      title: 'Critérios CAPES & Docs',
      description: 'Motor de regras core, documentos de área e definições oficiais.',
      icon: ShieldCheck,
      status: 'active',
      theme: 'cyan',
      subModules: [
        { id: 'A1', label: 'Repositório Oficial' },
        { id: 'A2', label: 'Navegação por Temas' },
        { id: 'A3', label: 'Motor de Regras (Engine)' },
        { id: 'A4', label: 'Chat Contextual (RAG)' }
      ]
    },
    {
      code: 'MÓDULO B',
      title: 'Revistas Nacionais (Qualis)',
      description: 'Ecossistema brasileiro. Foco em periódicos locais, SciELO e avaliação Capes.',
      icon: BookCopy,
      status: 'active',
      theme: 'emerald',
      subModules: [
        { id: 'B1', label: 'Consulta Qualis Unificado' },
        { id: 'B2', label: 'Indexação SciELO/Redalyc' },
        { id: 'B3', label: 'Adequação Regional' }
      ]
    },
    {
      code: 'MÓDULO C',
      title: 'International Journals',
      description: 'Alcance global. Periódicos de alto fator de impacto (JCR/SJR).',
      icon: Globe,
      status: 'active',
      theme: 'indigo',
      subModules: [
        { id: 'C1', label: 'Web of Science & Scopus' },
        { id: 'C2', label: 'Predatory Check (Lista Negra)' },
        { id: 'C3', label: 'High Impact Matcher' }
      ]
    },
    {
      code: 'MÓDULO D',
      title: 'Indicadores e Métricas',
      description: 'Hub de métricas normalizadas, CiteScore, Fator de Impacto e h-index.',
      icon: BarChart3,
      status: 'active',
      theme: 'violet',
      subModules: [
        { id: 'D1', label: 'Análise de Citações' },
        { id: 'D2', label: 'Rastreabilidade de Dados' },
        { id: 'D3', label: 'Score Alumni' }
      ]
    },
    {
      code: 'MÓDULO E',
      title: 'Busca e Recomendação',
      description: 'Ferramentas de decisão baseadas em IA para encontrar o "Perfect Fit".',
      icon: Search,
      status: 'active',
      theme: 'amber',
      subModules: [
        { id: 'E1', label: 'Busca Semântica Avançada' },
        { id: 'E2', label: 'Comparador Lado a Lado' },
        { id: 'E3', label: 'Recomendador Inteligente' }
      ]
    },
    {
      code: 'MÓDULO F',
      title: 'Perfis e Gestão (SaaS)',
      description: 'Controle de acesso, planos institucionais e gestão de pesquisadores.',
      icon: Users,
      status: 'active',
      theme: 'blue',
      subModules: [
        { id: 'F1', label: 'Planos & Níveis' },
        { id: 'F2', label: 'Controle RBAC' },
        { id: 'F3', label: 'Equipes de Pesquisa' }
      ]
    },
    {
      code: 'MÓDULO G',
      title: 'Relatórios Executivos',
      description: 'Geração automática de documentos, mapas de produção e radares.',
      icon: FileText,
      status: 'beta',
      theme: 'rose',
      subModules: [
        { id: 'G1', label: 'Relatório "Guia da Área"' },
        { id: 'G2', label: 'Radar de Oportunidades' },
        { id: 'G3', label: 'Exportação CSV/XLSX' }
      ]
    },
    {
      code: 'MÓDULO H',
      title: 'Administração do Sistema',
      description: 'Backoffice para curadoria de dados e validação de regras.',
      icon: Settings,
      status: 'locked',
      theme: 'slate',
      subModules: [
        { id: 'H1', label: 'Gestão de Documentos' },
        { id: 'H2', label: 'Validação de Revistas' },
        { id: 'H3', label: 'Editor de Regras UI' }
      ]
    }
  ];

  // Helper para classes de cores
  const getThemeClasses = (theme: string, type: 'bg' | 'text' | 'border' | 'gradient' | 'glow' | 'chip' | 'submoduleBg') => {
    const themes: any = {
      cyan: {
        bg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
        text: 'text-cyan-400 group-hover:text-cyan-300',
        border: 'border-cyan-500/30 group-hover:border-cyan-500/60',
        gradient: 'from-cyan-400 to-blue-500',
        glow: 'shadow-[0_0_30px_rgba(34,211,238,0.2)]',
        chip: 'bg-cyan-950 text-cyan-400 border-cyan-800',
        submoduleBg: 'hover:bg-cyan-500/10 hover:border-cyan-500/30'
      },
      emerald: {
        bg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
        text: 'text-emerald-400 group-hover:text-emerald-300',
        border: 'border-emerald-500/30 group-hover:border-emerald-500/60',
        gradient: 'from-emerald-400 to-green-500',
        glow: 'shadow-[0_0_30px_rgba(52,211,153,0.2)]',
        chip: 'bg-emerald-950 text-emerald-400 border-emerald-800',
        submoduleBg: 'hover:bg-emerald-500/10 hover:border-emerald-500/30'
      },
      indigo: {
        bg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
        text: 'text-indigo-400 group-hover:text-indigo-300',
        border: 'border-indigo-500/30 group-hover:border-indigo-500/60',
        gradient: 'from-indigo-400 to-violet-600',
        glow: 'shadow-[0_0_30px_rgba(129,140,248,0.2)]',
        chip: 'bg-indigo-950 text-indigo-400 border-indigo-800',
        submoduleBg: 'hover:bg-indigo-500/10 hover:border-indigo-500/30'
      },
      violet: {
        bg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
        text: 'text-violet-400 group-hover:text-violet-300',
        border: 'border-violet-500/30 group-hover:border-violet-500/60',
        gradient: 'from-violet-400 to-fuchsia-500',
        glow: 'shadow-[0_0_30px_rgba(167,139,250,0.2)]',
        chip: 'bg-violet-950 text-violet-400 border-violet-800',
        submoduleBg: 'hover:bg-violet-500/10 hover:border-violet-500/30'
      },
      amber: {
        bg: 'bg-amber-500/10 group-hover:bg-amber-500/20',
        text: 'text-amber-400 group-hover:text-amber-300',
        border: 'border-amber-500/30 group-hover:border-amber-500/60',
        gradient: 'from-amber-400 to-orange-500',
        glow: 'shadow-[0_0_30px_rgba(251,191,36,0.2)]',
        chip: 'bg-amber-950 text-amber-400 border-amber-800',
        submoduleBg: 'hover:bg-amber-500/10 hover:border-amber-500/30'
      },
      blue: {
        bg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
        text: 'text-blue-400 group-hover:text-blue-300',
        border: 'border-blue-500/30 group-hover:border-blue-500/60',
        gradient: 'from-blue-400 to-sky-500',
        glow: 'shadow-[0_0_30px_rgba(96,165,250,0.2)]',
        chip: 'bg-blue-950 text-blue-400 border-blue-800',
        submoduleBg: 'hover:bg-blue-500/10 hover:border-blue-500/30'
      },
      rose: {
        bg: 'bg-rose-500/10 group-hover:bg-rose-500/20',
        text: 'text-rose-400 group-hover:text-rose-300',
        border: 'border-rose-500/30 group-hover:border-rose-500/60',
        gradient: 'from-rose-400 to-pink-600',
        glow: 'shadow-[0_0_30px_rgba(251,113,133,0.2)]',
        chip: 'bg-rose-950 text-rose-400 border-rose-800',
        submoduleBg: 'hover:bg-rose-500/10 hover:border-rose-500/30'
      },
      slate: {
        bg: 'bg-slate-700/10 group-hover:bg-slate-700/20',
        text: 'text-slate-400 group-hover:text-slate-300',
        border: 'border-slate-700/30 group-hover:border-slate-700/60',
        gradient: 'from-slate-400 to-slate-600',
        glow: 'shadow-none',
        chip: 'bg-slate-900 text-slate-500 border-slate-800',
        submoduleBg: 'hover:bg-slate-700/10 hover:border-slate-700/30'
      }
    };
    return themes[theme][type];
  };

  // --- View: Seleção de Módulos (Dashboard da Área) ---
  if (selectedArea) {
    return (
      <div className="animate-fade-in pb-12 w-full">
        {/* Top Bar Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 bg-[#020617]/90 backdrop-blur-xl p-6 rounded-3xl border border-white/10 sticky top-0 z-30 shadow-2xl">
          <div className="flex items-center gap-6">
             <button 
                onClick={() => setSelectedArea(null)}
                className="p-3 rounded-2xl bg-[#0f172a] hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-white/20 group"
             >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
             </button>
             <div className="hidden md:block h-10 w-px bg-white/10"></div>
             <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 shadow-lg`}>
                   <selectedArea.icon className={`w-6 h-6 ${selectedArea.color}`} />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-white leading-tight font-heading tracking-tight">{selectedArea.name}</h2>
                   <div className="flex items-center gap-2 mt-1">
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        CONNECTED
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">ID: {selectedArea.id}</span>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="hidden xl:flex items-center gap-8">
             <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status do Motor</span>
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-3 bg-cyan-500/40 rounded-sm animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>)}
                </div>
             </div>
             <div className="w-px h-8 bg-white/5"></div>
             <div className="text-right">
                <p className="text-[10px] text-slate-500 font-mono">LAST SYNC</p>
                <p className="text-xs font-bold text-slate-300 font-mono">14:02:45 UTC</p>
             </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {systemModules.map((module) => {
             const isLocked = module.status === 'locked';
             const Icon = module.icon;
             
             // Styles
             const borderClass = getThemeClasses(module.theme, 'border');
             const textClass = getThemeClasses(module.theme, 'text');
             const bgClass = getThemeClasses(module.theme, 'bg');
             const gradClass = getThemeClasses(module.theme, 'gradient');
             const chipClass = getThemeClasses(module.theme, 'chip');
             const subModHover = getThemeClasses(module.theme, 'submoduleBg');

             return (
                <div 
                   key={module.code}
                   className={`
                      group relative overflow-hidden rounded-[2rem] bg-[#0b0f19] border border-white/5 
                      transition-all duration-500 hover:-translate-y-2 hover:border-opacity-100
                      flex flex-col h-full
                      ${isLocked ? 'opacity-50 grayscale cursor-not-allowed' : 'hover:shadow-2xl cursor-pointer'}
                      ${borderClass}
                   `}
                >
                   {/* Top Highlight Line */}
                   {!isLocked && <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>}

                   {/* Module Header */}
                   <div className="p-8 pb-4 relative z-10">
                      <div className="flex justify-between items-start mb-6">
                         <div className={`w-16 h-16 rounded-2xl ${bgClass} flex items-center justify-center border ${borderClass} shadow-lg transition-all duration-500 group-hover:scale-110`}>
                            <Icon className={`w-8 h-8 ${textClass}`} />
                         </div>
                         <div className="flex flex-col items-end gap-2">
                             <span className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-widest border ${chipClass} shadow-inner shadow-black/30`}>
                                {module.code}
                             </span>
                             {module.status === 'beta' && <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">BETA</span>}
                         </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 font-heading tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                         {module.title}
                      </h3>
                      <p className="text-base text-slate-400 leading-relaxed font-medium">
                         {module.description}
                      </p>
                   </div>

                   {/* Sub-Modules Grid (The "Chips") */}
                   <div className="p-8 pt-4 flex-1 flex flex-col gap-4">
                      <div className="w-full h-px bg-white/5 mb-2"></div>
                      <div className="grid grid-cols-1 gap-2.5">
                         {module.subModules.map((sub) => (
                            <div key={sub.id} className={`flex items-center gap-4 p-3 rounded-xl bg-black/20 border border-white/5 transition-all duration-300 group/item shadow-inner ${!isLocked && subModHover}`}>
                               <span className={`
                                  flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg 
                                  text-[10px] font-mono font-bold border transition-all shadow-lg
                                  ${isLocked ? 'bg-slate-800 text-slate-600 border-slate-700' : `${chipClass} group-hover/item:scale-105`}
                               `}>
                                  {sub.id}
                               </span>
                               <span className={`text-sm font-semibold transition-colors ${isLocked ? 'text-slate-600' : 'text-slate-300 group-hover/item:text-white'}`}>
                                  {sub.label}
                               </span>
                            </div>
                         ))}
                      </div>
                   </div>

                   {/* Footer Action */}
                   {!isLocked && (
                      <div className="px-8 py-5 bg-[#020617]/50 border-t border-white/5 flex items-center justify-between group-hover:bg-white/[0.02] transition-colors">
                         <span className={`text-[10px] font-bold uppercase tracking-widest ${textClass} opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-2`}>
                            <Layers className="w-3 h-3" />
                            Acessar Ambiente
                         </span>
                         <div className={`p-2 rounded-full ${bgClass} transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-lg group-hover:shadow-${module.theme}-500/20`}>
                            <ArrowRight className={`w-3.5 h-3.5 ${textClass}`} />
                         </div>
                      </div>
                   )}
                   
                   {/* Background Ambient Glow */}
                   {!isLocked && (
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br ${gradClass} opacity-0 group-hover:opacity-10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700`}></div>
                   )}
                </div>
             );
          })}
        </div>
      </div>
    );
  }

  // --- View: Seleção de Área (Grid Original) ---
  return (
    <div className="animate-fade-in max-w-[1400px] mx-auto flex flex-col items-center justify-center min-h-[80vh]">
      
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-wide uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Target className="w-3 h-3" />
            Calibração de Contexto
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight">
            Selecione a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Grande Área</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            O sistema irá carregar os <span className="text-slate-200 font-bold border-b border-cyan-500/30">Módulos de Inteligência (A-H)</span> com as regras específicas do CNPq para sua especialidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4">
        {areas.map((area) => (
          <button
            key={area.id}
            onClick={() => setSelectedArea(area)}
            className="group relative flex flex-col items-start p-8 rounded-[2rem] bg-[#0f172a]/40 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden text-left hover:shadow-2xl"
          >
            {/* Hover Glow Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 w-full h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#020617] border border-white/5 group-hover:border-white/20 transition-colors shadow-lg shadow-black/50">
                    <area.icon className={`w-8 h-8 ${area.color} transition-all duration-300`} style={{ filter: 'drop-shadow(0 0 0 transparent)' }} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors leading-tight font-heading">
                    {area.name}
                </h3>
                
                <div className="mt-auto pt-6 flex items-center justify-between w-full border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        {area.subAreas.length} Subáreas
                    </span>
                    <div className={`p-1.5 rounded-full bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-${area.color.split('-')[1]}-500/20 transition-all`}>
                        <ArrowRight className={`w-3 h-3 group-hover:${area.color} transition-colors`} />
                    </div>
                </div>
            </div>
            
            {/* Active Glow on Hover Icon */}
            <style>{`
                .group:hover .${area.color} {
                    filter: drop-shadow(0 0 12px ${area.glow}) !important;
                }
            `}</style>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AcademicIntelligence;