
import React from 'react';
import { 
  Users, Globe, Sparkles, ArrowRight,
  ShieldCheck, Zap, GraduationCap, Microscope,
  Phone, Mail, MapPin, Instagram, Linkedin, Youtube, Facebook,
  Search, ChevronRight, Trophy, BookOpen, CheckCircle2
} from 'lucide-react';
import { ViewState } from '../types';

export const SovereignEagleLogo = ({ className = "w-12 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} drop-shadow-[0_0_10px_rgba(13,161,161,0.4)]`}>
    {/* Geometric Sovereign Eagle - Tech Style */}
    <path d="M50 5L58 15H42L50 5Z" fill="url(#tealGradient)"/>
    <path d="M10 35L40 15L50 28L60 15L90 35" stroke="url(#tealGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 45L45 32L50 40L55 32L80 45" stroke="url(#tealGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Central Knowledge Diamond */}
    <path d="M45 55L50 62L55 55L50 48L45 55Z" fill="url(#tealGradient)"/>
    
    {/* Base Chevrons */}
    <path d="M35 65L50 78L65 65" stroke="url(#tealGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 72L50 80L58 72" stroke="url(#tealGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

    <defs>
      <linearGradient id="tealGradient" x1="10" y1="5" x2="90" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#22d3ee" />
        <stop offset="0.5" stopColor="#0da1a1" />
        <stop offset="1" stopColor="#0b8a8a" />
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0da1a1]/30 overflow-x-hidden">
      
      {/* --- Alumni Top Bar --- */}
      <div className="bg-[#0da1a1] text-white py-2 text-[10px] md:text-[11px] font-bold tracking-wide">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> (11) 98179-5390</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> publisher@alumniin.com</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> São Paulo | Brazil | Florida</span>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <Instagram className="w-3.5 h-3.5 cursor-pointer hover:scale-110 transition-transform" />
            <Linkedin className="w-3.5 h-3.5 cursor-pointer hover:scale-110 transition-transform" />
            <Youtube className="w-3.5 h-3.5 cursor-pointer hover:scale-110 transition-transform" />
            <Facebook className="w-3.5 h-3.5 cursor-pointer hover:scale-110 transition-transform" />
            <div className="h-3 w-px bg-white/30 mx-1"></div>
            <Search className="w-3.5 h-3.5 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* --- Navigation --- */}
      <nav className="sticky top-0 w-full z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => onNavigate('landing')}>
              <SovereignEagleLogo className="w-10 h-8 md:w-12 md:h-10" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl md:text-3xl font-black tracking-tighter text-slate-800 font-heading leading-none uppercase">Alumni</span>
                  <span className="text-xl md:text-3xl font-black tracking-tighter text-[#0da1a1] font-heading leading-none lowercase">.in</span>
                </div>
                <span className="hidden xs:block text-[8px] md:text-[9px] tracking-[0.4em] text-slate-400 uppercase font-black mt-1 ml-0.5">Sovereign Index</span>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-8">
               <div className="hidden lg:flex items-center gap-8">
                 <button onClick={() => onNavigate('landing')} className="text-sm font-bold text-[#0da1a1]">Home</button>
                 <button className="text-sm font-bold text-slate-500 hover:text-[#0da1a1] transition-colors">Sobre</button>
                 <button className="text-sm font-bold text-slate-500 hover:text-[#0da1a1] transition-colors">Editoriais</button>
                 <button className="text-sm font-bold text-slate-500 hover:text-[#0da1a1] transition-colors">Científicas</button>
                 <button className="text-sm font-bold text-slate-500 hover:text-[#0da1a1] transition-colors">Contato</button>
               </div>
               
               <button 
                onClick={() => onLogin('google')}
                className="inline-flex h-11 md:h-12 items-center justify-center rounded-xl bg-[#0da1a1] px-6 md:px-8 font-black text-white transition-all hover:bg-slate-900 active:scale-95 shadow-xl shadow-[#0da1a1]/20"
              >
                <span className="text-[10px] uppercase tracking-widest flex items-center gap-2">
                  ACESSAR PLATAFORMA
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero: Inovação e Transformação --- */}
      <div className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Network" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0da1a1]/10 border border-[#0da1a1]/30 text-[#0da1a1] backdrop-blur-md shadow-[0_0_30px_rgba(13,161,161,0.2)]">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase">NOSSA ESSÊNCIA</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter font-heading">
                  INOVAÇÃO E <br/>
                  <span className="text-[#0da1a1]">TRANSFORMAÇÃO</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-xl">
                  Acreditamos que a educação não tem período de existência, ela rompe o tempo, possibilidades, vai para além da geografia, o conhecimento transforma gerações e muda realidades sociais.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onLogin('google')}
                  className="px-10 py-5 bg-[#0da1a1] text-white rounded-2xl font-black text-xs md:text-sm transition-all hover:bg-white hover:text-[#0da1a1] flex items-center justify-center gap-3 group shadow-2xl hover:-translate-y-1"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  EXPERIMENTAR GRATUITAMENTE
                </button>
                <button 
                  onClick={() => onNavigate('committee')}
                  className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-xs md:text-sm transition-all hover:bg-white/10 flex items-center justify-center gap-3 backdrop-blur-xl"
                >
                  <ShieldCheck className="w-5 h-5 text-[#0da1a1]" />
                  CONSELHO CIENTÍFICO
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative">
               <div className="absolute -inset-10 bg-[#0da1a1]/20 blur-[120px] rounded-full animate-pulse"></div>
               <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#0da1a1]/20 rounded-full blur-[60px] -mr-10 -mt-10"></div>
                  
                  <div className="space-y-8 relative z-10">
                     <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#0da1a1]/10 rounded-2xl flex items-center justify-center border border-[#0da1a1]/30">
                           <Microscope className="w-8 h-8 text-[#0da1a1]" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold text-white font-heading tracking-tight">AI Academic Core</h3>
                           <p className="text-[#0da1a1] text-[10px] font-black uppercase tracking-widest">SOVEREIGN INTELLIGENCE</p>
                        </div>
                     </div>

                     <div className="space-y-4">
                        {[
                          "Avaliação Qualis 2025-2028",
                          "Análise de Impacto JCR/SJR",
                          "Redação Neural Assistida",
                          "Mapeamento de Lacunas Científicas"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                             {/* Fix: Added missing CheckCircle2 import */}
                             <CheckCircle2 className="w-4 h-4 text-[#0da1a1]" />
                             {item}
                          </div>
                        ))}
                     </div>

                     <div className="pt-8 border-t border-white/5">
                        <div className="flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                           <span>Processamento Neural</span>
                           <span className="text-[#0da1a1]">98.2% Accuracy</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full w-[98%] bg-gradient-to-r from-[#0da1a1] to-cyan-400"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bento Section: Áreas de Cobertura --- */}
      <div className="py-24 md:py-40 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 md:mb-32">
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 font-heading mb-6 tracking-tighter">
                    Toda a Ciência em uma <br className="hidden md:block"/>
                    <span className="text-[#0da1a1]">Única Plataforma</span>.
                </h2>
                <div className="h-1.5 w-24 bg-[#0da1a1] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-8 bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 relative group hover:shadow-2xl hover:shadow-[#0da1a1]/5 transition-all duration-700 overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                       <GraduationCap className="w-64 h-64 text-slate-900" />
                    </div>
                    <div className="relative z-10 max-w-lg">
                       <div className="w-16 h-16 bg-[#0da1a1]/10 rounded-2xl flex items-center justify-center mb-8">
                          <Trophy className="w-8 h-8 text-[#0da1a1]" />
                       </div>
                       <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 font-heading tracking-tight">Qualis Soberano 2025-2028</h3>
                       <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                          Nossos algoritmos são atualizados em tempo real com as portarias da CAPES e métricas globais de impacto. Garanta que sua produção esteja alinhada com os mais altos padrões de excelência.
                       </p>
                       <button className="mt-10 flex items-center gap-3 text-[#0da1a1] font-black text-xs uppercase tracking-widest group/btn">
                          Saber mais sobre o motor Qualis <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                       </button>
                    </div>
                </div>

                <div className="md:col-span-4 bg-[#0da1a1] rounded-[3rem] p-10 md:p-12 text-white shadow-2xl shadow-[#0da1a1]/20 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 border border-white/30 backdrop-blur-md">
                       <Microscope className="w-8 h-8 text-white" />
                    </div>
                    <div>
                       <h3 className="text-2xl md:text-3xl font-black mb-6 font-heading tracking-tight">Ecossistema Global</h3>
                       <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                          Integração total com as bases Scopus, Web of Science e SciELO para análise de visibilidade e citações internacionais em tempo real.
                       </p>
                    </div>
                </div>

                <div className="md:col-span-4 bg-slate-900 rounded-[3rem] p-10 md:p-12 text-white flex flex-col justify-between group">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                       <BookOpen className="w-8 h-8 text-[#0da1a1]" />
                    </div>
                    <div>
                       <h3 className="text-2xl md:text-3xl font-black mb-6 font-heading tracking-tight">Todas as Áreas CAPES</h3>
                       <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                          Da Engenharia de Software à Arqueologia. Nossa IA compreende as nuances de cada subárea científica.
                       </p>
                    </div>
                </div>

                <div className="md:col-span-8 bg-slate-50 rounded-[3rem] p-10 md:p-12 border border-slate-100 flex items-center justify-center">
                   <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                      {partners.map((p, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="text-2xl md:text-4xl font-black text-slate-950 font-heading">{p.name}</span>
                            <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">{p.label}</span>
                        </div>
                      ))}
                   </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- Footer Replicado --- */}
      <footer className="bg-slate-950 py-20 border-t border-white/5 text-slate-400 relative z-10 text-center md:text-left">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
               <div className="flex items-center gap-4">
                  <SovereignEagleLogo className="w-10 h-8" />
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-3xl font-black tracking-tighter text-white font-heading leading-none uppercase">Alumni</span>
                    <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#0da1a1] font-heading leading-none lowercase">.in</span>
                  </div>
               </div>
               <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60">© 2024 Alumni Index Sovereign Platform. Todos os Direitos Reservados.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-widest">
               <a href="#" className="hover:text-[#0da1a1] transition-colors">Privacidade</a>
               <a href="#" className="hover:text-[#0da1a1] transition-colors">Termos</a>
               <a href="#" className="hover:text-[#0da1a1] transition-colors">Lab Hub</a>
               <a href="#" className="hover:text-[#0da1a1] transition-colors">Suporte Institucional</a>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default LandingPage;
