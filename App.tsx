import React, { useState } from 'react';
import { 
  Menu, X, Check, Star, Wind, Activity, Moon, Heart, ChevronDown, User 
} from 'lucide-react';
import { Button } from './components/Button';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <Moon size={24} fill="currentColor" />
              </div>
              <span className="font-bold text-xl tracking-tight text-indigo-900">MAyK</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Beneficios</button>
              <button onClick={() => scrollToSection('audience')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">¿Para quién?</button>
              <button onClick={() => scrollToSection('reviews')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Testimonios</button>
              <Button size="sm" onClick={() => scrollToSection('offer')}>Comprar Ahora</Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top-5 duration-200">
            <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
              <button onClick={() => scrollToSection('features')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 text-left">Beneficios</button>
              <button onClick={() => scrollToSection('audience')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 text-left">¿Para quién?</button>
              <button onClick={() => scrollToSection('reviews')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 text-left">Testimonios</button>
              <div className="pt-2">
                <Button fullWidth onClick={() => scrollToSection('offer')}>Comprar Ahora</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm animate-pulse">
                <Activity size={16} />
                <span>¿Dolor al despertar?</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Alivio Inmediato para <span className="text-blue-600">Dolor de Cadera</span> y Ciática
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Diseñada científicamente para alinearte mientras duermes. Nuestra almohada de espuma viscoelástica hace el trabajo pesado por ti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => scrollToSection('offer')}>
                  Comprar Ahora
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('features')}>
                  Ver detalles
                </Button>
              </div>
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Check size={16} className="text-green-500" /> Envío Rápido
                </div>
                <div className="flex items-center gap-1">
                  <Check size={16} className="text-green-500" /> Garantía de Calidad
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-20 rounded-full"></div>
              <img 
                src="https://picsum.photos/id/1011/800/800" 
                alt="Mujer durmiendo cómodamente" 
                className="relative rounded-3xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 object-cover w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">4.9/5</p>
                  <p className="text-xs text-slate-500">Valoración Clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem/Agitation Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">⚠️ ¿Cansado de despertar con dolor?</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Las almohadas comunes no soportan la curva natural de tu cuerpo. Esto causa tensión en la espalda baja, caderas y rodillas, robándote la energía que mereces.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {[
              { title: "Mala Postura", desc: "Desalineación de la columna" },
              { title: "Presión Articular", desc: "Dolor en rodillas y caderas" },
              { title: "Noches Inquietas", desc: "Vueltas constantes en la cama" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution/Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">La Solución</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Almohada Ergonómica MAyK</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Transforma tus noches con tecnología diseñada para tu bienestar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Alineación Perfecta</h4>
              <p className="text-slate-600">
                Mantiene tu columna, caderas y rodillas en una posición natural neutral, eliminando la tensión lumbar.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wind size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Frescura Garantizada</h4>
              <p className="text-slate-600">
                Diseño transpirable con canales de ventilación. La funda es lavable y suave al tacto.
              </p>
            </div>

             {/* Feature 3 */}
             <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Moon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Memory Foam Premium</h4>
              <p className="text-slate-600">
                Espuma viscoelástica de alta densidad que se adapta a tu contorno sin perder su forma original.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="py-20 bg-indigo-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Ideal para...</h2>
                <div className="space-y-6">
                  {[
                    { icon: Heart, label: "Mujeres Embarazadas", desc: "Soporte extra para el vientre y alivio lumbar." },
                    { icon: Activity, label: "Atletas", desc: "Recuperación muscular óptima durante el sueño." },
                    { icon: Moon, label: "Personas con Ciática", desc: "Reduce la presión en el nervio ciático." },
                    { icon: User, label: "Quienes duermen de lado", desc: "Evita el choque de rodillas y mejora la circulación." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm text-indigo-600">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">{item.label}</h4>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative">
                 <img 
                  src="https://picsum.photos/id/1025/600/800" 
                  alt="Uso de la almohada" 
                  className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
                />
                 <div className="absolute top-10 -right-4 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
                    <p className="text-sm font-medium text-slate-800">"¡Por fin puedo dormir 8 horas seguidas sin dolor!"</p>
                    <div className="flex text-yellow-400 mt-2">
                      <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Lo que dicen nuestros clientes</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl">
                   <div className="flex text-yellow-400 mb-4">
                     {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                   </div>
                   <p className="text-slate-600 mb-4">"Increíble producto. Ha cambiado mi vida y mi forma de dormir. 100% recomendado."</p>
                   <p className="font-bold text-slate-900">- Cliente Verificado</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-20 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Oferta Especial de Lanzamiento</h2>
           <p className="text-xl text-indigo-200 mb-8">Obtén tu Almohada Ergonómica MAyK con un 20% de descuento hoy.</p>
           <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">Comprar Ahora - $49.99</Button>
           <p className="mt-4 text-sm text-indigo-300">Envío gratis a todo el país. Garantía de 30 noches.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 MAyK. Todos los derechos reservados.</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}