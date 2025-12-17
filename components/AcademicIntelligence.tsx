import React, { useState } from 'react';
import { 
  Atom, FlaskConical, Wrench, Heart, Sprout, Scale, Users, PenTool, LayoutGrid, 
  ChevronLeft, ArrowRight, Target, ShieldCheck, BarChart3, 
  Search, Settings, FileText, Globe, BookCopy,
  Layers, ChevronRight, GraduationCap, Zap, Sparkles, Divide,
  Cpu, GitBranch, Share2, Lock,  Box, Monitor, Mic, Anchor, Database
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

  // --- Dados das Áreas (Taxonomia CNPq Atualizada) ---
  const areas: Area[] = [
    {
      id: '1.00.00.00-3', name: 'Ciências Exatas e da Terra', icon: Atom,
      theme: 'cyan',
      description: 'Matemática, Física, Química e Computação.',
      specificAreas: [
        'Matemática', 'Probabilidade e Estatística', 'Ciência da Computação', 
        'Astronomia', 'Física', 'Química', 'Geociências', 'Oceanografia'
      ]
    },
    {
      id: '2.00.00.00-6', name: 'Ciências Biológicas', icon: FlaskConical,
      theme: 'emerald',
      description: 'Genética, Botânica, Zoologia e Ecologia.',
      specificAreas: [
        'Biologia Geral', 'Genética', 'Botânica', 'Zoologia', 'Ecologia', 
        'Morfologia', 'Fisiologia', 'Bioquímica', 'Biofísica', 'Farmacologia', 
        'Imunologia', 'Microbiologia', 'Parasitologia'
      ]
    },
    {
      id: '3.00.00.00-9', name: 'Engenharias', icon: Wrench,
      theme: 'indigo',
      description: 'Civil, Elétrica, Mecânica e Materiais.',
      specificAreas: [
        'Engenharia Civil', 'Engenharia de Minas', 'Engenharia de Materiais e Metalúrgica', 
        'Engenharia Elétrica', 'Engenharia Mecânica', 'Engenharia Química', 
        'Engenharia Sanitária', 'Engenharia de Produção', 'Engenharia Nuclear', 
        'Engenharia de Transportes', 'Engenharia Naval e Oceânica', 
        'Engenharia Aeroespacial', 'Engenharia Biomédica'
      ]
    },
    {
      id: '4.00.00.00-1', name: 'Ciências da Saúde', icon: Heart,
      theme: 'rose',
      description: 'Medicina, Odontologia e Saúde Coletiva.',
      specificAreas: [
        'Medicina', 'Odontologia', 'Farmácia', 'Enfermagem', 'Nutrição', 
        'Saúde Coletiva', 'Fonoaudiologia', 'Fisioterapia e Terapia Ocupacional', 
        'Educação Física'
      ]
    },
    {
      id: '5.00.00.00-4', name: 'Ciências Agrárias', icon: Sprout,
      theme: 'lime',
      description: 'Agronomia, Zootecnia e Recursos Florestais.',
      specificAreas: [
        'Agronomia', 'Recursos Florestais e Engenharia Florestal', 
        'Engenharia Agrícola', 'Zootecnia', 'Medicina Veterinária', 
        'Recursos Pesqueiros e Engenharia de Pesca', 'Ciência e Tecnologia de Alimentos'
      ]
    },
    {
      id: '6.00.00.00-7', name: 'Ciências Sociais Aplicadas', icon: Scale,
      theme: 'amber',
      description: 'Direito, Administração e Economia.',
      specificAreas: [
        'Direito', 'Administração', 'Economia', 'Arquitetura e Urbanismo', 
        'Planejamento Urbano e Regional', 'Demografia', 'Ciência da Informação', 
        'Museologia', 'Comunicação', 'Serviço Social', 'Economia Doméstica', 
        'Desenho Industrial', 'Turismo'
      ]
    },
    {
      id: '7.00.00.00-0', name: 'Ciências Humanas', icon: Users,
      theme: 'orange',
      description: 'Filosofia, Sociologia, História e Educação.',
      specificAreas: [
        'Filosofia', 'Sociologia', 'Antropologia', 'Arqueologia', 'História', 
        'Geografia', 'Psicologia', 'Educação', 'Ciência Política', 'Teologia'
      ]
    },
    {
      id: '8.00.00.00-2', name: 'Linguística, Letras e Artes', icon: PenTool,
      theme: 'fuchsia',
      description: 'Linguística, Letras e Artes.',
      specificAreas: [
        'Linguística', 'Letras', 'Artes'
      ]
    },
    {
      id: '9.00.00.00-5', name: 'Outros', icon: LayoutGrid,
      theme: 'slate',
      description: 'Multidisciplinar e Áreas Especiais.',
      specificAreas: [
        'Multidisciplinar', 'Ensino', 'Secretariado Executivo', 'Defesa', 
        'Bioética', 'Ciências Ambientais', 'Divulgação Científica', 
        'Microeletrônica', 'Robótica, Mecatrônica e Automação', 
        'Segurança Contra Incêndio'
      ]
    }
  ];

  // --- Módulos Estruturados (A-H + I) ---
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
      code: 'MÓDULO I',
      title: 'Produção Técnica',
      description: 'Avaliação de Produtos Tecnológicos: Patentes, Softwares, Processos e Impacto Social.',
      icon: Cpu,
      status: 'active',
      theme: 'orange',
      subModules: [
        { id: 'I1', label: 'Classificação T1-T4' },
        { id: 'I2', label: 'Critérios de Impacto' },
        { id: 'I3', label: 'Catálogo de Produtos (21)' }
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

  // Helper para classes de cores - Luminous Update
  const getThemeStyles = (theme: string) => {
    const styles: any = {
      cyan: {
        card: "bg-gradient-to-br from-cyan-500/10 via-cyan-900/5 to-transparent border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]",
        iconBox: "bg-cyan-400/20 text-cyan-200 border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-cyan-400",
        subModule: "bg-cyan-950/40 border-cyan-500/20 text-cyan-100 hover:bg-cyan-500/20 hover:border-cyan-400/50",
        accent: "bg-cyan-400",
        pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
      },
      emerald: {
        card: "bg-gradient-to-br from-emerald-500/10 via-emerald-900/5 to-transparent border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.3)]",
        iconBox: "bg-emerald-400/20 text-emerald-200 border-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-emerald-400",
        subModule: "bg-emerald-950/40 border-emerald-500/20 text-emerald-100 hover:bg-emerald-500/20 hover:border-emerald-400/50",
        accent: "bg-emerald-400",
        pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
      },
      indigo: {
        card: "bg-gradient-to-br from-indigo-500/10 via-indigo-900/5 to-transparent border-indigo-500/20 hover:border-indigo-400/50 hover:shadow-[0_0_40px_-10px_rgba(129,140,248,0.3)]",
        iconBox: "bg-indigo-400/20 text-indigo-200 border-indigo-400/30 shadow-[0_0_15px_rgba(129,140,248,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-400",
        subModule: "bg-indigo-950/40 border-indigo-500/20 text-indigo-100 hover:bg-indigo-500/20 hover:border-indigo-400/50",
        accent: "bg-indigo-400",
        pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
      },
      violet: {
        card: "bg-gradient-to-br from-violet-500/10 via-violet-900/5 to-transparent border-violet-500/20 hover:border-violet-400/50 hover:shadow-[0_0_40px_-10px_rgba(167,139,250,0.3)]",
        iconBox: "bg-violet-400/20 text-violet-200 border-violet-400/30 shadow-[0_0_15px_rgba(167,139,250,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-400",
        subModule: "bg-violet-950/40 border-violet-500/20 text-violet-100 hover:bg-violet-500/20 hover:border-violet-400/50",
        accent: "bg-violet-400",
        pill: "bg-violet-500/10 text-violet-300 border-violet-500/20"
      },
      amber: {
        card: "bg-gradient-to-br from-amber-500/10 via-amber-900/5 to-transparent border-amber-500/20 hover:border-amber-400/50 hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.3)]",
        iconBox: "bg-amber-400/20 text-amber-200 border-amber-400/30 shadow-[0_0_15px_rgba(251,191,36,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-400",
        subModule: "bg-amber-950/40 border-amber-500/20 text-amber-100 hover:bg-amber-500/20 hover:border-amber-400/50",
        accent: "bg-amber-400",
        pill: "bg-amber-500/10 text-amber-300 border-amber-500/20"
      },
      blue: {
        card: "bg-gradient-to-br from-blue-500/10 via-blue-900/5 to-transparent border-blue-500/20 hover:border-blue-400/50 hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.3)]",
        iconBox: "bg-blue-400/20 text-blue-200 border-blue-400/30 shadow-[0_0_15px_rgba(96,165,250,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400",
        subModule: "bg-blue-950/40 border-blue-500/20 text-blue-100 hover:bg-blue-500/20 hover:border-blue-400/50",
        accent: "bg-blue-400",
        pill: "bg-blue-500/10 text-blue-300 border-blue-500/20"
      },
      rose: {
        card: "bg-gradient-to-br from-rose-500/10 via-rose-900/5 to-transparent border-rose-500/20 hover:border-rose-400/50 hover:shadow-[0_0_40px_-10px_rgba(251,113,133,0.3)]",
        iconBox: "bg-rose-400/20 text-rose-200 border-rose-400/30 shadow-[0_0_15px_rgba(251,113,133,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-rose-400",
        subModule: "bg-rose-950/40 border-rose-500/20 text-rose-100 hover:bg-rose-500/20 hover:border-rose-400/50",
        accent: "bg-rose-400",
        pill: "bg-rose-500/10 text-rose-300 border-rose-500/20"
      },
      lime: {
        card: "bg-gradient-to-br from-lime-500/10 via-lime-900/5 to-transparent border-lime-500/20 hover:border-lime-400/50 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.3)]",
        iconBox: "bg-lime-400/20 text-lime-200 border-lime-400/30 shadow-[0_0_15px_rgba(163,230,53,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-lime-100 to-lime-400",
        subModule: "bg-lime-950/40 border-lime-500/20 text-lime-100 hover:bg-lime-500/20 hover:border-lime-400/50",
        accent: "bg-lime-400",
        pill: "bg-lime-500/10 text-lime-300 border-lime-500/20"
      },
      orange: {
        card: "bg-gradient-to-br from-orange-500/10 via-orange-900/5 to-transparent border-orange-500/20 hover:border-orange-400/50 hover:shadow-[0_0_40px_-10px_rgba(251,146,60,0.3)]",
        iconBox: "bg-orange-400/20 text-orange-200 border-orange-400/30 shadow-[0_0_15px_rgba(251,146,60,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-orange-400",
        subModule: "bg-orange-950/40 border-orange-500/20 text-orange-100 hover:bg-orange-500/20 hover:border-orange-400/50",
        accent: "bg-orange-400",
        pill: "bg-orange-500/10 text-orange-300 border-orange-500/20"
      },
      fuchsia: {
        card: "bg-gradient-to-br from-fuchsia-500/10 via-fuchsia-900/5 to-transparent border-fuchsia-500/20 hover:border-fuchsia-400/50 hover:shadow-[0_0_40px_-10px_rgba(232,121,249,0.3)]",
        iconBox: "bg-fuchsia-400/20 text-fuchsia-200 border-fuchsia-400/30 shadow-[0_0_15px_rgba(232,121,249,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-100 to-fuchsia-400",
        subModule: "bg-fuchsia-950/40 border-fuchsia-500/20 text-fuchsia-100 hover:bg-fuchsia-500/20 hover:border-fuchsia-400/50",
        accent: "bg-fuchsia-400",
        pill: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20"
      },
      slate: {
        card: "bg-gradient-to-br from-slate-500/10 via-slate-800/5 to-transparent border-slate-500/20 hover:border-slate-400/50 hover:shadow-[0_0_40px_-10px_rgba(148,163,184,0.3)]",
        iconBox: "bg-slate-400/20 text-slate-200 border-slate-400/30 shadow-[0_0_15px_rgba(148,163,184,0.3)]",
        title: "text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400",
        subModule: "bg-slate-900/40 border-slate-500/20 text-slate-300 hover:bg-slate-500/20 hover:border-slate-400/50",
        accent: "bg-slate-400",
        pill: "bg-slate-500/10 text-slate-300 border-slate-500/20"
      }
    };
    return styles[theme] || styles['slate'];
  };

  // --- Step 4: Technical Production Detail View (New Module I) ---
  if (activeModule === 'MÓDULO I') {
    return (
      <div className="animate-fade-in pb-20 w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <button 
            onClick={() => setActiveModule(null)}
            className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-white/20 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-orange-400 mb-1">
              <span>Módulo I</span>
              <ChevronRight className="w-3 h-3" />
              <span>Avaliação CAPES</span>
            </div>
            <h2 className="text-3xl font-bold text-white font-heading">Produção Técnica e Tecnológica</h2>
          </div>
        </div>

        {/* Intro Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500/10 via-orange-900/5 to-transparent border border-orange-500/20 p-10 mb-12">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
           <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.3)] shrink-0">
                 <Cpu className="w-8 h-8 text-orange-200" />
              </div>
              <div>
                 <h3 className="text-2xl font-bold text-white mb-3">Da Bancada para a Sociedade</h3>
                 <p className="text-slate-300 leading-relaxed max-w-4xl text-lg">
                    A Produção Tecnológica é considerada um <strong className="text-orange-200">"objeto tangível"</strong> com elevado grau de novidade, fruto da aplicação de novos conhecimentos científicos. 
                    Diferencia-se da Produção Técnica (adaptação) por seu ineditismo e capacidade de solucionar problemas reais de empresas ou da sociedade.
                 </p>
              </div>
           </div>
        </div>

        {/* The 4 Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
           {[
             { title: "Impacto", icon: Target, desc: "Mudanças causadas no ambiente social e econômico.", color: "text-rose-300", bg: "bg-rose-500/10", border: "border-rose-500/20" },
             { title: "Aplicabilidade", icon: Share2, desc: "Facilidade de emprego e replicabilidade em diferentes contextos.", color: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
             { title: "Inovação", icon: Sparkles, desc: "Intensidade de conhecimento inédito. Adaptação vs. Criação.", color: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/20" },
             { title: "Complexidade", icon: GitBranch, desc: "Interação entre múltiplos atores e conhecimentos diversos.", color: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/20" },
           ].map((c, i) => (
             <div key={i} className={`p-6 rounded-[2rem] ${c.bg} border ${c.border} hover:scale-105 transition-transform duration-300`}>
                <c.icon className={`w-8 h-8 ${c.color} mb-4`} />
                <h4 className="text-lg font-bold text-white mb-2">{c.title}</h4>
                <p className="text-sm text-slate-300 leading-snug">{c.desc}</p>
             </div>
           ))}
        </div>

        {/* Stratification Ladder (T1 - T5) */}
        <div className="mb-16">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-orange-400" />
              Estratificação da Produção
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { level: "T1", score: "200 pts", desc: "Alta Inovação & Complexidade", color: "from-amber-300 to-yellow-500", text: "text-slate-900" },
                { level: "T2", score: "150 pts", desc: "Média Inovação", color: "from-slate-300 to-slate-400", text: "text-slate-900" },
                { level: "T3", score: "100 pts", desc: "Baixa Inovação / Adaptação", color: "from-orange-700 to-orange-800", text: "text-orange-100" },
                { level: "T4", score: "50 pts", desc: "Serviço Técnico Especializado", color: "from-slate-700 to-slate-800", text: "text-slate-300" },
                { level: "T5", score: "10 pts", desc: "Produção Técnica Comum", color: "from-slate-800 to-slate-900", text: "text-slate-500" },
              ].map((t, i) => (
                <div key={i} className="relative group overflow-hidden rounded-2xl border border-white/5">
                   <div className={`absolute inset-0 bg-gradient-to-b ${t.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                   <div className="relative p-6 flex flex-col h-full justify-between backdrop-blur-sm">
                      <div className="flex justify-between items-start mb-4">
                         <span className={`text-2xl font-black ${i === 0 ? 'text-amber-400' : 'text-white'}`}>{t.level}</span>
                         <span className="text-[10px] font-mono font-bold bg-black/30 px-2 py-1 rounded text-white">{t.score}</span>
                      </div>
                      <p className="text-xs font-medium text-slate-300 uppercase tracking-wide">{t.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* The 21 Product Categories */}
        <div>
           <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Box className="w-5 h-5 text-orange-400" />
              Catálogo de Produtos (GT Produção Técnica)
           </h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                "Produto Bibliográfico", "Ativos de Propriedade Intelectual (Patentes)", "Tecnologia Social", 
                "Curso de Formação Profissional", "Produto de Editoração", "Material Didático", 
                "Software / Aplicativo", "Evento Organizado", "Norma ou Marco Regulatório", 
                "Relatório Técnico Conclusivo", "Manual / Protocolo", "Tradução", 
                "Acervo", "Base de Dados Técnico-Científica", "Cultivar", 
                "Produto de Comunicação", "Carta, Mapa ou Similar", "Produtos/Processos em Sigilo", 
                "Taxonomias, Ontologias e Tesauros", "Empresa ou Org. Social Inovadora", "Processo/Tecnologia Não Patenteável"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all cursor-default group">
                   <div className="w-1.5 h-1.5 rounded-full bg-orange-500/30 group-hover:bg-orange-400 transition-colors"></div>
                   <span className="text-sm text-slate-300 font-medium group-hover:text-white">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }

  // --- Step 3: Modules View (Final Dashboard) ---
  if (selectedMajorArea && selectedSpecificArea) {
    const activeTheme = getThemeStyles(selectedMajorArea.theme);

    return (
      <div className="animate-fade-in pb-12 w-full">
        {/* Top Bar Navigation */}
        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-10 bg-white/[0.02] backdrop-blur-2xl p-6 rounded-[2rem] border border-white/5 sticky top-4 z-30 shadow-2xl relative overflow-hidden`}>
          {/* Subtle colored glow in header */}
          <div className={`absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-${selectedMajorArea.theme}-500/10 to-transparent opacity-50 pointer-events-none`}></div>

          <div className="flex items-center gap-4 md:gap-6 flex-wrap relative z-10">
             <button 
                onClick={() => setSelectedSpecificArea(null)}
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-white/20 group backdrop-blur-md"
                title="Voltar"
             >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
             </button>
             <div className="hidden md:block h-10 w-px bg-white/10"></div>
             
             {/* Breadcrumbs / Title */}
             <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                    <span className="opacity-70">{selectedMajorArea.name}</span>
                    <ChevronRight className="w-3 h-3 opacity-50" />
                    <span className={`text-${selectedMajorArea.theme}-300`}>{selectedSpecificArea}</span>
                </div>
                <h2 className="text-3xl font-bold text-white font-heading tracking-tight mt-1 drop-shadow-md">{selectedSpecificArea}</h2>
             </div>
          </div>
          
          <div className="hidden xl:flex items-center gap-4 relative z-10">
             <span className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeTheme.pill} text-[10px] font-mono font-bold tracking-wider uppercase shadow-lg backdrop-blur-md`}>
                <div className={`w-1.5 h-1.5 rounded-full ${activeTheme.accent} animate-pulse`}></div>
                Critérios Atualizados
             </span>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {systemModules.map((module) => {
             const isLocked = module.status === 'locked';
             const Icon = module.icon;
             const themeStyles = getThemeStyles(module.theme);

             return (
                <div 
                   key={module.code}
                   onClick={() => !isLocked && module.code === 'MÓDULO I' ? setActiveModule('MÓDULO I') : null}
                   className={`
                      group relative overflow-hidden rounded-[2.5rem] border backdrop-blur-xl
                      transition-all duration-700 ease-out hover:-translate-y-2
                      flex flex-col h-full
                      ${isLocked ? 'opacity-50 grayscale cursor-not-allowed bg-white/[0.01] border-white/5' : `${themeStyles.card} cursor-pointer`}
                   `}
                >
                   {/* Glass Shine Effect */}
                   {!isLocked && <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>}

                   {/* Module Header */}
                   <div className="p-8 pb-4 relative z-10">
                      <div className="flex justify-between items-start mb-8">
                         {/* Glowing Icon Container */}
                         <div className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:scale-110 ${isLocked ? 'bg-white/5 text-slate-500 border border-white/5' : themeStyles.iconBox}`}>
                            <Icon className="w-8 h-8" strokeWidth={1.5} />
                         </div>
                         
                         {/* Badge */}
                         <div className="flex flex-col items-end gap-2">
                             <span className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-widest border shadow-sm backdrop-blur-md ${isLocked ? 'border-white/10 text-slate-500' : themeStyles.pill}`}>
                                {module.code}
                             </span>
                             {module.status === 'beta' && <span className="text-[9px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shadow-[0_0_10px_rgba(251,191,36,0.2)]">BETA</span>}
                         </div>
                      </div>

                      <h3 className={`text-2xl font-bold mb-3 font-heading tracking-tight ${isLocked ? 'text-slate-500' : themeStyles.title}`}>
                         {module.title}
                      </h3>
                      <p className="text-sm text-slate-300/80 leading-relaxed font-medium">
                         {module.description}
                      </p>
                   </div>

                   {/* Sub-Modules Grid (Glass Chips) */}
                   <div className="p-8 pt-4 flex-1 flex flex-col justify-end">
                      <div className={`w-full h-px mb-6 ${isLocked ? 'bg-white/5' : `bg-gradient-to-r from-transparent via-${module.theme}-500/20 to-transparent`}`}></div>
                      
                      <div className="grid grid-cols-1 gap-3">
                         {module.subModules.map((sub) => (
                            <div key={sub.id} className={`flex items-center gap-4 p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 group/item shadow-sm ${isLocked ? 'bg-white/5 border-white/5' : themeStyles.subModule}`}>
                               <span className={`
                                  flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg
                                  text-[10px] font-mono font-bold border
                                  ${isLocked ? 'bg-slate-800 text-slate-600 border-slate-700' : 'bg-black/20 border-white/10 text-white/90 group-hover/item:bg-white/20'}
                               `}>
                                  {sub.id}
                               </span>
                               <span className={`text-xs font-bold tracking-wide transition-colors ${isLocked ? 'text-slate-600' : 'text-slate-200 group-hover/item:text-white'}`}>
                                  {sub.label}
                               </span>
                            </div>
                         ))}
                      </div>
                   </div>

                   {/* Background Ambient Glow */}
                   {!isLocked && (
                      <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-${module.theme}-500/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-${module.theme}-400/30 transition-colors duration-700`}></div>
                   )}
                </div>
             );
          })}
        </div>
      </div>
    );
  }

  // --- Step 2: Specific Area Selection (Within Major Area) ---
  if (selectedMajorArea) {
    const themeStyles = getThemeStyles(selectedMajorArea.theme);

    return (
      <div className="animate-fade-in max-w-[1200px] mx-auto min-h-[80vh] flex flex-col pt-8">
        {/* Navigation & Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6 relative">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-${selectedMajorArea.theme}-500/10 rounded-full blur-[120px] pointer-events-none`}></div>

            <button 
                onClick={() => setSelectedMajorArea(null)}
                className="relative z-10 mb-2 flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md hover:scale-105 transform duration-200"
            >
                <ChevronLeft className="w-4 h-4" /> Voltar para Grandes Áreas
            </button>

            <div className={`relative z-10 w-24 h-24 rounded-[2rem] flex items-center justify-center backdrop-blur-xl mb-2 ${themeStyles.card} shadow-2xl`}>
                <selectedMajorArea.icon className={`w-10 h-10 text-${selectedMajorArea.theme}-200`} />
            </div>
            
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white font-heading tracking-tight mb-4 drop-shadow-xl">
                    {selectedMajorArea.name}
                </h2>
                <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto leading-relaxed bg-black/20 p-4 rounded-2xl border border-white/5 backdrop-blur-sm inline-block">
                    Selecione sua <span className={`text-${selectedMajorArea.theme}-300 font-bold border-b border-${selectedMajorArea.theme}-500/30`}>Área de Conhecimento</span> específica para calibrar os algoritmos.
                </p>
            </div>
        </div>

        {/* Specific Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-20 relative z-10">
            {selectedMajorArea.specificAreas.map((area, index) => (
                <button 
                    key={index}
                    onClick={() => setSelectedSpecificArea(area)}
                    className={`group flex items-center justify-between p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 text-left ${themeStyles.card} bg-white/[0.03]`}
                >
                    <span className="text-base font-bold text-slate-200 group-hover:text-white transition-colors tracking-wide">
                        {area}
                    </span>
                    <div className={`p-2 rounded-full ${themeStyles.pill} opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 shadow-md`}>
                        <ChevronRight className="w-4 h-4" />
                    </div>
                </button>
            ))}
        </div>
      </div>
    );
  }

  // --- Step 1: Major Area Selection (Grid) ---
  return (
    <div className="animate-fade-in max-w-[1400px] mx-auto flex flex-col items-center justify-center min-h-[80vh]">
      
      <div className="text-center mb-20 space-y-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold tracking-wide uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-md">
            <Target className="w-3 h-3" />
            Calibração de Contexto
        </div>
        
        <h1 className="relative z-10 text-5xl md:text-7xl font-black text-white font-heading tracking-tight drop-shadow-2xl">
            Selecione a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Grande Área</span>
        </h1>
        <p className="relative z-10 text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed font-light">
            O sistema irá carregar os <span className="text-white font-bold border-b border-cyan-500/30">Módulos de Inteligência (A-H)</span> com as regras específicas do CNPq.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full px-4 lg:px-12 pb-20">
        {areas.map((area) => {
          const themeStyles = getThemeStyles(area.theme);
          return (
            <button
                key={area.id}
                onClick={() => setSelectedMajorArea(area)}
                className={`group relative flex flex-col items-start p-8 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden text-left shadow-lg hover:shadow-2xl ${themeStyles.card}`}
            >
                <div className="relative z-10 w-full h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${themeStyles.iconBox}`}>
                        <area.icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-3 font-heading tracking-tight group-hover:text-white transition-colors ${themeStyles.title.replace('text-transparent bg-clip-text', 'text-slate-200')}`}>
                        {area.name}
                    </h3>
                    
                    <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                        {area.description}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between w-full pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-hover:text-slate-400">
                            {area.specificAreas.length} Subáreas
                        </span>
                        <div className={`p-2 rounded-full transition-all transform group-hover:translate-x-1 ${themeStyles.pill}`}>
                            <ArrowRight className="w-4 h-4" />
                        </div>
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