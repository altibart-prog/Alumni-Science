import React from 'react';
import { BookOpen, Award, ChevronRight, Users, GraduationCap, Scale, Building2, Globe, Zap, Network } from 'lucide-react';
import { ViewState } from '../types';

interface LandingPageProps {
  onLogin: (provider: string) => void;
  onNavigate: (view: ViewState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigate }) => {
  
  // Lista de Parceiros com URLs oficiais (simuladas via CDNs públicos para demonstração)
  // Em produção, substitua os links pelos arquivos locais na pasta /public/assets/
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
            <BookOpen className="w-4 h-4 text-cyan-600" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-800">
            Alumni<span className="text-cyan-600">.in</span>
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
      // Placeholder estilizado para CEBRAEV (substituir por arquivo real)
      component: (
         <div className="flex flex-col items-center">
            <span className="text-xl font-black tracking-widest text-yellow-500 bg-black px-2 py-1 rounded">CEBRAEV</span>
            <span className="text-[8px] font-medium text-slate-600 mt-1 uppercase">Centro Brasileiro de Varejo</span>
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
       // Placeholder estilizado para PromptAI (substituir por arquivo real)
       component: (
        <div className="flex items-center gap-1">
           <Zap className="w-6 h-6 text-indigo-600 fill-indigo-600" />
           <div className="flex flex-col leading-none">
             <span className="font-bold text-slate-900 text-sm">PROMPT<span className="text-indigo-600">AI</span></span>
             <span className="text-[8px] tracking-widest text-slate-500 uppercase">Academy</span>
           </div>
        </div>
     )
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-cyan-500/30 text-slate-50">
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      {/* Header */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md border-b border-white/5 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onNavigate('landing')}>
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl flex items-center justify-center shadow-2xl">
                  <BookOpen className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition duration-300" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Alumni<span className="text-cyan-400">.in</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Soluções</a>
              
              {/* Novo Item de Menu Inovador */}
              <button 
                onClick={() => onNavigate('committee')}
                className="group flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Network className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                Comitê Científico
              </button>

              <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Preços</a>
              <button 
                onClick={() => onLogin('google')}
                className="bg-white text-slate-900 px-5 py-2.5 rounded-lg hover:bg-cyan-50 transition-all font-semibold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
              >
                Acessar Plataforma
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs font-medium text-cyan-400 tracking-wide uppercase">Nova Geração de Pesquisa</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Inteligência que <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-gradient-x">
                  Publica o Futuro.
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl border-l-2 border-slate-700 pl-6">
                Acelere sua produção científica com a plataforma escolhida pelas maiores instituições do Brasil. 
                Da ideia à publicação em revistas de alto impacto.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => onLogin('google')}
                  className="group relative px-8 py-4 bg-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center gap-2">
                    Começar Gratuitamente <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 bg-slate-800 rounded-xl font-bold text-white border border-slate-700 hover:bg-slate-700 transition-all hover:border-slate-600 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  Conhecer Planos
                </button>
              </div>
            </div>

            {/* Right Content - Login Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 animate-pulse"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Login Acadêmico</h3>
                  <p className="text-slate-400 text-sm">Acesse com suas credenciais institucionais</p>
                </div>

                <div className="space-y-3">
                  <button onClick={() => onLogin('google')} className="w-full bg-white hover:bg-slate-50 text-slate-900 font-semibold py-3.5 rounded-xl flex items-center justify-center gap-3 transition-colors group">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                    <span className="group-hover:text-black">Continuar com Google</span>
                  </button>
                  
                  <button onClick={() => onLogin('microsoft')} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-3 transition-colors border border-slate-700">
                    <Users className="w-5 h-5" />
                    <span>Conta Microsoft</span>
                  </button>

                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-700"></div></div>
                    <div className="relative flex justify-center"><span className="bg-slate-900 px-4 text-xs text-slate-500 uppercase tracking-widest font-semibold">Membros</span></div>
                  </div>

                  <input type="email" placeholder="Seu email institucional" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
                  <button onClick={() => onLogin('email')} className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg border border-slate-600">
                    Entrar com Email
                  </button>
                </div>
                
                <p className="mt-6 text-center text-xs text-slate-500">
                  Protegido por criptografia de ponta a ponta. <br/>
                  <a href="#" className="text-cyan-500 hover:underline">Termos de Uso</a> e <a href="#" className="text-cyan-500 hover:underline">Privacidade</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section - "Creative Strip" with Official Logos */}
      <div className="relative border-t border-white/5 bg-slate-950/50 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-[0.3em] mb-14">
            Ecossistema de Inovação e Parceiros
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group relative flex items-center justify-center h-28 p-4 rounded-xl bg-white border border-slate-800/50 shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden text-slate-900 font-bold text-sm text-center"
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className={`${partner.width || 'w-24'} max-h-16 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}
                    onError={(e) => {
                      // Fallback visual se a imagem não carregar
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerText = partner.name;
                    }}
                  />
                ) : (
                  <div className="filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                    {partner.component}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para elevar sua pesquisa?</h2>
          <p className="text-slate-400 mb-10 text-lg">Junte-se a pesquisadores das instituições mais respeitadas do país.</p>
          <button onClick={() => onLogin('google')} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold text-lg hover:underline underline-offset-4 transition-all">
            Criar conta de pesquisador <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;