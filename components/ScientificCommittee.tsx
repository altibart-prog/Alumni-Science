import React from 'react';
import { ShieldCheck, Database, Brain, ArrowLeft, MapPin, Building2, GraduationCap, Network } from 'lucide-react';
import { ViewState } from '../types';

interface ScientificCommitteeProps {
  onBack: () => void;
}

const ScientificCommittee: React.FC<ScientificCommitteeProps> = ({ onBack }) => {
  
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
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30 text-slate-50 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      {/* Navbar Minimal */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                <div className="p-2 rounded-full bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 transition-all">
                    <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Voltar ao Início</span>
            </button>
            <span className="text-slate-500 text-sm tracking-widest uppercase font-semibold">Curadoria & Ciência</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 shadow-lg mb-4">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-100 tracking-wide uppercase">Conselho de Integridade</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-tight">
            A Inteligência por trás <br/> da Inteligência.
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Nossa IA não aprende sozinha. Ela é guiada por um comitê multidisciplinar de doutores e especialistas que garantem a <span className="text-cyan-400 font-semibold">precisão científica</span>, a <span className="text-cyan-400 font-semibold">ética</span> e a <span className="text-cyan-400 font-semibold">curadoria dos dados</span> que alimentam a Alumni Science.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
            {[
                { icon: Database, title: "Curadoria de Fontes", desc: "Apenas repositórios acadêmicos indexados e validados (Qualis A/B, Scopus, WoS) entram em nossa base." },
                { icon: Brain, title: "Supervisão Humana", desc: "Modelos de IA calibrados periodicamente por especialistas para evitar alucinações técnicas." },
                { icon: Network, title: "Diversidade Regional", desc: "Comitê representativo de todas as regiões do Brasil para evitar viéses institucionais." }
            ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/50 transition duration-300">
                    <item.icon className="w-8 h-8 text-cyan-500 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12 border-b border-slate-800 pb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white">Comitê Científico</h2>
                    <p className="text-slate-500 mt-2">Conheça as mentes que validam nossa tecnologia.</p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-slate-500 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Membros Ativos
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                    <div key={index} className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-1 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>
                        
                        <div className="bg-slate-950/80 rounded-[20px] p-6 h-full relative z-10 backdrop-blur-xl">
                            <div className="flex items-start justify-between mb-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-slate-800 group-hover:ring-cyan-500/50 transition-all">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-slate-800 text-[10px] font-bold text-cyan-400 px-2 py-1 rounded-md border border-slate-700 shadow-lg">
                                        {member.expert}
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                                        <MapPin className="w-3 h-3" /> {member.region}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="space-y-1 mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                                <p className="text-sm font-medium text-cyan-600">{member.title}</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mt-1">{member.role}</p>
                            </div>

                            <div className="pt-4 mt-4 border-t border-slate-900 flex items-center gap-2 text-slate-500 text-xs">
                                <Building2 className="w-3 h-3" />
                                <span className="truncate">{member.institution}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-slate-800">
                    <h3 className="text-xl font-bold text-white mb-2">Transparência Algorítmica</h3>
                    <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6">
                        Publicamos trimestralmente relatórios de auditoria sobre a base de dados e viéses dos modelos, assinados por este comitê.
                    </p>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-bold flex items-center gap-2 mx-auto hover:underline underline-offset-4">
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