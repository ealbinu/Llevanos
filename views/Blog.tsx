import React, { useState } from 'react';
import { EVENTS, INITIAL_BLOGS } from '../constants';
import { BlogPost, Event } from '../types';
import { generateBlogContent } from '../services/geminiService';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOGS);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedEventForGen, setSelectedEventForGen] = useState<string>('');
  const [showGenerator, setShowGenerator] = useState(false);

  // Filter events that don't have a blog post yet (simple logic for demo)
  const availableEvents = EVENTS;

  const handleGenerate = async () => {
    if (!selectedEventForGen) return;
    
    const event = EVENTS.find(e => e.id === selectedEventForGen);
    if (!event) return;

    setIsGenerating(true);
    try {
      const generatedData = await generateBlogContent(event);
      
      const newPost: BlogPost = {
        id: `gen-${Date.now()}`,
        title: generatedData.title,
        content: generatedData.content,
        date: new Date().toISOString().split('T')[0],
        imageUrl: event.imageUrl, // Reuse event image for now
        tags: generatedData.tags,
        relatedEventId: event.id
      };

      setPosts([newPost, ...posts]);
      setShowGenerator(false);
      setSelectedEventForGen('');
    } catch (error) {
      alert("Error generando el artículo. Verifica tu API Key o intenta más tarde.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-6 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Bitácora de Viaje</h1>
                <p className="text-gray-400">Historias, consejos y noticias sobre los mejores eventos.</p>
            </div>
            
            {/* Admin Tool Toggle */}
            <button 
                onClick={() => setShowGenerator(!showGenerator)}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-purple-500/25 transition transform hover:scale-105"
            >
                <span>✨</span> {showGenerator ? 'Cerrar Generador' : 'Generar con IA'}
            </button>
        </div>

        {/* AI Generator Panel */}
        {showGenerator && (
            <div className="bg-stone-900 border border-purple-500/30 p-6 rounded-2xl mb-12 animate-fade-in-down">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-purple-400">Gemini AI</span> Editor
                </h2>
                <div className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex-1 w-full">
                        <label className="block text-sm text-gray-400 mb-2">Selecciona un evento para escribir:</label>
                        <select 
                            className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:ring-purple-500 focus:outline-none"
                            value={selectedEventForGen}
                            onChange={(e) => setSelectedEventForGen(e.target.value)}
                        >
                            <option value="">-- Seleccionar Evento --</option>
                            {availableEvents.map(e => (
                                <option key={e.id} value={e.id}>{e.name} ({e.city})</option>
                            ))}
                        </select>
                    </div>
                    <button 
                        onClick={handleGenerate}
                        disabled={!selectedEventForGen || isGenerating}
                        className={`px-8 py-3 rounded-lg font-bold text-white transition-all w-full md:w-auto ${
                            !selectedEventForGen || isGenerating 
                            ? 'bg-stone-700 cursor-not-allowed' 
                            : 'bg-purple-600 hover:bg-purple-500'
                        }`}
                    >
                        {isGenerating ? 'Escribiendo...' : 'Generar Artículo SEO'}
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                    * Usamos Google Gemini para crear contenido único optimizado para búsqueda, promoviendo nuestros partners de transporte.
                </p>
            </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
                <article key={post.id} className="bg-stone-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition shadow-lg flex flex-col">
                    <div className="h-64 overflow-hidden">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition duration-700 hover:scale-105" />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs font-bold uppercase tracking-wider text-mexico-pink bg-mexico-pink/10 px-2 py-1 rounded">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4 hover:text-gray-200 transition">{post.title}</h2>
                        <div 
                            className="text-gray-400 mb-6 line-clamp-4 text-sm leading-relaxed prose prose-invert"
                            dangerouslySetInnerHTML={{ __html: post.content.substring(0, 200) + '...' }}
                        />
                        <div className="mt-auto flex justify-between items-center pt-6 border-t border-white/5">
                            <span className="text-xs text-gray-500">{post.date}</span>
                            <button className="text-white font-semibold hover:text-mexico-pink transition text-sm">Leer completo &rarr;</button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;