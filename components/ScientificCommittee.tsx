import React, { useState } from 'react';
import { ShieldCheck, Database, Brain, ArrowLeft, MapPin, Building2, GraduationCap, Network, CheckCircle2, LayoutGrid, List } from 'lucide-react';

interface ScientificCommitteeProps {
  onBack: () => void;
}

const ScientificCommittee: React.FC<ScientificCommitteeProps> = ({ onBack }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const members = [
    {
      name: "Dr. Ricardo Viana",
      title: "Ph.D. em Ciência de Dados",
      role: "Diretor de Integridade de Dados",
      institution: "Universidade de São Paulo (USP)",
      region: "Sudeste",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      expert: "Machine Learning"
    },
    {
      name: "Dra. Helena Costa",
      title: "Pós-Doc em Bioética",
      role: "Curadora de Ética em IA",
      institution: "Pontifícia Universidade Católica (PUC-RS)",
      region: "Sul",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      expert: "Ética Acadêmica"
    },
    {
      name: "Dr. Carlos Mendes",
      title: "Doutor em Engenharia de Software",
      role: "Líder de Arquitetura de Conhecimento",
      institution: "Universidade Federal do Ceará (UFC)",
      region: "Nordeste",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      expert: "Knowledge Graphs"
    },
    {
      name: "Dra. Amanda Torres",
      title: "Mestre em Estatística Aplicada",
      role: "Auditoria Algorítmica",
      institution: "Universidade de Brasília (UnB)",
      region: "Centro-Oeste",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      expert: "Viés em IA"
    },
    {
        name: "Dr. Yuan Chen",
        title: "Ph.D. em Linguística Computacional",
        role: "Processamento de Linguagem Natural",
        institution: "UNICAMP",
        region: "Sudeste",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        expert: "LLMs & NLP"
      },
      {
        name: "Dra. Sofia Alencar",
        title: "Doutora em Direito Digital",
        role: "Compliance & LGPD",
        institution: "Universidade Federal do Pará (UFPA)",
        region: "Norte",
        image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        expert: "Regulação de IA"
      }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
      </div>

      {/* Navbar Minimal */}
      <nav className="fixed w-full bg-[#020617]/80 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={onBack} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="p-2 rounded-full bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                    <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold font-heading">Voltar ao Início</span>
            </button>
            <span className="inline-flex items-center gap-2 text-cyan-500/80 text-xs tracking-[0.2em] uppercase font-bold bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/10">
                <CheckCircle2 className="w-3 h-3" />
                Curadoria & Ciência
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-100 tracking-wide uppercase font-heading">Conselho de Integridade v2.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight font-heading">
            A Inteligência por trás <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                da Inteligência.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Nossa IA não aprende sozinha. Ela é guiada por um comitê multidisciplinar de doutores que garantem a <span className="text-cyan-400 font-semibold">precisão científica</span>, a <span className="text-cyan-400 font-semibold">ética</span> e a <span className="text-cyan-400 font-semibold">curadoria dos dados</span>.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20">
            {[
                { icon: Database, title: "Curadoria de Fontes", desc: "Apenas repositórios acadêmicos indexados e validados (Qualis A/B, Scopus, WoS) entram em nossa base." },
                { icon: Brain, title: "Supervisão Humana", desc: "Modelos de IA calibrados periodicamente por especialistas para evitar alucinações técnicas." },
                { icon: Network, title: "Diversidade Regional", desc: "Comitê representativo de todas as regiões do Brasil para evitar viéses institucionais." }
            ].map((item, i) => (
                <div key={i} className="group bg-[#0f172a]/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:bg-[#1e293b]/50 transition duration-300 hover:border-cyan-500/30 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                        <item.icon className="w-6 h-6 text-cyan-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="relative py-24 bg-gradient-to-b from-[#020617] to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-slate-800 pb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-white font-heading">Comitê Científico</h2>
                    <p className="text-slate-500 mt-2">Conheça as mentes que validam nossa tecnologia.</p>
                </div>
                
                <div className="flex items-center gap-6">
                  {/* View Toggle */}
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-1 flex gap-1">
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                      title="Visualização em Grade"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                      title="Visualização em Lista"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="hidden md:flex items-center gap-2 text-emerald-500 text-sm font-medium bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Membros Ativos
                  </div>
                </div>
            </div>

            <div className={viewMode === 'grid' ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-4 max-w-5xl mx-auto"}>
                {members.map((member, index) => (
                    viewMode === 'grid' ? (
                      // GRID VIEW CARD
                      <div key={index} className="group relative bg-[#0f172a] border border-white/5 rounded-[32px] p-1 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] animate-fade-in-up">
                          {/* Spotlight Effect */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                          
                          <div className="bg-[#020617]/80 rounded-[28px] p-7 h-full relative z-10 backdrop-blur-xl">
                              <div className="flex items-start justify-between mb-8">
                                  <div className="relative">
                                      <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-[#1e293b] group-hover:ring-cyan-500/30 transition-all duration-500">
                                          <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                      </div>
                                      <div className="absolute -bottom-3 -right-3 bg-slate-900 text-[10px] font-bold text-cyan-400 px-3 py-1.5 rounded-lg border border-slate-800 shadow-xl tracking-wide uppercase font-heading">
                                          {member.expert}
                                      </div>
                                  </div>
                                  <div className="flex flex-col items-end">
                                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-white/5">
                                          <MapPin className="w-3 h-3 text-cyan-600" /> {member.region}
                                      </span>
                                  </div>
                              </div>
                              
                              <div className="space-y-1.5 mb-6">
                                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-heading">{member.name}</h3>
                                  <p className="text-sm font-semibold text-indigo-400">{member.title}</p>
                                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mt-2 border-l-2 border-slate-800 pl-3 group-hover:border-cyan-500/30 transition-all">{member.role}</p>
                              </div>

                              <div className="pt-5 mt-4 border-t border-slate-800/50 flex items-center gap-2.5 text-slate-500 text-xs font-medium">
                                  <Building2 className="w-3.5 h-3.5 text-slate-600" />
                                  <span className="truncate">{member.institution}</span>
                              </div>
                          </div>
                      </div>
                    ) : (
                      // LIST VIEW CARD
                      <div key={index} className="group relative bg-[#0f172a] border border-white/5 rounded-[24px] p-1 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] animate-fade-in-up">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                          
                          <div className="bg-[#020617]/80 rounded-[20px] p-6 h-full relative z-10 backdrop-blur-xl flex flex-col md:flex-row items-center gap-6">
                              <div className="relative flex-shrink-0">
                                   <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-[#1e293b] group-hover:ring-cyan-500/30 transition-all duration-500">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                   </div>
                              </div>

                              <div className="flex-1 text-center md:text-left">
                                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-heading">{member.name}</h3>
                                    <span className="hidden md:block w-1 h-1 bg-slate-600 rounded-full"></span>
                                    <p className="text-sm font-semibold text-indigo-400">{member.title}</p>
                                  </div>
                                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                     <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{member.role}</p>
                                     <span className="hidden md:inline-flex px-2 py-0.5 rounded border border-cyan-500/20 bg-cyan-950/30 text-[10px] text-cyan-400 font-bold uppercase tracking-wide">
                                        {member.expert}
                                     </span>
                                  </div>
                              </div>

                              <div className="flex flex-col items-center md:items-end gap-2 border-t md:border-t-0 md:border-l border-slate-800/50 pt-4 md:pt-0 md:pl-6 w-full md:w-auto min-w-[200px]">
                                   <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                                      <Building2 className="w-3.5 h-3.5 text-slate-600" />
                                      <span className="truncate max-w-[200px]">{member.institution.split('(')[0]}</span>
                                   </div>
                                   <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                      <MapPin className="w-3 h-3 text-cyan-600/70" /> {member.region}
                                   </span>
                              </div>
                          </div>
                      </div>
                    )
                ))}
            </div>

            <div className="mt-24 text-center">
                <div className="inline-flex flex-col p-10 rounded-[40px] bg-gradient-to-b from-[#0f172a] to-[#020617] border border-white/5 relative overflow-hidden max-w-2xl mx-auto">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 font-heading">Transparência Algorítmica</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        Publicamos trimestralmente relatórios de auditoria sobre a base de dados e viéses dos modelos, assinados e revisados por este comitê.
                    </p>
                    <button className="text-cyan-400 hover:text-white bg-cyan-950/30 hover:bg-cyan-600 px-6 py-3 rounded-xl border border-cyan-500/20 hover:border-cyan-500 transition-all text-sm font-bold flex items-center gap-2 mx-auto">
                        <GraduationCap className="w-4 h-4" />
                        Ler Manifesto Científico
                    </button>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ScientificCommittee;