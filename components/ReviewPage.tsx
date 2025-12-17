import React, { useState } from 'react';
import { 
  FileCheck, Upload, CheckCircle2, Star, Download, FileText, X, Sparkles, Brain, Zap
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
      <div className="mb-12 text-center md:text-left">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(232,121,249,0.2)]">
            <Zap className="w-3 h-3" />
            Motor Neural v2.5
         </div>
         <h2 className="text-4xl md:text-6xl font-black text-white mb-4 font-heading tracking-tight leading-tight">Avaliação Científica</h2>
         <p className="text-slate-300 text-xl max-w-2xl font-light">
            Submeta seu manuscrito para uma análise profunda de <span className="text-fuchsia-300 font-bold border-b border-fuchsia-500/30">consistência metodológica</span> e <span className="text-cyan-300 font-bold border-b border-cyan-500/30">originalidade</span>.
         </p>
      </div>

      <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden relative group">
        {/* Lighter Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-fuchsia-500/10 to-transparent rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-cyan-500/10 to-transparent rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>
        
        <div className="p-8 lg:p-16 relative z-10">
            {!file ? (
            <div className="relative border-2 border-dashed border-white/20 rounded-[2.5rem] p-12 md:p-24 text-center hover:border-fuchsia-400/50 hover:bg-white/[0.02] transition-all duration-500 group/drop cursor-pointer overflow-hidden">
                <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.doc"
                />
                
                {/* Animated Rings - Lighter/Brighter */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-fuchsia-400/10 rounded-full scale-0 group-hover/drop:scale-100 transition-transform duration-700 ease-out shadow-[0_0_50px_rgba(232,121,249,0.1)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-cyan-400/10 rounded-full scale-0 group-hover/drop:scale-100 transition-transform duration-1000 ease-out delay-100"></div>

                <div className="relative w-28 h-28 mx-auto mb-10">
                    <div className="absolute inset-0 bg-fuchsia-400/20 rounded-full blur-3xl group-hover/drop:bg-fuchsia-400/40 transition-all duration-500"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] rounded-full flex items-center justify-center border border-white/20 group-hover/drop:scale-110 transition duration-500 shadow-2xl shadow-fuchsia-900/40">
                        <Upload className="w-12 h-12 text-fuchsia-200 group-hover/drop:text-white transition-colors" />
                    </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading drop-shadow-lg">Arraste seu artigo aqui</h3>
                <p className="text-slate-300 mb-10 max-w-md mx-auto leading-relaxed text-lg">
                    Suportamos <strong className="text-white">PDF</strong> e <strong className="text-white">DOCX</strong>. A análise é criptografada e totalmente confidencial.
                </p>
                
                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl hover:bg-white/10 transition-colors">
                   <FileText className="w-4 h-4 text-cyan-300" /> Máx. 10MB
                </div>
            </div>
            ) : (
            <div className="animate-fade-in-up">
                <div className="bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border border-white/20 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between mb-10 relative overflow-hidden gap-8 shadow-2xl">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20 mix-blend-overlay"></div>
                    
                    <div className="flex items-center gap-8 relative z-10 w-full md:w-auto">
                        <div className="w-24 h-24 bg-[#0f172a] rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl shadow-fuchsia-900/30 flex-shrink-0">
                            <FileText className="w-12 h-12 text-fuchsia-300" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white mb-3 font-heading tracking-tight">{file.name}</p>
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-xs font-mono font-bold text-fuchsia-200 bg-fuchsia-500/20 px-3 py-1.5 rounded-lg border border-fuchsia-500/30 shadow-sm">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </span>
                                <span className="text-xs text-emerald-300 font-bold bg-emerald-500/20 px-3 py-1.5 rounded-lg border border-emerald-500/30 flex items-center gap-1.5 shadow-sm">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Verificado
                                </span>
                            </div>
                        </div>
                    </div>

                    <button onClick={clearFile} className="absolute top-6 right-6 md:static p-4 hover:bg-white/10 rounded-2xl text-slate-400 hover:text-white transition z-10 border border-transparent hover:border-white/20">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex justify-end">
                    <button className="w-full md:w-auto relative group bg-white text-slate-950 px-12 py-6 rounded-3xl font-black text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(232,121,249,0.6)] transition-all hover:-translate-y-1 flex items-center justify-center gap-4 overflow-hidden font-heading">
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 flex items-center gap-3">
                           <Sparkles className="w-6 h-6 fill-slate-950" />
                           GERAR PARECER
                        </span>
                    </button>
                </div>
            </div>
            )}
        </div>

        {/* Lighter Feature Cards */}
        <div className="grid md:grid-cols-3 border-t border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-white/[0.01]">
            {[
                { 
                    icon: CheckCircle2, color: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/30",
                    title: "Rigor Metodológico", desc: "Análise da consistência entre objetivos, metodologia e resultados."
                },
                { 
                    icon: Star, color: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30",
                    title: "Potencial de Impacto", desc: "Previsão de aceitação em revistas Q1/Q2 baseada em tendências."
                },
                { 
                    icon: Download, color: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30",
                    title: "Feedback Estruturado", desc: "Sugestões de reescrita parágrafo a parágrafo para maior clareza."
                }
            ].map((item, i) => (
                <div key={i} className="p-12 hover:bg-white/[0.03] transition-colors group">
                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 ${item.bg} border ${item.border} group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                        <item.icon className={`w-8 h-8 ${item.color} drop-shadow-md`} />
                    </div>
                    <h4 className="text-white font-bold text-xl mb-4 font-heading">{item.title}</h4>
                    <p className="text-base text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;