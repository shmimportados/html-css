import React, { useState } from 'react';
import { 
  LineChart, 
  Wallet, 
  BookOpen, 
  TrendingUp,
  Users,
  MessageCircle,
  Settings,
  Bell,
  Search,
  Shield,
  Briefcase,
  BarChart3,
  Globe2,
  Lock,
  Gift
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#0A0F1C] flex">
      {/* Sidebar */}
      <div className="w-72 bg-[#151B2C] p-6">
        <div className="flex items-center gap-3 mb-12">
          <Shield className="h-10 w-10 text-[#6366F1]" />
          <div>
            <h1 className="text-xl font-bold text-white">Pacesida</h1>
            <p className="text-sm text-gray-400">Investimentos Premium</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white' 
                : 'text-gray-400 hover:bg-[#1F2937] hover:text-white'
            }`}
          >
            <LineChart className="h-5 w-5" />
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'portfolio'
                ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white'
                : 'text-gray-400 hover:bg-[#1F2937] hover:text-white'
            }`}
          >
            <Briefcase className="h-5 w-5" />
            Portfólio
          </button>
          <button 
            onClick={() => setActiveTab('market')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'market'
                ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white'
                : 'text-gray-400 hover:bg-[#1F2937] hover:text-white'
            }`}
          >
            <BarChart3 className="h-5 w-5" />
            Mercado
          </button>
          <button 
            onClick={() => setActiveTab('global')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'global'
                ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white'
                : 'text-gray-400 hover:bg-[#1F2937] hover:text-white'
            }`}
          >
            <Globe2 className="h-5 w-5" />
            Internacional
          </button>
          <button 
            onClick={() => setActiveTab('learn')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'learn'
                ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white'
                : 'text-gray-400 hover:bg-[#1F2937] hover:text-white'
            }`}
          >
            <BookOpen className="h-5 w-5" />
            Educação
          </button>
          <button 
            onClick={() => setActiveTab('community')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'community'
                ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white'
                : 'text-gray-400 hover:bg-[#1F2937] hover:text-white'
            }`}
          >
            <Users className="h-5 w-5" />
            Comunidade
          </button>
        </nav>

        <div className="mt-8 p-4 bg-[#1F2937] rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Gift className="h-5 w-5 text-[#6366F1]" />
            <h3 className="text-white font-medium">Convide Amigos</h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">
            Ganhe benefícios exclusivos ao convidar amigos para a Pacesida.
          </p>
          <button className="w-full py-2 bg-[#6366F1] text-white rounded-lg hover:bg-[#5558DD] transition-colors">
            Convidar Agora
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-[#151B2C] border-b border-[#2D3748] p-6">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar ativos, fundos..."
                className="pl-10 pr-4 py-2 bg-[#1F2937] text-white border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366F1] w-96"
              />
            </div>
            <div className="flex items-center gap-6">
              <button className="p-2 text-gray-400 hover:text-white hover:bg-[#1F2937] rounded-xl transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-[#1F2937] rounded-xl transition-colors">
                <MessageCircle className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-[#1F2937] rounded-xl transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3 pl-6 border-l border-[#2D3748]">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="h-10 w-10 rounded-xl"
                />
                <div>
                  <p className="text-white font-medium">Carlos Silva</p>
                  <p className="text-sm text-gray-400">Investidor Premium</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-6">
                <div className="bg-[#151B2C] p-6 rounded-xl border border-[#2D3748]">
                  <h3 className="text-gray-400 font-medium mb-4">Patrimônio Total</h3>
                  <p className="text-3xl font-bold text-white">R$ 1.245.532,89</p>
                  <p className="text-sm text-emerald-400 mt-2 flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    +2,4% hoje
                  </p>
                </div>
                <div className="bg-[#151B2C] p-6 rounded-xl border border-[#2D3748]">
                  <h3 className="text-gray-400 font-medium mb-4">Rentabilidade</h3>
                  <p className="text-3xl font-bold text-emerald-400">+R$ 124.583,32</p>
                  <p className="text-sm text-emerald-400 mt-2">+18,7% no total</p>
                </div>
                <div className="bg-[#151B2C] p-6 rounded-xl border border-[#2D3748]">
                  <h3 className="text-gray-400 font-medium mb-4">Perfil de Risco</h3>
                  <p className="text-3xl font-bold text-white">Moderado</p>
                  <p className="text-sm text-gray-400 mt-2">Estratégia balanceada</p>
                </div>
                <div className="bg-[#151B2C] p-6 rounded-xl border border-[#2D3748]">
                  <h3 className="text-gray-400 font-medium mb-4">Status VIP</h3>
                  <p className="text-3xl font-bold text-[#6366F1]">Premium</p>
                  <p className="text-sm text-gray-400 mt-2">Benefícios exclusivos</p>
                </div>
              </div>

              <div className="bg-[#151B2C] p-6 rounded-xl border border-[#2D3748]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Recomendações Personalizadas</h3>
                  <button className="text-[#6366F1] hover:text-[#5558DD] transition-colors">
                    Ver todas
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#1F2937] rounded-xl">
                    <div>
                      <h4 className="text-white font-medium">VTSAX - Vanguard Total Stock Market Index Fund</h4>
                      <p className="text-sm text-gray-400">Exposição ao mercado americano com baixo custo</p>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg hover:opacity-90 transition-opacity">
                      Investir
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#1F2937] rounded-xl">
                    <div>
                      <h4 className="text-white font-medium">Tesouro IPCA+ 2045</h4>
                      <p className="text-sm text-gray-400">Proteção contra inflação no longo prazo</p>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg hover:opacity-90 transition-opacity">
                      Investir
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#151B2C] p-6 rounded-xl border border-[#2D3748]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Últimas Transações</h3>
                  <button className="text-[#6366F1] hover:text-[#5558DD] transition-colors">
                    Ver histórico
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#1F2937] rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-emerald-400/10 text-emerald-400 flex items-center justify-center rounded-lg">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Compra de AAPL</p>
                        <p className="text-sm text-gray-400">15 de Março, 2024</p>
                      </div>
                    </div>
                    <p className="text-emerald-400 font-medium">+R$ 25.000,00</p>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#1F2937] rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-red-400/10 text-red-400 flex items-center justify-center rounded-lg">
                        <TrendingUp className="h-5 w-5 transform rotate-180" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Venda de TSLA</p>
                        <p className="text-sm text-gray-400">14 de Março, 2024</p>
                      </div>
                    </div>
                    <p className="text-red-400 font-medium">-R$ 17.500,00</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-white">Gestão de Portfólio</h2>
              <p className="text-gray-400">Interface de gestão de portfólio em breve</p>
            </div>
          )}

          {activeTab === 'market' && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-white">Análise de Mercado</h2>
              <p className="text-gray-400">Análises e insights em breve</p>
            </div>
          )}

          {activeTab === 'global' && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-white">Mercado Internacional</h2>
              <p className="text-gray-400">Investimentos globais em breve</p>
            </div>
          )}

          {activeTab === 'learn' && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-white">Centro Educacional</h2>
              <p className="text-gray-400">Conteúdo educacional em breve</p>
            </div>
          )}

          {activeTab === 'community' && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-white">Comunidade</h2>
              <p className="text-gray-400">Espaço da comunidade em breve</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;