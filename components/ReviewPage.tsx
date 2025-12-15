import React, { useState } from 'react';
import { 
  FileCheck, Upload, CheckCircle2, Star, Download, FileText, X
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
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center border border-cyan-100">
            <FileCheck className="w-7 h-7 text-cyan-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Avaliação de Artigos</h2>
            <p className="text-gray-600">Análise completa e parecer científico automatizado.</p>
          </div>
        </div>

        {!file ? (
          <div className="border-3 border-dashed border-gray-200 rounded-2xl p-16 text-center hover:border-cyan-500 hover:bg-cyan-50/10 transition-all duration-300 group cursor-pointer relative">
             <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
              accept=".pdf,.docx,.doc"
            />
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300 group-hover:bg-cyan-100">
              <Upload className="w-10 h-10 text-gray-400 group-hover:text-cyan-600 transition" />
            </div>
            <p className="text-xl font-bold text-gray-900 mb-2">Arraste seu artigo aqui</p>
            <p className="text-gray-500 mb-8">ou clique para selecionar do seu computador</p>
            <div className="inline-block bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
              PDF, DOCX (máx. 10MB)
            </div>
          </div>
        ) : (
          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-cyan-100">
                <FileText className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{file.name}</p>
                <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button onClick={clearFile} className="p-2 hover:bg-cyan-100 rounded-full text-cyan-700 transition">
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {file && (
          <div className="mt-8 flex justify-end">
             <button className="bg-cyan-600 text-white px-8 py-3 rounded-xl hover:bg-cyan-700 transition font-semibold shadow-lg shadow-cyan-600/20 flex items-center gap-2">
               <Star className="w-5 h-5" />
               Gerar Parecer Agora
             </button>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition hover:shadow-md">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-base font-bold text-gray-900 mb-1">Análise Completa</p>
            <p className="text-sm text-gray-600 leading-relaxed">Avaliação detalhada de metodologia, estrutura, redação e ineditismo do trabalho.</p>
          </div>
          
          <div className="bg-green-50/50 rounded-xl p-6 border border-green-100 hover:border-green-300 transition hover:shadow-md">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-base font-bold text-gray-900 mb-1">Parecer Científico</p>
            <p className="text-sm text-gray-600 leading-relaxed">Gera uma recomendação fundamentada (aceite, revisão ou rejeição) pronta para uso.</p>
          </div>
          
          <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-100 hover:border-purple-300 transition hover:shadow-md">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-base font-bold text-gray-900 mb-1">Exportação PDF</p>
            <p className="text-sm text-gray-600 leading-relaxed">Baixe o relatório técnico profissional formatado e pronto para envio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;