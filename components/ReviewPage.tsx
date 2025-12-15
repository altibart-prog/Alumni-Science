import React, { useState } from 'react';
import { 
  FileCheck, Upload, CheckCircle2, Star, Download, FileText, X, Sparkles
} from 'lucide-react';

const ReviewPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const clearFile = () => setFile(null);

  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-12">
      {/* Header Section */}
      <div className="mb-10">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            IA Generativa v2.4
         </div>
         <h2 className="text-3xl font-extrabold text-white mb-2 font-heading">Avaliação de Artigos</h2>
         <p className="text-slate-400">Obtenha uma análise técnica profunda sobre metodologia, estrutura e originalidade.</p>
      </div>

      <div className="bg-[#0f172a]/60 backdrop-blur-xl rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
        
        <div className="p-8 lg:p-12 relative z-10">
            {!file ? (
            <div className="border-2 border-dashed border-slate-700 rounded-3xl p-16 text-center hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group cursor-pointer relative">
                <input 
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                onChange={handleFileChange}
                accept=".pdf,.docx,.doc"
                />
                
                <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/40 transition-all duration-500"></div>
                    <div className="relative w-full h-full bg-[#1e293b] rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition duration-300 shadow-xl">
                        <Upload className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition" />
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 font-heading">Arraste seu artigo aqui</h3>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">Suportamos PDF e DOCX para análise semântica profunda.</p>
                
                <div className="inline-flex items-center gap-2 bg-[#020617] border border-slate-700 text-slate-400 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                   <FileText className="w-3 h-3" /> Máx. 10MB
                </div>
            </div>
            ) : (
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-6 flex items-center justify-between mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="flex items-center gap-5 relative z-10">
                    <div className="w-16 h-16 bg-[#0f172a] rounded-xl flex items-center justify-center border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                        <FileText className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-white mb-1">{file.name}</p>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                            <span className="text-xs text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Pronto para análise
                            </span>
                        </div>
                    </div>
                </div>
                <button onClick={clearFile} className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition z-10">
                    <X className="w-5 h-5" />
                </button>
            </div>
            )}

            {file && (
            <div className="mt-8 flex justify-end">
                <button className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-[1.02] flex items-center gap-3 overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Star className="w-5 h-5 fill-current" />
                    <span className="relative">Gerar Parecer Científico</span>
                </button>
            </div>
            )}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 border-t border-white/5 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-[#0b0f19]/50">
            {[
                { 
                    icon: CheckCircle2, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20",
                    title: "Análise Metodológica", desc: "Validação cruzada de hipóteses e consistência dos resultados apresentados."
                },
                { 
                    icon: Star, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20",
                    title: "Score de Impacto", desc: "Previsão de relevância e adequação para revistas de alto fator de impacto."
                },
                { 
                    icon: Download, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20",
                    title: "Relatório Peer-Review", desc: "Documento técnico detalhado pronto para submissão ou correção."
                }
            ].map((item, i) => (
                <div key={i} className="p-8 hover:bg-white/5 transition-colors group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg} border ${item.border} group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h4 className="text-white font-bold mb-2 font-heading">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;