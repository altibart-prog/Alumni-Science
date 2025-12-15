import React from 'react';
import { BookOpen, Zap, Award, ChevronRight, Users } from 'lucide-react';

interface LandingPageProps {
  onLogin: (provider: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans">
      {/* Header */}
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Alumni</span>
                <span className="text-cyan-400"> Science</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button className="text-gray-300 hover:text-white transition font-medium text-sm">Ferramentas IA</button>
              <button className="text-gray-300 hover:text-white transition font-medium text-sm">Estratégia CAPES</button>
              <button className="text-gray-300 hover:text-white transition font-medium text-sm">Planos Institucionais</button>
              <button 
                onClick={() => onLogin('google')}
                className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition flex items-center gap-2 font-semibold shadow-lg shadow-cyan-500/20"
              >
                <Users className="w-4 h-4" />
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold tracking-wide">PLATAFORMA DE INTELIGÊNCIA ACADÊMICA</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Transforme Ideias em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Legado Científico.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              Sua pesquisa tem potencial para mudar o mundo. Nós fornecemos a inteligência estratégica 
              para garantir que ela seja lida, citada e reconhecida globalmente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onLogin('google')}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition transform hover:-translate-y-1 font-semibold"
              >
                <BookOpen className="w-5 h-5" />
                Começar Agora
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-slate-800 border border-cyan-500/30 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition transform hover:-translate-y-1 font-semibold">
                <Award className="w-5 h-5 text-yellow-400" />
                Revistas Alto Impacto
              </button>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-black/50">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Acesse o Alumni Science</h2>
            <p className="text-gray-400 text-center mb-8">Sua conta unificada de pesquisa</p>
            
            <div className="space-y-4">
              <button
                onClick={() => onLogin('google')}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 py-3.5 rounded-xl hover:bg-gray-50 transition font-semibold shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continuar com Google
              </button>

              <button
                onClick={() => onLogin('microsoft')}
                className="w-full flex items-center justify-center gap-3 bg-slate-700 text-white py-3.5 rounded-xl hover:bg-slate-600 transition font-semibold shadow-sm ring-1 ring-white/10"
              >
                <svg className="w-5 h-5" viewBox="0 0 23 23">
                  <path fill="#f3f3f3" d="M0 0h11v11H0z"/>
                  <path fill="#f35325" d="M12 0h11v11H12z"/>
                  <path fill="#81bc06" d="M0 12h11v11H0z"/>
                  <path fill="#05a6f0" d="M12 12h11v11H12z"/>
                </svg>
                Continuar com Microsoft
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-slate-800 text-gray-400 uppercase text-xs font-bold tracking-wider">ou email acadêmico</span>
                </div>
              </div>

              <input
                type="email"
                placeholder="nome@universidade.edu.br"
                className="w-full bg-slate-700/50 border border-cyan-500/30 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-slate-400 transition"
              />

              <button
                onClick={() => onLogin('email')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition font-semibold"
              >
                Acessar Painel →
              </button>

              <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5 mt-4">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                DADOS PROTEGIDOS E COMPLIANCE COM LGPD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;