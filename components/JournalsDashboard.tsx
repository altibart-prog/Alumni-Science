
import React, { useState } from 'react';
import { 
  Library, Search, Filter, Download, CloudUpload, 
  CheckCircle2, TrendingUp, Globe, BarChart3, 
  FileSpreadsheet, Database, Cpu, Zap, ChevronRight, X,
  Activity, PieChart, Info, Printer, FileText, FlaskConical
} from 'lucide-react';

const JournalsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'input'>('dashboard');
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const kpis = [
    { label: "Total Revistas", value: "12,450", trend: "+2.4%", icon: Library, color: "text-[#0da1a1]" },
    { label: "Revistas Nacionais", value: "1,820", trend: "SciELO", icon: Globe, color: "text-emerald-400" },
    { label: "Internacionais", value: "10,630", trend: "Global", icon: BarChart3, color: "text-blue-400" },
    { label: "Média Quartil BR", value: "Q2", trend: "Estável", icon: TrendingUp, color: "text-cyan-400" }
  ];

  const journals = [
    { rank: 1, name: "Nature Physics", country: "China", indexer: "Scopus", quartile: "Q1", impact: 82.87 },
    { rank: 2, name: "Journal of Brazilian Chem.", country: "Brazil", indexer: "JCR", quartile: "Q1", impact: 80.93 },
    { rank: 3, name: "Science", country: "USA", indexer: "Scopus", quartile: "Q2", impact: 73.43 },
    { rank: 4, name: "Plos One", country: "Brazil", indexer: "JCR", quartile: "Q1", impact: 64.76 },
    { rank: 5, name: "Revista de Saúde Pública", country: "Germany", indexer: "JCR", quartile: "Q2", impact: 44.30 },
    { rank: 6, name: "Inter. Journal of NLP", country: "UK", indexer: "Scopus", quartile: "Q3", impact: 30.50 },
    { rank: 7, name: "Brazilian Applied Physics", country: "Brazil", indexer: "JCR", quartile: "Q4", impact: 17.80 },
    { rank: 8, name: "Health & Society", country: "Brazil", indexer: "Scopus", quartile: "Q4", impact: 26.31 },
  ];

  const topCountries = [
    { name: "USA", count: "3,450", percent: 95 },
    { name: "China", count: "2,890", percent: 80 },
    { name: "UK", count: "1,920", percent: 55 },
    { name: "Brasil", count: "1,540", percent: 45 },
    { name: "Germany", count: "1,210", percent: 35 },
  ];

  return (
    <div className="animate-fade-in pb-12 w-full max-w-[1500px] mx-auto">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1.5 rounded-full bg-[#0da1a1]/10 border border-[#0da1a1]/30 text-[10px] font-black text-[#0da1a1] uppercase tracking-widest shadow-[0_0_20px_rgba(13,161,161,0.2)]">
              Sovereign Ranking System
            </span>
            <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Motores Online
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-heading leading-tight">
            Revistas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0da1a1] to-white">Científicas</span>
          </h1>
          <p className="text-slate-400 mt-4 text-lg font-medium max-w-2xl leading-relaxed">
            Interface avançada para análise de periódicos. Integre bases <span className="text-white">Qualis</span>, <span className="text-white">Scopus</span>, <span className="text-white">JCR</span> e <span className="text-white">Miguilim IBICT</span>.
          </p>
        </div>

        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`px-8 py-3.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all flex items-center gap-3 ${activeTab === 'dashboard' ? 'bg-[#0da1a1] text-white shadow-xl' : 'text-slate-400 hover:text-white'}`}
          >
            <PieChart className="w-4 h-4" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('input')}
            className={`px-8 py-3.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all flex items-center gap-3 ${activeTab === 'input' ? 'bg-[#0da1a1] text-white shadow-xl' : 'text-slate-400 hover:text-white'}`}
          >
            <CloudUpload className="w-4 h-4" /> Entrada de Dados
          </button>
        </div>
      </div>

      {activeTab === 'dashboard' ? (
        <div className="space-y-8 animate-fade-in">
          {/* KPI Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {kpis.map((stat, i) => (
              <div key={i} className="bg-[#0c1a2d]/60 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] group hover:border-[#0da1a1]/50 transition-all shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg ${stat.color}`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  {stat.trend.startsWith('+') ? (
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 bg-emerald-400/10 px-2 py-1 rounded-lg">
                      <TrendingUp className="w-3 h-3" /> {stat.trend}
                    </span>
                  ) : (
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.trend}</span>
                  )}
                </div>
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">{stat.label}</h3>
                <p className="text-4xl font-black text-white tracking-tighter">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Filters & Middle Content */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 relative z-10">
            <div className="xl:col-span-12">
              <div className="bg-[#0c1a2d]/80 backdrop-blur-2xl border border-white/10 p-6 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end shadow-2xl">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Área do Conhecimento</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold text-white outline-none focus:border-[#0da1a1] transition-all appearance-none cursor-pointer">
                    <option>Todas as Áreas</option>
                    <option>Ciências Exatas</option>
                    <option>Ciências da Saúde</option>
                    <option>Engenharias</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">País</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold text-white outline-none focus:border-[#0da1a1] transition-all appearance-none cursor-pointer">
                    <option>Global (Geral)</option>
                    <option>Brasil</option>
                    <option>Estados Unidos</option>
                    <option>Alemanha</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Indexador</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold text-white outline-none focus:border-[#0da1a1] transition-all appearance-none cursor-pointer">
                    <option>Todos (JCR, Scopus)</option>
                    <option>JCR (Web of Science)</option>
                    <option>Scopus (SJR)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Quartil</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold text-white outline-none focus:border-[#0da1a1] transition-all appearance-none cursor-pointer">
                    <option>Q1-Q4</option>
                    <option>Q1</option>
                    <option>Q2</option>
                    <option>Q3</option>
                    <option>Q4</option>
                  </select>
                </div>
                <button className="bg-[#0da1a1] hover:bg-white hover:text-[#0c1a2d] text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl">
                  <Filter className="w-4 h-4" /> Aplicar Filtros
                </button>
              </div>
            </div>

            {/* Left Column: Visuals */}
            <div className="xl:col-span-4 space-y-8">
              <div className="bg-[#0c1a2d]/60 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-xl">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Distribuição por Quartil</h3>
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full shadow-inner mb-8 relative group" style={{ background: 'conic-gradient(#0da1a1 0% 22.9%, #3b82f6 22.9% 56.7%, #f59e0b 56.7% 70.4%, #ef4444 70.4% 100%)' }}>
                    <div className="absolute inset-4 bg-[#0c1a2d] rounded-full flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Detalhes</div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#0da1a1]"></div><span className="text-xs text-slate-400 font-bold">Q1 (22.9%)</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-blue-500"></div><span className="text-xs text-slate-400 font-bold">Q2 (33.8%)</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-yellow-500"></div><span className="text-xs text-slate-400 font-bold">Q3 (13.7%)</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-red-500"></div><span className="text-xs text-slate-400 font-bold">Q4 (18.6%)</span></div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0c1a2d]/60 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-xl">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Top Países por Volume</h3>
                <div className="space-y-6">
                  {topCountries.map(country => (
                    <div key={country.name} className="group">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                        <span className="text-slate-200">{country.name}</span>
                        <span className="text-slate-500">{country.count}</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                        <div className="bg-[#0da1a1] h-full transition-all duration-1000 group-hover:bg-white" style={{ width: `${country.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Table */}
            <div className="xl:col-span-8">
              <div className="bg-[#0c1a2d]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden h-full flex flex-col">
                <div className="p-8 border-b border-white/5 flex justify-between items-center">
                  <h3 className="text-xl font-black text-white font-heading tracking-tight">Ranking Geral de Revistas</h3>
                  <div className="flex gap-4">
                    <button className="text-slate-400 hover:text-[#0da1a1] transition-colors"><Download className="w-5 h-5" /></button>
                    <button className="text-slate-400 hover:text-[#0da1a1] transition-colors"><Printer className="w-5 h-5" /></button>
                  </div>
                </div>
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-white/5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] border-b border-white/5">
                        <th className="px-8 py-5">Rank</th>
                        <th className="px-8 py-5">Nome da Revista</th>
                        <th className="px-8 py-5">País</th>
                        <th className="px-8 py-5">Indexador</th>
                        <th className="px-8 py-5 text-center">Quartil</th>
                        <th className="px-8 py-5 text-right">Impacto</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {journals.map((j) => (
                        <tr key={j.rank} className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
                          <td className="px-8 py-6 text-sm font-black text-[#0da1a1]">{j.rank}</td>
                          <td className="px-8 py-6">
                            <span className="text-sm font-bold text-white group-hover:text-[#0da1a1] transition-colors">{j.name}</span>
                          </td>
                          <td className="px-8 py-6 text-xs text-slate-400 font-bold uppercase">{j.country}</td>
                          <td className="px-8 py-6 text-xs text-slate-400 font-bold uppercase tracking-widest">{j.indexer}</td>
                          <td className="px-8 py-6 text-center">
                            <span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-black tracking-widest ${j.quartile === 'Q1' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : j.quartile === 'Q2' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : j.quartile === 'Q3' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                              {j.quartile}
                            </span>
                          </td>
                          <td className="px-8 py-6 text-right text-sm font-black text-white">{j.impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 border-t border-white/5 flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span>Mostrando 1-8 de 12.450 resultados</span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all active:scale-95 text-slate-400" onClick={() => {}}><X className="w-4 h-4" /></button>
                    <button className="w-8 h-8 rounded-lg bg-[#0da1a1] flex items-center justify-center text-white shadow-lg">1</button>
                    <button className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all active:scale-95 text-slate-400">2</button>
                    <button className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all active:scale-95 text-[#0da1a1]"><ChevronRight className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Input/Upload Module */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-8">
              {/* Dropzone */}
              <div className="bg-[#0c1a2d]/60 backdrop-blur-3xl border-2 border-dashed border-white/10 rounded-[3rem] p-12 md:p-24 text-center group hover:border-[#0da1a1]/50 transition-all relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0da1a1]/5 to-transparent pointer-events-none"></div>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setUploadFile(e.target.files?.[0] || null)} />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-[#0da1a1]/10 rounded-full flex items-center justify-center mb-10 border border-[#0da1a1]/30 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(13,161,161,0.3)] transition-all">
                    <CloudUpload className="w-12 h-12 text-[#0da1a1]" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 font-heading tracking-tight">Arraste e solte planilhas ou PDFs</h3>
                  <p className="text-slate-400 mb-10 max-w-lg mx-auto font-medium leading-relaxed">
                    Carregue dados de publicações para análise e comparação. Suportamos <span className="text-white">Qualis</span>, <span className="text-white">Scopus</span>, <span className="text-white">JCR</span>, <span className="text-white">Scimago</span> e <span className="text-white">Miguilim IBICT</span>.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {['Scopus', 'Qualis 2021-2024', 'JCR', 'Scimago', 'SciELO Brasil', 'Miguilim IBICT', 'PDF Reports'].map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 hover:border-[#0da1a1]/50 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="bg-[#0da1a1] hover:bg-[#0b8a8a] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-[#0da1a1]/20 flex items-center gap-3 active:scale-95">
                    <FileSpreadsheet className="w-5 h-5" /> Carregar Arquivos
                  </button>
                </div>
              </div>

              {/* Recent Files Section */}
              <div className="bg-[#0c1a2d]/60 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-xl">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                  <Activity className="w-5 h-5 text-[#0da1a1]" /> Arquivos Recentes
                </h3>
                <div className="space-y-6">
                  {/* Processing Example */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-[#0da1a1]/30 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                          <FileText className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">qualis_2021-2024_oficial.xlsx</p>
                          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Qualis • 2.4 MB</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-[#0da1a1] bg-[#0da1a1]/10 px-3 py-1.5 rounded-lg border border-[#0da1a1]/20 uppercase tracking-widest animate-pulse">Processando</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 mt-2 overflow-hidden">
                      <div className="bg-[#0da1a1] h-full transition-all duration-300 shadow-[0_0_10px_rgba(13,161,161,0.5)]" style={{ width: '85%' }}></div>
                    </div>
                    <div className="flex justify-between mt-3 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                      <span>85% Concluído</span>
                      <span>Restam 12s</span>
                    </div>
                  </div>

                  {/* Ready Example */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between group hover:border-[#0da1a1]/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                        <Database className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">export_scielo_2024.csv</p>
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">SciELO Brasil • 850 KB</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-black text-[10px] uppercase tracking-widest">
                      <span>Pronto</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: APIs & Status */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#0c1a2d]/60 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-xl">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-10">Integrações de API</h3>
                <div className="space-y-4 mb-10">
                  {[
                    { name: 'OpenAlex', status: 'Conectar', icon: Globe, color: 'text-orange-400', bg: 'bg-orange-400/10' },
                    { name: 'Web of Science', status: 'Conectar', icon: FlaskConical, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
                    { name: 'Miguilim IBICT', status: 'Conectado', icon: Database, color: 'text-emerald-400', bg: 'bg-emerald-400/10' }
                  ].map((api, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${api.bg} rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform`}>
                          <api.icon className={`w-6 h-6 ${api.color}`} />
                        </div>
                        <span className="text-sm font-bold text-white">{api.name}</span>
                      </div>
                      <button className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-all ${api.status === 'Conectado' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-[#0da1a1] border border-[#0da1a1]/30 hover:bg-[#0da1a1] hover:text-white'}`}>
                        {api.status}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10 space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Autenticação Manual</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Zap className="w-4 h-4 text-slate-600 group-focus-within:text-[#0da1a1] transition-colors" />
                    </div>
                    <input type="password" placeholder="Cole sua API Key aqui..." className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm font-bold text-white placeholder:text-slate-700 focus:border-[#0da1a1] outline-none transition-all" />
                  </div>
                  <button className="w-full py-4 bg-white/10 hover:bg-[#0da1a1] text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl active:scale-95">
                    Validar e Conectar
                  </button>
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-[2rem] p-8 flex items-start gap-4 shadow-2xl">
                <div className="relative flex h-3 w-3 mt-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <div>
                  <p className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-1">Status Soberano</p>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">Motores SciELO e Miguilim operando com latência de 12ms. Processadores JCR ativos para sincronização 2025.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Branding */}
      <div className="mt-16 text-center opacity-30">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">© 2024 Alumni Index Sovereign Ranking Engine</p>
      </div>
    </div>
  );
};

export default JournalsDashboard;
