import { motion } from 'motion/react';
import { 
  Flame, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Clock, 
  ThumbsUp, 
  Star, 
  CheckCircle2, 
  ChevronRight,
  Lock
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-red-500/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-red-500" />
            <span className="text-xl font-bold tracking-wider uppercase text-zinc-100">
              Vulcano <span className="text-red-500">Premium</span>
            </span>
          </div>
          <a 
            href="https://app.coinzz.com.br/checkout/1-unidade-vqcsv-0" 
            className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-2.5 rounded-full font-bold transition-colors text-sm shadow-[0_0_15px_rgba(34,197,94,0.4)]"
          >
            Garantir o Meu
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                <Flame className="w-4 h-4" />
                Tecnologia Avançada de Absorção Rápida
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Desperte o Seu Potencial Máximo e <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Retome o Controle</span> da Sua Vida Íntima.
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Descubra a tecnologia avançada do <strong>Vulcano Spray Premium</strong>. Uma fórmula exclusiva projetada para aquecer, vibrar e pulsar, elevando sua confiança e proporcionando momentos inesquecíveis.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4">
                <a 
                  href="https://app.coinzz.com.br/checkout/1-unidade-vqcsv-0"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-10 py-5 rounded-full font-extrabold text-xl md:text-2xl shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all transform hover:scale-105"
                >
                  Experimentar por R$ 28,00
                  <Zap className="w-6 h-6" />
                </a>
                <p className="text-sm text-zinc-500 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  Compra 100% Segura e Discreta
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-zinc-900/50 border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Você já sentiu que poderia <span className="text-red-500">entregar mais?</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              A pressão do dia a dia, o cansaço e a rotina podem minar a nossa confiança quando mais precisamos. A frustração de não atingir o ápice do prazer ou de ver a parceira insatisfeita é um peso silencioso que muitos homens carregam.
            </p>
            <p className="text-xl font-medium text-zinc-200">
              Mas não precisa ser assim. Você não está sozinho e existe uma solução prática.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution & Benefits Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Apresentamos o <span className="text-red-500">Vulcano Premium</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A revolução em formato de spray. Não é mágica, é ciência e tecnologia aplicadas para o seu bem-estar íntimo e máxima performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Flame className="w-8 h-8 text-orange-500" />,
                title: "Aquece",
                desc: "Proporciona uma sensação térmica estimulante que desperta os sentidos instantaneamente."
              },
              {
                icon: <Activity className="w-8 h-8 text-red-500" />,
                title: "Vibra & Pulsa",
                desc: "Ondas de estímulo contínuo que aumentam a sensibilidade e o prazer a níveis extremos."
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: "Absorção Rápida",
                desc: "Fórmula de alta tecnologia que age em minutos. Você sempre pronto para a ação."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
                title: "Confiança Total",
                desc: "Seguro, testado dermatologicamente e sem efeitos colaterais indesejados."
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-900 transition-colors"
              >
                <div className="bg-zinc-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-zinc-800">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como usar o Vulcano Spray?
            </h2>
            <p className="text-zinc-500 text-xl">Simples, rápido e discreto.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Aplicação",
                desc: "Aplique de 2 a 3 borrifadas no local desejado alguns minutos antes da relação."
              },
              {
                step: "02",
                title: "Massagem",
                desc: "Massageie suavemente para espalhar o produto e acelerar a absorção pela pele."
              },
              {
                step: "03",
                title: "Ação",
                desc: "Aproveite o efeito imediato de aquecimento, vibração e pulsação intensa."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group hover:border-red-500/30 transition-colors"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-zinc-700 select-none">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Veja o Vulcano em <span className="text-red-500">Ação</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Conheça de perto o produto que vai revolucionar seus momentos íntimos.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(220,38,38,0.15)] aspect-video max-w-4xl mx-auto bg-zinc-900 group"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/0TXnsuH51pk?rel=0" 
              title="Vulcano Spray Premium - Como Usar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials (Social Proof) */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que dizem os homens que já experimentaram?
            </h2>
            <p className="text-zinc-400">Resultados reais de quem decidiu mudar a vida íntima.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcos T.",
                age: "42 anos",
                text: "Eu estava cético, mas a diferença na sensibilidade é absurda. Minha esposa notou a mudança na primeira semana. Recomendo muito, mudou nossa rotina."
              },
              {
                name: "Roberto S.",
                age: "35 anos",
                text: "O efeito de aquecimento misturado com a pulsação muda completamente o clima. Me sinto com 20 anos de novo. A entrega foi super discreta."
              },
              {
                name: "Fernando L.",
                age: "50 anos",
                text: "Prático, discreto e funciona incrivelmente rápido. É o meu segredo para noites que pareciam que iam ser normais e se tornam inesquecíveis."
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-zinc-500">{testimonial.age} - Compra Verificada</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-700 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600" />
            
            <ShieldCheck className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Risco Zero. Garantia Incondicional de 7 Dias.
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Temos tanta confiança na eficácia do Vulcano Spray Premium que oferecemos uma garantia blindada. Se você usar o produto por 7 dias e não sentir a diferença prometida, nós devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <div className="inline-flex items-center gap-2 text-emerald-400 font-medium bg-emerald-500/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5" />
              Satisfação Garantida ou seu Dinheiro de Volta
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="oferta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(220,38,38,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Pronto para transformar suas noites?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Aproveite as <span className="text-red-500 font-bold">últimas unidades</span> do lote atual com desconto especial de lançamento.
          </p>
          
          <div className="bg-zinc-900 border border-red-500/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(220,38,38,0.1)]">
            <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-6">
              Oferta Especial
            </div>
            
            <div className="flex justify-center items-baseline gap-2 mb-8">
              <span className="text-5xl font-extrabold text-white">R$ 28,00</span>
              <span className="text-zinc-400">/frasco</span>
            </div>
            
            <ul className="space-y-4 text-left max-w-sm mx-auto mb-10">
              {[
                "1 Frasco de Vulcano Premium (30ml)",
                "Efeito de Aquecimento, Vibração e Pulsação",
                "Embalagem 100% Discreta",
                "Garantia de 7 Dias",
                "Suporte Premium"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://app.coinzz.com.br/checkout/1-unidade-vqcsv-0"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-12 py-6 rounded-full font-black text-2xl md:text-3xl shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all transform hover:scale-105 mx-auto"
            >
              Comprar Agora por R$ 28,00
              <ChevronRight className="w-8 h-8" />
            </a>
            
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Compra Segura</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Privacidade Garantida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Flame className="w-6 h-6 text-zinc-700" />
            <span className="text-xl font-bold tracking-wider uppercase text-zinc-700">
              Vulcano Premium
            </span>
          </div>
          
          <p className="text-xs text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar de pessoa para pessoa. As informações contidas neste site não substituem o aconselhamento médico. Consulte sempre um profissional de saúde antes de iniciar o uso de qualquer suplemento ou produto de uso tópico.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Contato</a>
          </div>
          
          <p className="text-xs text-zinc-700 mt-8">
            &copy; {new Date().getFullYear()} Vulcano Premium. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

