import React, { useState, useEffect } from 'react';
import { 
  Atom, FlaskConical, Wrench, Heart, Sprout, Scale, Users, PenTool, LayoutGrid, 
  ChevronLeft, ArrowRight, Target, ShieldCheck, BarChart3, 
  Search, Settings, FileText, Globe, BookCopy,
  Layers, ChevronRight, GraduationCap, Zap, Sparkles, Divide,
  Cpu, GitBranch, Share2,  Box, Gavel, ScrollText, CheckCircle2, XCircle, Info,
  Database, Gauge, Award, Lightbulb
} from 'lucide-react';

// --- Types ---
interface Area {
  id: string;
  name: string;
  icon: React.ElementType;
  theme: 'cyan' | 'emerald' | 'indigo' | 'rose' | 'lime' | 'amber' | 'orange' | 'fuchsia' | 'slate';
  description: string;
  specificAreas: string[];
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
  theme: 'cyan' | 'emerald' | 'indigo' | 'violet' | 'amber' | 'blue' | 'rose' | 'slate' | 'orange';
}

const AcademicIntelligence: React.FC = () => {
  const [selectedMajorArea, setSelectedMajorArea] = useState<Area | null>(null);
  const [selectedSpecificArea, setSelectedSpecificArea] = useState<string | null>(null);
  const [activeModule, setActiveModule] = useState<string | null>(null);

  // Law Dashboard State
  const [simJournalLevel, setSimJournalLevel] = useState<string>('1');
  const [simArticleMerit, setSimArticleMerit] = useState<string>('yes');

  // Módulo I Simulator State
  const [techCategory, setTechCategory] = useState<string>('Patente');
  const [scoreInnovation, setScoreInnovation] = useState<number>(3); // 1-5
  const [scoreComplexity, setScoreComplexity] = useState<number>(3); // 1-5
  const [scoreImpact, setScoreImpact] = useState<number>(3); // 1-5
  const [scoreApplicability, setScoreApplicability] = useState<number>(3); // 1-5

  // --- Full CNPq Taxonomy (9 Major Areas) ---
  const areas: Area[] = [
    {
      id: '1', name: 'Ciências Exatas e da Terra', icon: Atom, theme: 'cyan',
      description: 'Matemática, Física, Química, Computação e Geociências.',
      specificAreas: ['Matemática', 'Física', 'Química', 'Ciência da Computação', 'Geociências', 'Estatística']
    },
    {
      id: '2', name: 'Ciências Biológicas', icon: FlaskConical, theme: 'emerald',
      description: 'Genética, Botânica, Zoologia, Ecologia e Morfologia.',
      specificAreas: ['Biologia Geral', 'Genética', 'Botânica', 'Zoologia', 'Ecologia', 'Bioquímica']
    },
    {
      id: '3', name: 'Engenharias', icon: Wrench, theme: 'indigo',
      description: 'Civil, Elétrica, Mecânica, Química e de Produção.',
      specificAreas: ['Engenharia Civil', 'Engenharia Elétrica', 'Engenharia Mecânica', 'Engenharia de Produção']
    },
    {
      id: '4', name: 'Ciências da Saúde', icon: Heart, theme: 'rose',
      description: 'Medicina, Odontologia, Farmácia e Enfermagem.',
      specificAreas: ['Medicina', 'Odontologia', 'Farmácia', 'Enfermagem', 'Saúde Coletiva']
    },
    {
      id: '5', name: 'Ciências Agrárias', icon: Sprout, theme: 'lime',
      description: 'Agronomia, Zootecnia e Recursos Florestais.',
      specificAreas: ['Agronomia', 'Zootecnia', 'Medicina Veterinária', 'Recursos Pesqueiros']
    },
    {
      id: '6', name: 'Ciências Sociais Aplicadas', icon: Scale, theme: 'amber',
      description: 'Direito, Administração, Economia e Comunicação.',
      specificAreas: ['Direito', 'Administração', 'Economia', 'Comunicação', 'Arquitetura']
    },
    {
      id: '7', name: 'Ciências Humanas', icon: Users, theme: 'orange',
      description: 'Filosofia, Sociologia, História e Educação.',
      specificAreas: ['Filosofia', 'Sociologia', 'História', 'Educação', 'Psicologia']
    },
    {
      id: '8', name: 'Linguística, Letras e Artes', icon: PenTool, theme: 'fuchsia',
      description: 'Linguística, Letras, Artes e Música.',
      specificAreas: ['Linguística', 'Letras', 'Artes', 'Música', 'Dança']
    },
    {
      id: '9', name: 'Multidisciplinar', icon: LayoutGrid, theme: 'slate',
      description: 'Ensino, Biotecnologia, Ciências Ambientais.',
      specificAreas: ['Ensino', 'Biotecnologia', 'Ciências Ambientais', 'Interdisciplinar']
    }
  ];

  // --- System Modules A-I ---
  const systemModules: SystemModule[] = [
    {
      code: 'MÓDULO A', title: 'Critérios CAPES & Docs',
      description: 'Motor de regras core, documentos de área e definições oficiais.',
      icon: ShieldCheck, status: 'active', theme: 'cyan',
      subModules: [{ id: 'A1', label: 'Repositório Oficial' }, { id: 'A2', label: 'Navegação Temas' }, { id: 'A3', label: 'Motor Regras' }, { id: 'A4', label: 'Chat RAG' }]
    },
    {
      code: 'MÓDULO B', title: 'Revistas Nacionais (Qualis)',
      description: 'Ecossistema brasileiro. Foco em periódicos locais e SciELO.',
      icon: BookCopy, status: 'active', theme: 'emerald',
      subModules: [{ id: 'B1', label: 'Consulta Qualis' }, { id: 'B2', label: 'Indexação SciELO' }, { id: 'B3', label: 'Adequação' }]
    },
    {
      code: 'MÓDULO C', title: 'International Journals',
      description: 'Alcance global. Periódicos de alto fator de impacto (JCR/SJR).',
      icon: Globe, status: 'active', theme: 'indigo',
      subModules: [{ id: 'C1', label: 'Web of Science' }, { id: 'C2', label: 'Predatory Check' }, { id: 'C3', label: 'High Impact' }]
    },
    {
      code: 'MÓDULO D', title: 'Indicadores e Métricas',
      description: 'Hub de métricas normalizadas, CiteScore e h-index.',
      icon: BarChart3, status: 'active', theme: 'violet',
      subModules: [{ id: 'D1', label: 'Análise Citações' }, { id: 'D2', label: 'Rastreabilidade' }, { id: 'D3', label: 'Score Alumni' }]
    },
    {
      code: 'MÓDULO E', title: 'Busca e Recomendação',
      description: 'Decisão baseada em IA para encontrar o "Perfect Fit".',
      icon: Search, status: 'active', theme: 'amber',
      subModules: [{ id: 'E1', label: 'Busca Semântica' }, { id: 'E2', label: 'Comparador' }, { id: 'E3', label: 'Recomendador' }]
    },
    {
      code: 'MÓDULO I', title: 'Produção Técnica',
      description: 'Avaliação de Produtos Tecnológicos: Patentes, Softwares e Impacto.',
      icon: Cpu, status: 'active', theme: 'orange',
      subModules: [{ id: 'I1', label: 'Classificação T1-T4' }, { id: 'I2', label: 'Critérios Impacto' }, { id: 'I3', label: 'Catálogo (21)' }]
    }
  ];

  // Prism Luminescence Theme Logic
  const getThemeStyles = (theme: string) => {
    const styles: any = {
      cyan: {
        card: "bg-[#0c1a2d]/80 border-[#22d3ee]/30 hover:border-[#22d3ee]/80 hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.4)]",
        iconBox: "bg-[#22d3ee]/20 text-[#22d3ee] border-[#22d3ee]/40 shadow-[0_0_20px_rgba(34,211,238,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#e0faff] to-[#22d3ee]",
        subModule: "bg-[#22d3ee]/5 border-[#22d3ee]/20 text-cyan-50 hover:bg-[#22d3ee]/15 hover:border-[#22d3ee]/50",
        accent: "bg-[#22d3ee]", pill: "bg-[#22d3ee]/10 text-[#22d3ee] border-[#22d3ee]/20"
      },
      emerald: {
        card: "bg-[#0b201a]/80 border-[#34d399]/30 hover:border-[#34d399]/80 hover:shadow-[0_0_50px_-10px_rgba(52,211,153,0.4)]",
        iconBox: "bg-[#34d399]/20 text-[#34d399] border-[#34d399]/40 shadow-[0_0_20px_rgba(52,211,153,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#e6fffa] to-[#34d399]",
        subModule: "bg-[#34d399]/5 border-[#34d399]/20 text-emerald-50 hover:bg-[#34d399]/15 hover:border-[#34d399]/50",
        accent: "bg-[#34d399]", pill: "bg-[#34d399]/10 text-[#34d399] border-[#34d399]/20"
      },
      indigo: {
        card: "bg-[#141228]/80 border-[#818cf8]/30 hover:border-[#818cf8]/80 hover:shadow-[0_0_50px_-10px_rgba(129,140,248,0.4)]",
        iconBox: "bg-[#818cf8]/20 text-[#818cf8] border-[#818cf8]/40 shadow-[0_0_20px_rgba(129,140,248,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#eef2ff] to-[#818cf8]",
        subModule: "bg-[#818cf8]/5 border-[#818cf8]/20 text-indigo-50 hover:bg-[#818cf8]/15 hover:border-[#818cf8]/50",
        accent: "bg-[#818cf8]", pill: "bg-[#818cf8]/10 text-[#818cf8] border-[#818cf8]/20"
      },
      rose: {
        card: "bg-[#200e12]/80 border-[#fb7185]/30 hover:border-[#fb7185]/80 hover:shadow-[0_0_50px_-10px_rgba(251,113,133,0.4)]",
        iconBox: "bg-[#fb7185]/20 text-[#fb7185] border-[#fb7185]/40 shadow-[0_0_20px_rgba(251,113,133,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#fff1f2] to-[#fb7185]",
        subModule: "bg-[#fb7185]/5 border-[#fb7185]/20 text-rose-50 hover:bg-[#fb7185]/15 hover:border-[#fb7185]/50",
        accent: "bg-[#fb7185]", pill: "bg-[#fb7185]/10 text-[#fb7185] border-[#fb7185]/20"
      },
      lime: {
        card: "bg-[#1a1c0d]/80 border-[#a3e635]/30 hover:border-[#a3e635]/80 hover:shadow-[0_0_50px_-10px_rgba(163,230,53,0.4)]",
        iconBox: "bg-[#a3e635]/20 text-[#a3e635] border-[#a3e635]/40 shadow-[0_0_20px_rgba(163,230,53,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#f7fee7] to-[#a3e635]",
        subModule: "bg-[#a3e635]/5 border-[#a3e635]/20 text-lime-50 hover:bg-[#a3e635]/15 hover:border-[#a3e635]/50",
        accent: "bg-[#a3e635]", pill: "bg-[#a3e635]/10 text-[#a3e635] border-[#a3e635]/20"
      },
      amber: {
        card: "bg-[#201910]/80 border-[#fbbf24]/30 hover:border-[#fbbf24]/80 hover:shadow-[0_0_50px_-10px_rgba(251,191,36,0.4)]",
        iconBox: "bg-[#fbbf24]/20 text-[#fbbf24] border-[#fbbf24]/40 shadow-[0_0_20px_rgba(251,191,36,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#fffbeb] to-[#fbbf24]",
        subModule: "bg-[#fbbf24]/5 border-[#fbbf24]/20 text-amber-50 hover:bg-[#fbbf24]/15 hover:border-[#fbbf24]/50",
        accent: "bg-[#fbbf24]", pill: "bg-[#fbbf24]/10 text-[#fbbf24] border-[#fbbf24]/20"
      },
      orange: {
        card: "bg-[#25150c]/80 border-[#f97316]/30 hover:border-[#f97316]/80 hover:shadow-[0_0_50px_-10px_rgba(249,115,22,0.4)]",
        iconBox: "bg-[#f97316]/20 text-[#f97316] border-[#f97316]/40 shadow-[0_0_20px_rgba(249,115,22,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#fff7ed] to-[#f97316]",
        subModule: "bg-[#f97316]/5 border-[#f97316]/20 text-orange-50 hover:bg-[#f97316]/15 hover:border-[#f97316]/50",
        accent: "bg-[#f97316]", pill: "bg-[#f97316]/10 text-[#f97316] border-[#f97316]/20"
      },
      fuchsia: {
        card: "bg-[#200e1e]/80 border-[#e879f9]/30 hover:border-[#e879f9]/80 hover:shadow-[0_0_50px_-10px_rgba(232,121,249,0.4)]",
        iconBox: "bg-[#e879f9]/20 text-[#e879f9] border-[#e879f9]/40 shadow-[0_0_20px_rgba(232,121,249,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#fdf4ff] to-[#e879f9]",
        subModule: "bg-[#e879f9]/5 border-[#e879f9]/20 text-fuchsia-50 hover:bg-[#e879f9]/15 hover:border-[#e879f9]/50",
        accent: "bg-[#e879f9]", pill: "bg-[#e879f9]/10 text-[#e879f9] border-[#e879f9]/20"
      },
      slate: {
        card: "bg-[#111827]/80 border-[#94a3b8]/30 hover:border-[#94a3b8]/80 hover:shadow-[0_0_50px_-10px_rgba(148,163,184,0.4)]",
        iconBox: "bg-[#94a3b8]/20 text-[#94a3b8] border-[#94a3b8]/40 shadow-[0_0_20px_rgba(148,163,184,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#f8fafc] to-[#94a3b8]",
        subModule: "bg-[#94a3b8]/5 border-[#94a3b8]/20 text-slate-100 hover:bg-[#94a3b8]/15 hover:border-[#94a3b8]/50",
        accent: "bg-[#94a3b8]", pill: "bg-[#94a3b8]/10 text-[#94a3b8] border-[#94a3b8]/20"
      },
      violet: {
        card: "bg-[#1a0c2e]/80 border-[#a78bfa]/30 hover:border-[#a78bfa]/80 hover:shadow-[0_0_50px_-10px_rgba(167,139,250,0.4)]",
        iconBox: "bg-[#a78bfa]/20 text-[#a78bfa] border-[#a78bfa]/40 shadow-[0_0_20px_rgba(167,139,250,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#f5f3ff] to-[#a78bfa]",
        subModule: "bg-[#a78bfa]/5 border-[#a78bfa]/20 text-violet-50 hover:bg-[#a78bfa]/15 hover:border-[#a78bfa]/50",
        accent: "bg-[#a78bfa]", pill: "bg-[#a78bfa]/10 text-[#a78bfa] border-[#a78bfa]/20"
      },
      blue: {
        card: "bg-[#0c1a2d]/80 border-[#3b82f6]/30 hover:border-[#3b82f6]/80 hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.4)]",
        iconBox: "bg-[#3b82f6]/20 text-[#3b82f6] border-[#3b82f6]/40 shadow-[0_0_20px_rgba(59,130,246,0.2)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-[#eff6ff] to-[#3b82f6]",
        subModule: "bg-[#3b82f6]/5 border-[#3b82f6]/20 text-blue-50 hover:bg-[#3b82f6]/15 hover:border-[#3b82f6]/50",
        accent: "bg-[#3b82f6]", pill: "bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/20"
      }
    };
    return styles[theme] || styles['slate'];
  };

  // Logic for Law Dashboard
  const calculateLawQualis = () => {
    if (simArticleMerit === 'no') return { grade: 'I', label: 'Insuficiente', color: 'bg-[#ef4444] shadow-[0_0_30px_rgba(239,68,68,0.4)]' };
    switch (simJournalLevel) {
      case '1': return { grade: 'MB', label: 'Muito Bom', color: 'bg-[#10b981]' };
      case '2': return { grade: 'B', label: 'Bom', color: 'bg-[#84cc16]' };
      case '3': return { grade: 'R', label: 'Regular', color: 'bg-[#f59e0b]' };
      default: return { grade: 'I', label: 'Insuficiente', color: 'bg-[#ef4444]' };
    }
  };

  const simResult = calculateLawQualis();

  // Logic for Módulo I Simulator (Technical Production)
  const calculateTechClassification = () => {
    const avg = (scoreInnovation + scoreComplexity + scoreImpact + scoreApplicability) / 4;
    
    // Weighted logic: Innovation and Complexity carry more weight for T1
    const weighted = (scoreInnovation * 1.5 + scoreComplexity * 1.2 + scoreImpact * 1.0 + scoreApplicability * 0.8) / 4.5;

    if (weighted >= 4.2) return { level: 'T1', score: '200 pts', label: 'Referência Mundial', color: 'bg-amber-500 shadow-amber-500/50' };
    if (weighted >= 3.5) return { level: 'T2', score: '150 pts', label: 'Alto Impacto', color: 'bg-slate-300 shadow-slate-300/50' };
    if (weighted >= 2.8) return { level: 'T3', score: '100 pts', label: 'Inovação Local', color: 'bg-orange-600 shadow-orange-600/50' };
    if (weighted >= 2.0) return { level: 'T4', score: '50 pts', label: 'Aplicação Técnica', color: 'bg-slate-700 shadow-slate-700/50' };
    return { level: 'T5', score: '10 pts', label: 'Produção Comum', color: 'bg-slate-900 border border-white/10' };
  };

  const techResult = calculateTechClassification();

  // --- VIEW 4: Module Details (Módulo I Interactive) ---
  if (activeModule === 'MÓDULO I') {
    const themeStyles = getThemeStyles('orange');
    return (
      <div className="animate-fade-in pb-20 w-full max-w-[1400px] mx-auto text-slate-200">
        <div className="flex items-center gap-4 mb-10">
          <button onClick={() => setActiveModule(null)} className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-white/20 group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-orange-400 mb-1">
              <span>Módulo I</span><ChevronRight className="w-3 h-3" /><span>Produção Técnica</span>
            </div>
            <h2 className="text-3xl font-bold text-white font-heading">Simulador de Estratificação Tecnológica</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
           {/* Controls Section */}
           <div className="xl:col-span-8 space-y-8">
              <div className={`relative overflow-hidden rounded-[2.5rem] ${themeStyles.card} p-10 shadow-2xl`}>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-8">
                      <div className={`${themeStyles.iconBox} w-14 h-14 rounded-2xl flex items-center justify-center shrink-0`}>
                        <Cpu className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white font-heading">Calibração de Ativos</h3>
                        <p className="text-slate-400 text-sm font-medium">Ajuste os eixos de impacto para estimar a nota CAPES do produto.</p>
                      </div>
                   </div>

                   <div className="space-y-10">
                      {/* Category Selection */}
                      <div>
                         <label className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-4 block">Tipo de Produto</label>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {['Patente', 'Software', 'Tec. Social', 'Relatório', 'Material Didático', 'Manual', 'Curso', 'Protocolo'].map(cat => (
                               <button 
                                 key={cat} 
                                 onClick={() => setTechCategory(cat)}
                                 className={`py-3 px-4 rounded-xl text-[11px] font-bold border transition-all ${techCategory === cat ? 'bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-500/20' : 'bg-white/5 border-white/10 text-slate-400 hover:border-orange-500/30'}`}
                               >
                                 {cat}
                               </button>
                            ))}
                         </div>
                      </div>

                      {/* Criterion Sliders */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                         {[
                           { id: 'inv', label: 'Inovação & Ineditismo', value: scoreInnovation, set: setScoreInnovation, icon: Lightbulb, color: 'text-amber-400' },
                           { id: 'com', label: 'Complexidade Técnica', value: scoreComplexity, set: setScoreComplexity, icon: GitBranch, color: 'text-blue-400' },
                           { id: 'imp', label: 'Impacto Socioeconômico', value: scoreImpact, set: setScoreImpact, icon: Target, color: 'text-rose-400' },
                           { id: 'apl', label: 'Escalabilidade & Uso', value: scoreApplicability, set: setScoreApplicability, icon: Share2, color: 'text-emerald-400' }
                         ].map(axis => (
                           <div key={axis.id} className="bg-white/5 p-6 rounded-[2rem] border border-white/5 group hover:border-white/10 transition-all">
                              <div className="flex justify-between items-center mb-6">
                                 <div className="flex items-center gap-3">
                                    <axis.icon className={`w-5 h-5 ${axis.color}`} />
                                    <span className="text-sm font-bold text-slate-200">{axis.label}</span>
                                 </div>
                                 <span className="text-xl font-black text-white">{axis.value}</span>
                              </div>
                              <input 
                                type="range" min="1" max="5" step="1"
                                value={axis.value}
                                onChange={(e) => axis.set(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                              />
                              <div className="flex justify-between mt-3 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                                 <span>Adaptado</span>
                                 <span>Inédito</span>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </div>

              {/* Guide/Info Section */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8">
                 <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                    <Info className="w-5 h-5 text-orange-400" /> Referências de Classificação
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                       <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-white">T1 (Excelência):</strong> Produto com patente internacional concedida ou software com uso em larga escala nacional comprovado.</p>
                       <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-white">T2 (Alta Qualidade):</strong> Patente nacional depositada ou tecnologia social com metodologia replicada por terceiros.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-white">T3 (Inovação Incremental):</strong> Relatórios técnicos conclusivos com aprovação de órgãos reguladores ou softwares de uso específico.</p>
                       <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-white">T4 (Técnica):</strong> Material didático instrucional ou manuais operacionais com validação acadêmica básica.</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Results Section */}
           <div className="xl:col-span-4">
              <div className="sticky top-24 space-y-8">
                 {/* Main Result Card */}
                 <div className="bg-gradient-to-b from-[#1e1a10] to-[#0a0f1e] border-2 border-orange-500/40 rounded-[3rem] p-12 shadow-[0_0_60px_-10px_rgba(249,115,22,0.3)] text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-[60px] -mr-15 -mt-15"></div>
                    <div className="relative z-10">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Estratificação Estimada</p>
                       
                       <div className="relative inline-block mb-8">
                          <div className={`w-32 h-32 rounded-full ${techResult.color} flex items-center justify-center text-white transition-all duration-700 shadow-2xl`}>
                             <span className="text-5xl font-black drop-shadow-xl">{techResult.level}</span>
                          </div>
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-xl">
                             <span className="text-xs font-black text-white whitespace-nowrap">{techResult.score}</span>
                          </div>
                       </div>

                       <h3 className="text-2xl font-bold text-white mb-3 font-heading tracking-tight">{techResult.label}</h3>
                       <p className="text-sm text-slate-400 font-medium mb-10 max-w-[200px] mx-auto leading-relaxed">Produto classificado como <strong className="text-orange-400">{techCategory}</strong> de alto valor agregado.</p>

                       <div className="space-y-3">
                          <div className="flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/5 p-4 rounded-xl border border-white/5">
                             <span>Inovação</span>
                             <div className="flex gap-1">
                                {[1,2,3,4,5].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= scoreInnovation ? 'bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'bg-white/10'}`}></div>)}
                             </div>
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/5 p-4 rounded-xl border border-white/5">
                             <span>Impacto</span>
                             <div className="flex gap-1">
                                {[1,2,3,4,5].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= scoreImpact ? 'bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'bg-white/10'}`}></div>)}
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Action Card */}
                 <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 text-center backdrop-blur-xl">
                    <h4 className="text-sm font-bold text-white mb-4">Exportar Memorial Descritivo</h4>
                    <p className="text-xs text-slate-500 mb-8 leading-relaxed">Gere automaticamente a documentação de impacto para o Coleta CAPES com base nestes critérios.</p>
                    <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                       <FileText className="w-4 h-4 text-orange-400" /> Baixar PDF Estruturado
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  // --- VIEW 3: Specific Area Dashboard (Modules Grid) ---
  if (selectedMajorArea && selectedSpecificArea && selectedSpecificArea !== 'Direito') {
    const activeTheme = getThemeStyles(selectedMajorArea.theme);
    return (
      <div className="animate-fade-in pb-12 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 bg-white/[0.02] backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/5 sticky top-4 z-30 shadow-2xl relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-${selectedMajorArea.theme}-500/10 to-transparent opacity-50 pointer-events-none`}></div>
          <div className="flex items-center gap-6 relative z-10">
             <button onClick={() => setSelectedSpecificArea(null)} className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-white/20 group backdrop-blur-md"><ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /></button>
             <div>
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-slate-500"><span>{selectedMajorArea.name}</span><ChevronRight className="w-3 h-3 opacity-50" /><span className={activeTheme.title.replace('text-transparent bg-clip-text', '')}>{selectedSpecificArea}</span></div>
                <h2 className="text-3xl font-bold text-white font-heading tracking-tight mt-1">{selectedSpecificArea}</h2>
             </div>
          </div>
          <div className="hidden xl:flex items-center gap-4 relative z-10">
             <span className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeTheme.pill} text-[10px] font-mono font-bold tracking-wider uppercase shadow-lg backdrop-blur-md`}>
                <div className={`w-1.5 h-1.5 rounded-full ${activeTheme.accent} animate-pulse`}></div>
                Critérios Ciclo 2025-2028
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {systemModules.map((module) => {
             const isLocked = module.status === 'locked';
             const Icon = module.icon;
             const themeStyles = getThemeStyles(module.theme);
             return (
                <div key={module.code} onClick={() => !isLocked && (module.code === 'MÓDULO I' ? setActiveModule('MÓDULO I') : null)} className={`group relative overflow-hidden rounded-[2.5rem] border backdrop-blur-xl transition-all duration-700 ease-out hover:-translate-y-2 flex flex-col h-full ${isLocked ? 'opacity-50 grayscale cursor-not-allowed bg-white/[0.01] border-white/5' : `${themeStyles.card} cursor-pointer`}`}>
                   <div className="p-8 pb-4 relative z-10">
                      <div className="flex justify-between items-start mb-8">
                         <div className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:scale-110 ${isLocked ? 'bg-white/5 text-slate-500 border border-white/5' : themeStyles.iconBox}`}><Icon className="w-8 h-8" strokeWidth={1.5} /></div>
                         <span className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-widest border shadow-sm backdrop-blur-md ${isLocked ? 'border-white/10 text-slate-500' : themeStyles.pill}`}>{module.code}</span>
                      </div>
                      <h3 className={`text-2xl font-bold mb-3 font-heading tracking-tight ${isLocked ? 'text-slate-500' : themeStyles.title}`}>{module.title}</h3>
                      <p className="text-sm text-slate-300/80 leading-relaxed font-medium">{module.description}</p>
                   </div>
                   <div className="p-8 pt-4 flex-1 flex flex-col justify-end space-y-3">
                      {module.subModules.map((sub) => (
                        <div key={sub.id} className={`flex items-center gap-4 p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 group/item shadow-sm ${isLocked ? 'bg-white/5 border-white/5' : themeStyles.subModule}`}>
                           <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-[10px] font-mono font-bold border ${isLocked ? 'bg-slate-800 text-slate-600 border-slate-700' : 'bg-black/20 border-white/10 text-white/90 group-hover/item:bg-white/20'}`}>{sub.id}</span>
                           <span className={`text-xs font-bold tracking-wide transition-colors ${isLocked ? 'text-slate-600' : 'text-slate-200 group-hover/item:text-white'}`}>{sub.label}</span>
                        </div>
                      ))}
                   </div>
                </div>
             );
          })}
        </div>
      </div>
    );
  }

  // --- VIEW 3 SPECIAL: Law (Direito) Specialized Dashboard ---
  if (selectedSpecificArea === 'Direito') {
    return (
      <div className="animate-fade-in pb-12 w-full max-w-[1400px] mx-auto text-slate-200">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setSelectedSpecificArea(null)} className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-white/20 group"><ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /></button>
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-amber-400 mb-1"><span>Direito</span><ChevronRight className="w-3 h-3" /><span>Ciclo 2025-2028</span></div>
            <h2 className="text-3xl font-bold text-white font-heading tracking-tight">Painel de Avaliação Jurídica</h2>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1a160d] border border-amber-500/30 p-10 mb-10 shadow-[0_0_60px_-15px_rgba(251,191,36,0.2)]">
           <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4"><Scale className="w-3 h-3" /> Matriz Híbrida</div>
                 <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 font-heading leading-tight tracking-tight">Do Periódico para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbefd0] to-[#fbbf24] drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">Artigo</span>.</h1>
                 <p className="text-slate-300 text-lg leading-relaxed mb-6 font-medium max-w-2xl">A avaliação Jurídica agora prioriza a qualidade intrínseca. Nossa IA identifica mérito acadêmico real.</p>
              </div>
              <div className="w-full lg:w-1/3 bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative group hover:border-amber-500/40 transition-all duration-500">
                 <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2 font-heading"><Zap className="w-4 h-4" /> Regra de Ouro</h3>
                 <p className="text-white font-semibold text-xl leading-snug">"Artigo <span className="text-red-400 font-black">sem mérito</span> científico será <span className="text-red-400 font-black">sempre</span> nota I."</p>
              </div>
           </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-8 space-y-8">
              <div className="bg-[#0f172a]/40 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl">
                 <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 font-heading tracking-tight"><Layers className="w-5 h-5 text-amber-500" /> Estratificação dos Veículos</h3>
                 <div className="space-y-4">
                    <div className="relative group overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-900/40 to-transparent p-6 hover:border-amber-500/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                       <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
                       <h4 className="text-lg font-bold text-white mb-1">Nível 1: Consolidado (MB)</h4><p className="text-sm text-slate-400">Excelência internacional. Scopus/WoS Q1-Q2.</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-4 space-y-8">
              <div className="bg-gradient-to-b from-[#1e1a10] to-[#0a0f1e] border-2 border-amber-500/40 rounded-[2.5rem] p-10 shadow-[0_0_50px_-10px_rgba(251,191,36,0.3)] relative overflow-hidden group">
                 <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 font-heading tracking-tight relative z-10"><Gavel className="w-5 h-5 text-amber-400" /> Simulador de Qualis</h3>
                 <div className="space-y-8 relative z-10 text-center">
                    <div className={`inline-flex items-center justify-center w-28 h-28 rounded-full ${simResult.color} text-white transition-all duration-700`}><span className="text-4xl font-black">{simResult.grade}</span></div>
                    <p className="text-white text-xl font-bold mt-6 tracking-tight font-heading">{simResult.label}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  // --- VIEW 2: Sub-area Selection ---
  if (selectedMajorArea && !selectedSpecificArea) {
    const themeStyles = getThemeStyles(selectedMajorArea.theme);
    return (
      <div className="animate-fade-in max-w-[1200px] mx-auto min-h-[80vh] flex flex-col pt-8 px-4">
        <div className="flex flex-col items-center text-center mb-20 space-y-8 relative">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-${selectedMajorArea.theme}-500/15 rounded-full blur-[150px] pointer-events-none`}></div>
            <button onClick={() => setSelectedMajorArea(null)} className="relative z-10 flex items-center gap-3 text-xs font-black text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-xl shadow-lg"><ChevronLeft className="w-5 h-5" /> Voltar</button>
            <div className={`relative z-10 w-28 h-28 rounded-[2.5rem] flex items-center justify-center backdrop-blur-2xl mb-2 ${themeStyles.iconBox} shadow-2xl`}><selectedMajorArea.icon className="w-12 h-12" /></div>
            <div className="relative z-10 space-y-4">
                <h2 className="text-4xl md:text-7xl font-black text-white font-heading tracking-tighter drop-shadow-2xl">{selectedMajorArea.name}</h2>
                <p className="text-slate-400 text-xl font-bold max-w-2xl mx-auto leading-relaxed bg-[#0f172a]/40 p-6 rounded-3xl border border-white/5 backdrop-blur-xl inline-block shadow-2xl">Selecione sua <span className={`${themeStyles.title} border-b-2 border-white/10`}>Área de Conhecimento</span> específica.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 relative z-10">
            {selectedMajorArea.specificAreas.map((area, index) => (
                <button key={index} onClick={() => setSelectedSpecificArea(area)} className={`group flex items-center justify-between p-8 rounded-[2rem] border backdrop-blur-2xl transition-all duration-500 text-left ${themeStyles.card} hover:scale-105`}>
                    <span className="text-lg font-black text-slate-200 group-hover:text-white transition-colors tracking-tight">{area}</span>
                    <div className={`p-3 rounded-2xl ${themeStyles.pill} opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2 shadow-xl`}><ChevronRight className="w-5 h-5" /></div>
                </button>
            ))}
        </div>
      </div>
    );
  }

  // --- VIEW 1: Major Area Selection Grid ---
  return (
    <div className="animate-fade-in max-w-[1400px] mx-auto flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-center mb-20 space-y-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-black tracking-widest uppercase shadow-[0_0_30px_rgba(34,211,238,0.2)] backdrop-blur-md"><Target className="w-4 h-4" /> Calibração de Contexto</div>
        <h1 className="relative z-10 text-5xl md:text-8xl font-black text-white font-heading tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] leading-none">Selecione a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">Grande Área</span></h1>
        <p className="relative z-10 text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed font-medium">Carregue os <span className="text-white border-b-2 border-cyan-500/30">Algoritmos de Área</span> com as diretrizes CAPES Ciclo 2025-2028.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] pb-20">
        {areas.map((area) => {
          const themeStyles = getThemeStyles(area.theme);
          return (
            <button key={area.id} onClick={() => setSelectedMajorArea(area)} className={`group relative flex flex-col items-start p-10 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 overflow-hidden text-left shadow-2xl ${themeStyles.card}`}>
                <div className="relative z-10 w-full h-full flex flex-col">
                    <div className={`w-18 h-18 rounded-3xl flex items-center justify-center mb-8 transition-all duration-700 group-hover:scale-110 ${themeStyles.iconBox}`}><area.icon className="w-9 h-9" strokeWidth={1.5} /></div>
                    <h3 className={`text-2xl font-black mb-3 font-heading tracking-tight ${themeStyles.title}`}>{area.name}</h3>
                    <p className="text-sm text-slate-400 font-bold leading-relaxed mb-10">{area.description}</p>
                    <div className="mt-auto flex items-center justify-between w-full pt-8 border-t border-white/5 transition-colors">
                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{area.specificAreas.length} Subáreas</span>
                        <div className={`p-3 rounded-2xl transition-all transform group-hover:translate-x-2 ${themeStyles.pill} shadow-lg`}><ArrowRight className="w-5 h-5" /></div>
                    </div>
                </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AcademicIntelligence;
