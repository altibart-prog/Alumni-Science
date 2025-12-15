import React from 'react';
import { 
  BookOpen, Award, ChevronRight, Users, Network, 
  Instagram, Facebook, Linkedin, Youtube, Mail, 
  MessageCircle, Globe, MapPin, Sparkles, ArrowRight
} from 'lucide-react';
import { ViewState } from '../types';

interface LandingPageProps {
  onLogin: (provider: string) => void;
  onNavigate: (view: ViewState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigate }) => {
  
  // Lista de Parceiros
  const partners = [
    { 
      name: "PROFUTURO FIA", 
      logo: "https://upload.wikimedia.org/wikipedia/pt/1/1e/Logo_FIA.png",
      width: "w-32"
    },
    { 
      name: "ALUMNI IN", 
      component: (
        <div className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-cyan-500" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-heading">
            Alumni<span className="text-cyan-500">.in</span>
          </span>
        </div>
      )
    },
    { 
      name: "UNASP", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Logo_UNASP.png",
      width: "w-32"
    },
    { 
      name: "UNICURITIBA", 
      logo: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Logo_Unicuritiba.png",
      width: "w-36"
    },
    { 
      name: "CEBRAEV", 
      component: (
         <div className="flex flex-col items-center">
            <span className="text-xl font-black tracking-widest text-yellow-500 bg-black px-2 py-1 rounded font-heading">CEBRAEV</span>
            <span className="text-[8px] font-medium text-slate-500 mt-1 uppercase">Centro Brasileiro de Varejo</span>
         </div>
      )
    },
    { 
      name: "TRT 9ª REGIÃO", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/TRT_9_Bras%C3%A3o.png",
      width: "w-16"
    },
    { 
      name: "PODER JUDICIÁRIO SC", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bras%C3%A3o_do_TJ-SC.png",
      width: "w-16"
    },
    { 
      name: "PROMPTAI ACADEMY", 
       component: (
        <div className="flex items-center gap-1">
           <div className="flex flex-col leading-none">
             <span className="font-bold text-white text-sm font-heading">PROMPT<span className="text-indigo-500">AI</span></span>
             <span className="text-[8px] tracking-widest text-slate-500 uppercase">Academy</span>
           </div>
        </div>
     )
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "Linkedin" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 overflow-x-hidden flex flex-col font-sans">
      
      {/* 
        ========================================
        VISUAL SYSTEM
        ========================================
      */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.2) translate(-2%, -2%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-ken-burns {
          animation: kenburns 50s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
          100% { transform: translate(0, 0); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.2); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.5); }
        }
        .glass-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .text-gradient {
          background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .btn-glow {
          position: relative;
        }
        .btn-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #22d3ee, #3b82f6, #8b5cf6);
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
          border-radius: 12px;
        }
        .btn-glow:hover::before {
          opacity: 0.7;
        }
      `}</style>

      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#020617]">
        {/* Layer 1: Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center animate-ken-burns opacity-20"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2228&auto=format&fit=crop)',
              filter: 'grayscale(100%) contrast(1.2) brightness(0.6)' 
            }}
        ></div>
        
        {/* Layer 2: Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Layer 3: Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-[#020617]/40"></div>
        
        {/* Layer 4: Volumetric Lights */}
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen animate-float" style={{ animationDelay: '-8s' }}></div>
      </div>

      {/* 
        ========================================
        TOP BAR
        ========================================
      */}
      <div className="fixed top-0 w-full z-[60] bg-[#020617]/80 backdrop-blur-md border-b border-white/5 h-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 text-xs font-medium text-slate-400">
        <div className="flex items-center gap-4">
           <span className="hidden sm:inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors cursor-pointer group">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
             <Globe className="w-3 h-3 group-hover:rotate-12 transition-transform" /> 
             Global Research Network
           </span>
           <span className="w-px h-3 bg-slate-800 hidden sm:block"></span>
           <a href="mailto:publisher@alumniin.com" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
             <Mail className="w-3 h-3" /> publisher@alumniin.com
           </a>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-[10px] uppercase tracking-widest opacity-60 hidden sm:block font-heading">Conecte-se</span>
           <div className="flex gap-3">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.href} className="hover:text-cyan-400 hover:scale-110 transition-all text-slate-500">
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
           </div>
        </div>
      </div>

      {/* 
        ========================================
        MAIN NAVIGATION
        ========================================
      */}
      <nav className="fixed top-10 w-full z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-md border-b border-white/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onNavigate('landing')}>
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-md opacity-20 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Alumni<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">.in</span>
              </span>
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5 mr-6 backdrop-blur-sm">
                 <button onClick={() => onNavigate('landing')} className="px-4 py-1.5 text-sm font-medium text-white bg-white/10 rounded-full shadow-sm">Home</button>
                 <button onClick={() => onNavigate('committee')} className="px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors">Comitê</button>
                 <button className="px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors">Soluções</button>
              </div>

              <button 
                onClick={() => onLogin('google')}
                className="btn-glow bg-white text-slate-950 px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Acessar Plataforma
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 
        ========================================
        HERO SECTION
        ========================================
      */}
      <div className="relative pt-48 pb-24 lg:pt-64 lg:pb-40 overflow-hidden z-10 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="space-y-10 animate-fade-in-up">
              
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/50 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] group cursor-default hover:border-cyan-500/50 transition-colors">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase font-heading">
                   Nova Geração de Pesquisa v2.4
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight drop-shadow-2xl font-heading">
                Inteligência que <br/>
                <span className="text-gradient animate-gradient-x">
                  Publica o Futuro.
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl border-l-2 border-slate-700 pl-6">
                Acelere sua produção científica com a plataforma escolhida pelas maiores instituições do Brasil. 
                Da ideia abstrata à publicação em revistas de alto impacto (Qualis A).
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <button 
                  onClick={() => onLogin('google')}
                  className="btn-glow group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-3"
                >
                  <span className="font-heading">Começar Gratuitamente</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                    onClick={() => onNavigate('committee')}
                    className="px-8 py-4 bg-[#0f172a]/80 backdrop-blur-md rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all hover:border-white/20 flex items-center justify-center gap-2 group"
                >
                  <Network className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-heading">Validar Metodologia</span>
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white z-${10-i}`}>
                           {i === 4 ? '+2k' : ''}
                           {i !== 4 && <img src={`https://randomuser.me/api/portraits/thumb/men/${i*10}.jpg`} className="rounded-full w-full h-full opacity-80" />}
                        </div>
                    ))}
                 </div>
                 <p>Pesquisadores ativos hoje.</p>
              </div>
            </div>

            {/* Right Content - Login Card (Glassmorphism Max) */}
            <div className="relative group perspective-1000">
              {/* Decorative Elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse-glow"></div>
              
              <div className="relative glass-card rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="text-center mb-10">
                  <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 mb-4 shadow-inner">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Login Acadêmico</h3>
                  <p className="text-slate-400 text-sm">Acesse o ecossistema com credenciais seguras.</p>
                </div>

                <div className="space-y-4">
                  <button onClick={() => onLogin('google')} className="w-full bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] shadow-lg group/btn font-heading">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 grayscale group-hover/btn:grayscale-0 transition-all" />
                    <span>Continuar com Google</span>
                  </button>
                  
                  <button onClick={() => onLogin('microsoft')} className="w-full bg-[#1e293b]/50 hover:bg-[#1e293b] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all border border-white/5 hover:border-white/10">
                    <Users className="w-5 h-5 text-slate-400" />
                    <span>Conta Microsoft</span>
                  </button>

                  <div className="relative py-6">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
                    <div className="relative flex justify-center"><span className="bg-[#0f172a] px-4 text-xs text-slate-500 uppercase tracking-widest font-bold">Membros</span></div>
                  </div>

                  <form className="group/form relative">
                    <input type="email" placeholder="Seu email institucional" className="w-full bg-[#020617] border border-slate-800 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-600 shadow-inner" />
                    <button type="button" onClick={() => onLogin('email')} className="absolute right-2 top-2 bottom-2 bg-slate-800 hover:bg-slate-700 text-white px-4 rounded-lg text-xs font-bold transition-colors">
                        ENTRAR
                    </button>
                  </form>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-500">
                   <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> 256-bit Encrypted</span>
                   <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> LGPD Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================
        PARTNERS SECTION
        ========================================
      */}
      <div className="relative border-t border-white/5 bg-[#020617]/50 backdrop-blur-xl py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-16 font-heading">
            Ecossistema de Inovação e Parceiros
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group relative flex items-center justify-center h-32 p-6 rounded-2xl bg-[#0f172a]/40 border border-white/5 hover:border-cyan-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className={`${partner.width || 'w-24'} max-h-16 object-contain filter grayscale invert opacity-50 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerText = partner.name;
                    }}
                  />
                ) : (
                  <div className="filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                    {partner.component}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 
        ========================================
        INNOVATIVE FOOTER
        ========================================
      */}
      <footer className="relative bg-[#000000] pt-24 pb-12 z-10 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
               {/* Brand Column */}
               <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-cyan-500" />
                    </div>
                    <span className="text-2xl font-bold text-white font-heading">Alumni<span className="text-cyan-500">.in</span></span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Plataforma pioneira em inteligência acadêmica e curadoria científica. Transformando dados em conhecimento publicado.
                  </p>
                  <div className="flex gap-3">
                     {socialLinks.map((social, idx) => (
                       <a key={idx} href={social.href} className="w-10 h-10 rounded-lg bg-[#0f172a] border border-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-500 transition-all group">
                         <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                       </a>
                     ))}
                  </div>
               </div>

               {/* Links Column */}
               <div>
                  <h4 className="text-white font-bold mb-8 font-heading">Plataforma</h4>
                  <ul className="space-y-4 text-sm text-slate-400">
                     <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Soluções</a></li>
                     <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Preços</a></li>
                     <li><button onClick={() => onNavigate('committee')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group text-left"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Comitê Científico</button></li>
                     <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Para Instituições</a></li>
                  </ul>
               </div>

               {/* Links Column */}
               <div>
                  <h4 className="text-white font-bold mb-8 font-heading">Legal</h4>
                  <ul className="space-y-4 text-sm text-slate-400">
                     <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Termos de Uso</a></li>
                     <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Privacidade de Dados</a></li>
                     <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Compliance</a></li>
                  </ul>
               </div>

               {/* Contact Column */}
               <div>
                  <h4 className="text-white font-bold mb-8 font-heading">Contato</h4>
                  <ul className="space-y-6 text-sm text-slate-400">
                     <li className="flex items-start gap-4 p-4 rounded-xl bg-[#0f172a]/50 border border-white/5">
                        <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>São Paulo, SP<br/><span className="text-xs opacity-60">Brasil</span></span>
                     </li>
                     <li>
                        <a href="mailto:publisher@alumniin.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                           <div className="w-10 h-10 rounded-lg bg-[#0f172a] border border-white/5 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                             <Mail className="w-4 h-4 text-cyan-500 group-hover:animate-bounce" />
                           </div>
                           <div className="flex flex-col">
                             <span className="text-xs text-slate-500">Email Oficial</span>
                             <span className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">publisher@alumniin.com</span>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600">
               <p>© 2024 Alumni Science. Todos os direitos reservados.</p>
               <div className="flex items-center gap-8">
                  <span className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-3 py-1 rounded-full"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Systems Operational</span>
                  <span>v2.4.0 (Beta)</span>
               </div>
            </div>
         </div>
      </footer>

      {/* 
        ========================================
        FLOATING WHATSAPP / CHATBOT WIDGET
        ========================================
      */}
      <a 
        href="https://wa.me/5511950421307" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="relative bg-[#25D366] hover:bg-[#1ebc57] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-3 pr-6 border border-white/20">
           <MessageCircle className="w-6 h-6 fill-white text-white" />
           <div className="hidden group-hover:block whitespace-nowrap overflow-hidden animate-fade-in">
              <span className="text-sm font-bold block leading-none font-heading">Fale Conosco</span>
              <span className="text-[10px] opacity-90 block leading-none mt-1">+55 (11) 95042-1307</span>
           </div>
        </div>
      </a>

    </div>
  );
};

export default LandingPage;