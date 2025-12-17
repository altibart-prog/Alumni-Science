import React from 'react';
import { 
  BookOpen, ChevronRight, Users, Network, 
  Instagram, Facebook, Linkedin, Youtube, Mail, 
  MessageCircle, Globe, MapPin, Sparkles, ArrowRight,
  CheckCircle2, Cpu, ShieldCheck, Zap, Layers, Play
} from 'lucide-react';
import { ViewState } from '../types';

interface LandingPageProps {
  onLogin: (provider: string) => void;
  onNavigate: (view: ViewState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigate }) => {
  
  // --- Data & Config ---
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Linkedin, href: "#", label: "Linkedin" },
  ];

  const partners = [
    { name: "FIA", label: "PROFUTURO" },
    { name: "UNASP", label: "UNIVERSIDADE" },
    { name: "TRT-9", label: "TRIBUNAL REGIONAL" },
    { name: "TJ-SC", label: "PODER JUDICIÁRIO" },
    { name: "CEBRAEV", label: "VAREJO & CONSUMO" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* --- Global Styles for Animations --- */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Dynamic Blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000"></div>
        
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/70 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => onNavigate('landing')}
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-full h-full bg-[#0f172a] border border-white/10 rounded-xl flex items-center justify-center ring-1 ring-white/10">
                  <BookOpen className="w-5 h-5 text-cyan-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-heading leading-none">
                  Alumni<span className="text-cyan-300">.in</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-mono mt-0.5">Science Platform</span>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
               <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
                 <button onClick={() => onNavigate('landing')} className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-white/10 shadow-sm transition-all border border-white/5">Home</button>
                 <button onClick={() => onNavigate('committee')} className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">Comitê Científico</button>
                 <button className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">Preços</button>
               </div>
               
               <div className="w-px h-6 bg-white/10"></div>

               <button 
                onClick={() => onLogin('google')}
                className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-xl bg-white px-6 font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-50 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <span className="relative text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  Acessar
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Hero Section --- */}
      <div className="relative pt-32 lg:pt-48 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Copy */}
            <div className="space-y-8 relative z-20">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 backdrop-blur-md animate-fade-in-up shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase font-mono">System Online v2.4</span>
              </div>

              {/* Headlines */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight font-heading drop-shadow-lg">
                  Inteligência que <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 animate-gradient-x">
                    Publica o Futuro.
                  </span>
                </h1>
                <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-light">
                  A plataforma definitiva para pesquisadores de alta performance. 
                  Transforme dados brutos em publicações <span className="text-white font-medium">Qualis A</span> com o poder da Inteligência Artificial Generativa.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => onLogin('google')}
                  className="relative px-8 py-4 bg-white text-slate-950 rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1 flex items-center gap-2 group hover:bg-cyan-50"
                >
                  <Zap className="w-4 h-4 fill-slate-950 group-hover:fill-cyan-600 group-hover:text-cyan-600 transition-colors" />
                  COMEÇAR AGORA
                </button>
                <button 
                  onClick={() => onNavigate('committee')}
                  className="px-8 py-4 bg-white/[0.05] text-white border border-white/10 hover:border-white/30 rounded-xl font-bold text-sm transition-all hover:bg-white/10 flex items-center gap-2 backdrop-blur-md"
                >
                  <ShieldCheck className="w-4 h-4 text-slate-300" />
                  VALIDAÇÃO CIENTÍFICA
                </button>
              </div>

              {/* Social Proof */}
              <div className="pt-8 flex items-center gap-4 text-sm text-slate-400 border-t border-white/5 max-w-md">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden ring-2 ring-white/5`}>
                           <img src={`https://randomuser.me/api/portraits/thumb/men/${i*12}.jpg`} alt="User" className="w-full h-full opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center text-[9px] font-bold text-white ring-2 ring-white/5">
                        +2k
                    </div>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-white font-bold text-xs">Pesquisadores Ativos</span>
                    <span className="text-[10px] opacity-70">De 120+ Instituições</span>
                 </div>
              </div>
            </div>

            {/* Right Column: Login Card / Visual */}
            <div className="relative group perspective-1000 z-20">
               {/* Decorative Ring */}
               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
               
               <div className="relative glass-panel rounded-[2rem] p-8 lg:p-10 transform transition-transform duration-500 hover:rotate-y-2 hover:scale-[1.01]">
                  <div className="flex justify-between items-center mb-10">
                    <div>
                        <h3 className="text-2xl font-bold text-white font-heading">Login Seguro</h3>
                        <p className="text-slate-400 text-xs mt-1 font-mono">ENCRYPTED CONNECTION ESTABLISHED</p>
                    </div>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shadow-inner">
                        <Users className="w-6 h-6 text-cyan-300" />
                    </div>
                  </div>

                  <div className="space-y-4">
                     <button onClick={() => onLogin('google')} className="w-full bg-white hover:bg-slate-50 text-slate-900 font-bold h-14 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] shadow-lg group/btn font-heading relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent -translate-x-full group-hover/btn:animate-shimmer"></div>
                        <img src="https://www.google.com/favicon.ico" alt="G" className="w-5 h-5 grayscale group-hover/btn:grayscale-0 transition-all" />
                        <span>Continuar com Google</span>
                     </button>
                     
                     <button onClick={() => onLogin('microsoft')} className="w-full bg-[#0f172a]/60 hover:bg-[#0f172a] text-white font-semibold h-14 rounded-xl flex items-center justify-center gap-3 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm">
                        <svg className="w-5 h-5" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>
                        <span>Conta Microsoft</span>
                     </button>

                     <div className="relative py-6">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                        <div className="relative flex justify-center"><span className="bg-[#040816] px-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold font-mono">Acesso Institucional</span></div>
                     </div>

                     <form className="group/form relative space-y-3">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input type="email" placeholder="Email Acadêmico" className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 h-12 text-white focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-500 font-medium text-sm" />
                        </div>
                        <button type="button" onClick={() => onLogin('email')} className="w-full bg-slate-800 hover:bg-slate-700 text-white h-12 rounded-xl text-xs font-bold transition-colors uppercase tracking-wider border border-white/5 shadow-lg">
                            Entrar com Email
                        </button>
                     </form>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>SECURE SOCKET LAYER</span>
                      <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> VERIFIED</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bento Grid Features (New) --- */}
      <div className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-4">
                    Poder Computacional. <span className="text-slate-400">Rigor Acadêmico.</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {/* Card 1: Large */}
                <div className="md:col-span-2 rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-10 relative overflow-hidden group hover:border-cyan-400/30 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                        <Network className="w-64 h-64 text-cyan-300" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-end">
                        <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 mb-6 backdrop-blur-md">
                            <Cpu className="w-7 h-7 text-cyan-300" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 font-heading">Processamento Neural</h3>
                        <p className="text-slate-300 max-w-md text-lg">
                            Nossa IA não apenas lê; ela compreende a semântica de milhares de artigos simultaneamente para encontrar conexões invisíveis.
                        </p>
                    </div>
                </div>

                {/* Card 2: Tall */}
                <div className="md:row-span-2 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-10 flex flex-col relative overflow-hidden group hover:border-fuchsia-400/30 transition-all hover:shadow-[0_0_30px_rgba(232,121,249,0.1)]">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div>
                    <div className="w-14 h-14 bg-fuchsia-500/10 rounded-2xl flex items-center justify-center border border-fuchsia-500/20 mb-auto backdrop-blur-md">
                        <Layers className="w-7 h-7 text-fuchsia-300" />
                    </div>
                    <div className="relative z-10 mt-8">
                        <h3 className="text-2xl font-bold text-white mb-3 font-heading">Review Automatizado</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-8">
                            Simule o processo de peer-review antes da submissão. Obtenha feedback crítico sobre:
                        </p>
                        <ul className="space-y-4">
                            {['Metodologia', 'Ineditismo', 'Referências', 'Estrutura'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-slate-200 bg-white/5 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                                    <CheckCircle2 className="w-4 h-4 text-fuchsia-300" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Card 3: Standard */}
                <div className="rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-10 relative overflow-hidden group hover:bg-white/[0.05] transition-all">
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all"></div>
                     <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 mb-6 backdrop-blur-md">
                        <Globe className="w-7 h-7 text-blue-300" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2 font-heading">Alcance Global</h3>
                     <p className="text-slate-300 text-base">Tradução e adaptação cultural para revistas internacionais de alto impacto (JCR).</p>
                </div>

                {/* Card 4: Standard */}
                <div className="rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-10 relative overflow-hidden group hover:bg-white/[0.05] transition-all">
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all"></div>
                     <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mb-6 backdrop-blur-md">
                        <ShieldCheck className="w-7 h-7 text-emerald-300" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2 font-heading">Anti-Plágio IA</h3>
                     <p className="text-slate-300 text-base">Garantia de originalidade com verificação cruzada em 80 milhões de documentos.</p>
                </div>
            </div>
        </div>
      </div>

      {/* --- Partners Marquee --- */}
      <div className="border-y border-white/5 bg-[#020617]/50 backdrop-blur-sm py-16 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-10 font-mono">
             Instituições Parceiras
           </p>
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              {partners.map((p, i) => (
                <div key={i} className="flex flex-col items-center group cursor-default">
                    <span className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors font-heading drop-shadow-lg">{p.name}</span>
                    <span className="text-[9px] uppercase tracking-widest text-slate-500 group-hover:text-cyan-500/70">{p.label}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* --- Footer --- */}
      <footer className="relative bg-[#000000] pt-20 pb-10 z-10 border-t border-white/10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div className="md:col-span-1 space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-lg font-bold text-white font-heading">Alumni<span className="text-cyan-400">.in</span></span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Democratizando o acesso à publicação científica de alto nível através da tecnologia.
                  </p>
                  <div className="flex gap-4">
                     {socialLinks.map((social, idx) => (
                       <a key={idx} href={social.href} className="text-slate-500 hover:text-white transition-colors">
                         <social.icon className="w-5 h-5" />
                       </a>
                     ))}
                  </div>
               </div>

               <div>
                  <h4 className="text-white font-bold mb-6 font-heading text-sm uppercase tracking-wider">Produto</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                     <li><a href="#" className="hover:text-cyan-300 transition-colors">Features</a></li>
                     <li><a href="#" className="hover:text-cyan-300 transition-colors">Integrações</a></li>
                     <li><button onClick={() => onNavigate('committee')} className="hover:text-cyan-300 transition-colors">Comitê Científico</button></li>
                     <li><a href="#" className="hover:text-cyan-300 transition-colors">Roadmap</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-white font-bold mb-6 font-heading text-sm uppercase tracking-wider">Suporte</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                     <li><a href="#" className="hover:text-cyan-300 transition-colors">Documentação</a></li>
                     <li><a href="#" className="hover:text-cyan-300 transition-colors">API Status</a></li>
                     <li><a href="#" className="hover:text-cyan-300 transition-colors">Fale Conosco</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-white font-bold mb-6 font-heading text-sm uppercase tracking-wider">Legal</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                     <li><a href="#" className="hover:text-cyan-300 transition-colors">Privacidade</a></li>
                     <li><a href="#" className="hover:text-cyan-300 transition-colors">Termos</a></li>
                     <li><a href="#" className="hover:text-cyan-300 transition-colors">Compliance</a></li>
                  </ul>
               </div>
            </div>

            <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono">
               <p>© 2024 Alumni Science. All rights reserved.</p>
               <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2 text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> ALL SYSTEMS OPERATIONAL</span>
                  <span>SAO PAULO • BRAZIL</span>
               </div>
            </div>
         </div>
      </footer>

      {/* --- Floating Widget --- */}
      <a 
        href="https://wa.me/5511950421307" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <span className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></span>
        <div className="relative bg-[#25D366] hover:bg-[#1ebc57] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-white/20">
           <MessageCircle className="w-6 h-6 fill-white text-white" />
        </div>
      </a>

    </div>
  );
};

export default LandingPage;