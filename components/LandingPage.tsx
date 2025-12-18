import React from 'react';
import { 
  BookOpen, ChevronRight, Users, Network, 
  Instagram, Linkedin, Youtube, Mail, 
  MessageCircle, Globe, Sparkles, ArrowRight,
  CheckCircle2, Cpu, ShieldCheck, Zap, Layers,
  Trophy, GraduationCap, Microscope
} from 'lucide-react';
import { ViewState } from '../types';

const GoldenEagleIcon = ({ className = "w-12 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]`}>
    {/* Wing Layers */}
    <path d="M10 30L35 15L50 25L65 15L90 30" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 40L35 28L50 38L65 28L85 40" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 50L35 41L50 51L65 41L80 50" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Central Head / Body Structure */}
    <path d="M50 10L55 15L50 20L45 15L50 10Z" fill="url(#goldGradient)"/>
    
    {/* Central Cross / "Barbell" Element */}
    <path d="M38 55L50 67L62 55" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 55H35V50H30V55Z" fill="url(#goldGradient)"/>
    <path d="M65 55H70V50H65V55Z" fill="url(#goldGradient)"/>
    
    {/* Base Diamond */}
    <path d="M50 72L54 76L50 80L46 76L50 72Z" fill="url(#goldGradient)"/>
    <path d="M42 68L50 76L58 68" stroke="url(#goldGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

    <defs>
      <linearGradient id="goldGradient" x1="10" y1="10" x2="90" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE68A" />
        <stop offset="0.5" stopColor="#FBBF24" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);

interface LandingPageProps {
  onLogin: (provider: string) => void;
  onNavigate: (view: ViewState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigate }) => {
  const partners = [
    { name: "FIA", label: "PROFUTURO" },
    { name: "UNASP", label: "UNIVERSIDADE" },
    { name: "TRT-9", label: "TRIBUNAL REGIONAL" },
    { name: "TJ-SC", label: "PODER JUDICIÁRIO" },
    { name: "CEBRAEV", label: "VAREJO & CONSUMO" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* --- Animated Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-500/10 rounded-full mix-blend-screen filter blur-[100px] md:blur-[140px] animate-blob"></div>
        <div className="absolute top-0 -right-4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[100px] md:blur-[140px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('landing')}>
              <GoldenEagleIcon className="w-10 h-8 md:w-12 md:h-10" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl md:text-3xl font-black tracking-tighter text-white font-heading leading-none">ALUMNI</span>
                  <span className="text-xl md:text-3xl font-black tracking-tighter text-[#FBBF24] font-heading leading-none">INDEX</span>
                </div>
                <span className="hidden xs:block text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.45em] text-slate-400 uppercase font-bold mt-1 ml-0.5">SOVEREIGN ACADEMIC INTELLIGENCE</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md">
                 <button onClick={() => onNavigate('landing')} className="px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-white bg-white/10 shadow-sm transition-all border border-white/10">Home</button>
                 <button onClick={() => onNavigate('committee')} className="px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all">Comitê</button>
                 <button className="px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all">Instituições</button>
               </div>
               
               <button 
                onClick={() => onLogin('google')}
                className="inline-flex h-10 md:h-12 items-center justify-center rounded-xl md:rounded-2xl bg-white px-4 md:px-8 font-black text-slate-950 transition-all hover:bg-amber-400 active:scale-95"
              >
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-2">
                  <span className="hidden xs:inline">ACESSAR</span> PLATAFORMA
                  <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <div className="relative pt-32 md:pt-48 pb-20 md:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 md:px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.1)] animate-fade-in-up backdrop-blur-md mx-auto lg:mx-0">
                <Trophy className="w-3 md:w-4 h-3 md:h-4" />
                <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase font-heading">The Universal Gold Standard v2.5</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter font-heading">
                  Sua Bússola <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600">Soberana</span><br className="hidden sm:block" />
                  <span className="text-2xl sm:text-4xl lg:text-5xl text-slate-400 font-bold opacity-80 uppercase tracking-tighter">no Universo Acadêmico Global.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
                  Inteligência artificial especializada em todas as áreas do conhecimento CAPES. Navegue pelo Ciclo 2025-2028 com precisão soberana.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => onLogin('google')}
                  className="px-8 md:px-12 py-5 md:py-6 bg-white text-slate-950 rounded-[1.5rem] md:rounded-[2rem] font-black text-xs md:text-sm transition-all hover:bg-amber-400 flex items-center justify-center gap-3 group shadow-2xl hover:-translate-y-1"
                >
                  <Zap className="w-5 h-5 fill-slate-950" />
                  EXPERIMENTAR GRATUITAMENTE
                </button>
                <button 
                  onClick={() => onNavigate('committee')}
                  className="px-8 md:px-12 py-5 md:py-6 bg-white/5 text-white border border-white/10 rounded-[1.5rem] md:rounded-[2rem] font-black text-xs md:text-sm transition-all hover:bg-white/10 flex items-center justify-center gap-3 backdrop-blur-xl"
                >
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  CONSULTAR CONSELHO
                </button>
              </div>
            </div>

            {/* Visual Access Card */}
            <div className="relative group max-w-lg mx-auto lg:max-w-none w-full">
               <div className="absolute -inset-6 bg-gradient-to-br from-amber-500/10 to-transparent rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
               <div className="relative bg-[#0f172a]/60 backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 shadow-2xl border border-white/10 overflow-hidden">
                  <div className="flex items-center gap-4 mb-8 md:mb-12">
                     <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/20 rounded-xl md:rounded-2xl flex items-center justify-center border border-amber-500/30">
                        <Users className="w-6 md:w-8 h-6 md:h-8 text-amber-300" />
                     </div>
                     <div>
                        <h3 className="text-xl md:text-3xl font-black text-white font-heading tracking-tight">Acesso Exclusivo</h3>
                        <p className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">PESQUISADORES & LABORATÓRIOS</p>
                     </div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                     <button onClick={() => onLogin('google')} className="w-full bg-white/5 hover:bg-white/10 text-white font-black h-16 md:h-20 rounded-xl md:rounded-[1.5rem] flex items-center justify-center gap-3 md:gap-5 border border-white/10 transition-all active:scale-95 group/btn">
                        <img src="https://www.google.com/favicon.ico" alt="G" className="w-5 h-5 grayscale group-hover/btn:grayscale-0 transition-all" />
                        <span className="text-xs md:text-sm">Entrar com Google Acadêmico</span>
                     </button>
                     
                     <div className="relative py-4 md:py-6 flex items-center">
                        <div className="flex-1 border-t border-white/5"></div>
                        <span className="px-4 text-[9px] text-slate-500 uppercase tracking-widest font-black">OU E-MAIL INSTITUCIONAL</span>
                        <div className="flex-1 border-t border-white/5"></div>
                     </div>

                     <div className="space-y-3 md:space-y-4">
                        <input type="email" placeholder="nome@universidade.edu.br" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-[1.5rem] px-6 h-14 md:h-16 text-white font-bold placeholder:text-slate-600 focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition-all" />
                        <button onClick={() => onLogin('email')} className="w-full bg-amber-600 hover:bg-amber-500 text-white h-14 md:h-16 rounded-xl md:rounded-[1.5rem] font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-[0_0_40px_rgba(251,191,36,0.2)]">
                            SOLICITAR LINK SOBERANO
                        </button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white/[0.02] border-y border-white/5 py-12 md:py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="text-[9px] md:text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] md:tracking-[0.6em] mb-8 md:mb-16">CHANCELADO POR ECOSSISTEMAS DE ALTA PERFORMANCE</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
              {partners.map((p, i) => (
                <div key={i} className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-black text-white font-heading">{p.name}</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">{p.label}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Coverage Grid */}
      <div className="py-20 md:py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 md:mb-28">
                <h2 className="text-4xl md:text-7xl font-black text-white font-heading mb-6 tracking-tighter">
                    Toda a <span className="text-amber-400">Ciência</span> em um só Lugar.
                </h2>
                <div className="h-1.5 w-24 md:w-32 bg-amber-500 mx-auto rounded-full"></div>
                <p className="mt-8 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-4">
                   Nossa inteligência cobre as 9 Grandes Áreas do CNPq e todas as subáreas CAPES, da Engenharia de Software à Arqueologia.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                <div className="md:col-span-2 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-14 relative group hover:border-amber-500/30 transition-all duration-700">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-500/10 rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-8 border border-amber-500/20">
                        <GraduationCap className="w-8 md:w-10 h-8 md:h-10 text-amber-400" />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6 font-heading tracking-tight">Qualis Soberano 2025-2028</h3>
                    <p className="text-slate-400 text-base md:text-xl leading-relaxed font-medium">
                        Algoritmos atualizados em tempo real com as novas portarias. Avalie sua produção em qualquer área do conhecimento com rigor absoluto.
                    </p>
                </div>

                <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-14 group hover:border-indigo-500/30 transition-all duration-700">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-500/10 rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-8 border border-indigo-500/20">
                        <Microscope className="w-8 md:w-10 h-8 md:h-10 text-indigo-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 font-heading tracking-tight">Impacto Global</h3>
                    <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-medium">
                        Integração total com Scopus, WoS e SciELO para análise de visibilidade e citações internacionais.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#020617] py-16 md:py-28 border-t border-white/5 text-slate-500 relative z-10 text-center md:text-left">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
               <div className="flex items-center gap-3">
                  <GoldenEagleIcon className="w-8 h-7 md:w-10 md:h-9" />
                  <span className="text-2xl md:text-3xl font-black text-white font-heading tracking-tighter">ALUMNI <span className="text-amber-400">INDEX</span></span>
               </div>
               <p className="text-[10px] md:text-sm font-black uppercase tracking-widest opacity-60">© 2024 Alumni Index Sovereign Platform. Todas as Áreas CAPES.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
               <a href="#" className="hover:text-amber-400 transition-colors">Privacidade</a>
               <a href="#" className="hover:text-amber-400 transition-colors">Termos</a>
               <a href="#" className="hover:text-amber-400 transition-colors">Lab Hub</a>
               <a href="#" className="hover:text-amber-400 transition-colors">Suporte</a>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default LandingPage;