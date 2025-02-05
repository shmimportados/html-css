import React from 'react';
import { Github, Linkedin, Mail, Server, Database, Code2, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
            alt="Sergio Henrique Martins"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-xl"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sergio Henrique Martins</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Estudante de Redes de Computadores</p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Olá! Sou um estudante apaixonado por tecnologia, atualmente focado em Redes de Computadores.
              Aos 41 anos, trago uma perspectiva única que combina maturidade profissional com entusiasmo
              pelo aprendizado contínuo na área de TI.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Minha jornada inclui experiência prática com MySQL, desenvolvimento web utilizando HTML e CSS,
              e uma sólida base em administração de servidores Linux. Estou constantemente buscando novos
              desafios e oportunidades para expandir meus conhecimentos.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform">
              <Database className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Banco de Dados</h3>
              <p className="text-gray-600">MySQL</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento Web</h3>
              <p className="text-gray-600">HTML, CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform">
              <Server className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Sistemas</h3>
              <p className="text-gray-600">Linux, Administração de Servidores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=600&h=300"
                alt="Projeto 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sistema de Monitoramento</h3>
                <p className="text-gray-600 mb-4">
                  Desenvolvimento de um sistema de monitoramento de rede utilizando Linux e Shell Script.
                </p>
                <a
                  href="https://github.com"
                  className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Ver no GitHub
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=300"
                alt="Projeto 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Aplicação Web</h3>
                <p className="text-gray-600 mb-4">
                  Interface web responsiva para gerenciamento de dados utilizando HTML, CSS e MySQL.
                </p>
                <a
                  href="https://github.com"
                  className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Ver no GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Contato</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2024 Sergio Henrique Martins. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;