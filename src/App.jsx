import { motion } from "framer-motion";

export default function App() {
  const slideLeft = {
    hidden: { opacity: 0, x: -120 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };
  const slideRight = {
    hidden: { opacity: 0, x: 120 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  // --- NUEVO: scroll suave al hacer clic en los enlaces ---
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
     <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-purple-200 text-gray-800 scroll-smooth">
      {/* NAV (actualizada con sticky + blur + scroll suave) */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center bg-white/70 backdrop-blur-md rounded-full shadow-md sticky top-4 z-50 border border-white/50">
        <div className="text-lg font-bold text-purple-800">Desensibilización</div>
        <div className="space-x-4 text-sm hidden sm:flex">
          <a
            href="#what"
            onClick={(e) => handleSmoothScroll(e, "#what")}
            className="hover:text-purple-700 transition"
          >
            Qué es
          </a>
          <a
            href="#causes"
            onClick={(e) => handleSmoothScroll(e, "#causes")}
            className="hover:text-purple-700 transition"
          >
            Causas
          </a>
          <a
            href="#effects"
            onClick={(e) => handleSmoothScroll(e, "#effects")}
            className="hover:text-purple-700 transition"
          >
            Efectos
          </a>
          <a
            href="#conclusion"
            onClick={(e) => handleSmoothScroll(e, "#conclusion")}
            className="hover:text-purple-700 transition"
          >
            Conclusión
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="flex items-center justify-center px-6 mt-8">
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full max-w-6xl bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_60px_rgba(99,102,241,0.14)] overflow-hidden grid md:grid-cols-2 min-h-[78vh]"
        >
          {/* Left — visual + title */}
          <motion.div
            variants={slideLeft}
            className="relative bg-gradient-to-b from-purple-800 to-purple-600 text-white px-8 py-12 flex flex-col justify-center items-start gap-6"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute right-[-120px] bottom-[-80px] w-96 h-96 rounded-full bg-white/6 blur-2xl" />
            </div>

            <h1 className="z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              DESENSIBILIZACÓN
              <span className="block text-purple-200">A LA</span>
              VIOLENCIA
            </h1>

            <p className="z-10 text-sm md:text-base text-purple-100 max-w-md">
              Entender cómo la exposición repetida a la violencia conduce a la
              entumecimiento emocional — y por qué recuperar la empatía es clave.
            </p>

            <img
              src="./public/mujer.png"
              alt="Illustration woman"
              className="absolute bottom-0 right-4 w-44 sm:w-56 opacity-95 drop-shadow-2xl"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Purple_ribbon.svg/1200px-Purple_ribbon.svg.png"
              alt="ribbon"
              className="absolute top-6 right-6 w-16 opacity-90"
            />
          </motion.div>

          {/* Right — bullet summary */}
          <motion.div
            variants={slideRight}
            className="px-8 py-10 bg-white flex flex-col justify-center"
          >
            <h3 className="text-sm uppercase font-semibold text-purple-700 mb-4">
              Definición (OMS, 1996)
            </h3>

            <div className="prose mb-6 max-w-none text-sm leading-relaxed text-gray-700">
              <p>
                La OMS define la violencia como: el uso deliberado de la fuerza
                física o el poder, ya sea en forma de amenaza o efectiva, contra
                uno mismo, un grupo o una comunidad, que cause —o tenga alta
                probabilidad de causar— lesiones, muerte, daño psicológico,
                trastornos del desarrollo o privaciones.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg border border-purple-100 bg-purple-50">
                <div className="text-xs uppercase text-gray-600 font-medium">Problema</div>
                <div className="mt-2 text-sm text-gray-800">
                  La violencia está normalizada en lo cotidiano; muchos no la
                  reconocen como problema real.
                </div>
              </div>

              <div className="p-4 rounded-lg border border-purple-100 bg-purple-50">
                <div className="text-xs uppercase text-gray-600 font-medium">A quién afecta</div>
                <div className="mt-2 text-sm text-gray-800">
                  A toda la comunidad: la desensibilización reduce la empatía y
                  fragmenta la vida social y moral.
                </div>
              </div>

              <div className="p-4 rounded-lg border border-purple-100 bg-purple-50 sm:col-span-2">
                <div className="text-xs uppercase text-gray-600 font-medium">Magnitud</div>
                <div className="mt-2 text-sm text-gray-800">
                  Genera reproducción y permanencia de la agresión, limitando la
                  respuesta individual y colectiva.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 text-sm text-gray-600">
              <strong className="text-gray-800">Cita breve:</strong>{" "}
              “La desensibilización a la violencia en nuestra era afecta la
              empatía social ante situaciones de agresión.”
            </div>
          </motion.div>
        </motion.section>
      </header>

      {/* SECTION: PROBLEM / WHO / MAGNITUDE (expanded) */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <motion.section
          id="what"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-md p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Planteamiento del problema</h2>
              <p className="text-base text-gray-700 mb-4">
                ¿Cuál es el problema? La violencia se ha vuelto parte del entorno
                cotidiano y su normalización hace que muchas personas no la
                identifiquen como problema. Está presente en medios, escuelas,
                trabajo y comunidades.
              </p>

              <p className="text-base text-gray-700 mb-4">
                ¿A quién afecta? A toda la sociedad: reduce empatía, fomenta
                indiferencia y condiciona la percepción moral de generaciones
                jóvenes.
              </p>

              <p className="text-base text-gray-700">
                Magnitud: favorece la reproducción de la violencia y debilita la
                respuesta social, erosionando la cohesión y la posibilidad de
                construir paz.
              </p>
            </div>

            <div>
              <div className="rounded-lg overflow-hidden border">
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-700">
                    Estos factores configuran un escenario preocupante donde la
                    desensibilización limita respuesta y favorece la permanencia
                    de la agresión en la sociedad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CAUSES */}
        <motion.section
          id="causes"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-stretch"
          variants={fadeUp}
        >
          <motion.div variants={slideLeft} className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Causas</h2>
            <p className="text-gray-700 mb-4">
              La desensibilización no surge aislada: es producto de factores
              sociales, mediáticos y familiares que actúan en la vida cotidiana.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold">1</div>
                <div>
                  <div className="font-semibold text-gray-800">Pérdida de privacidad y manipulación mediática</div>
                  <div className="text-sm text-gray-600">La cultura de autoexposición y contenidos llamativos prioriza lo impactante sobre lo moral (Bauman, Donskis).</div>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold">2</div>
                <div>
                  <div className="font-semibold text-gray-800">Desconexión familiar e institucional</div>
                  <div className="text-sm text-gray-600">La falta de cohesión familiar y la delegación temprana de educación hacen que jovenes reciban valores desde medios digitales, con consecuencias duraderas.</div>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold">3</div>
                <div>
                  <div className="font-semibold text-gray-800">Entornos violentos en infancia</div>
                  <div className="text-sm text-gray-600">Niños criados en ambientes violentos tienden a normalizar la violencia como forma de resolver conflictos.</div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={slideRight} className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Referencias y notas</h3>
            <p className="text-sm text-gray-600 mb-4">
              Basado en ideas de Zygmunt Bauman y Leonidas Donskis sobre{" "}
              <em>adiaforización</em>, y en análisis como{" "}
              <em>La fascinación por la violencia televisiva</em> (Manuel Garrido Lora).
            </p>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="font-semibold text-gray-800 mb-1">Pérdida de privacidad</div>
                <div className="text-sm text-gray-600">La cultura de la exposición y el algoritmo premia lo sensacional.</div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="font-semibold text-gray-800 mb-1">Conexión familiar débil</div>
                <div className="text-sm text-gray-600">La delegación educativa y la falta de diálogo aumentan la vulnerabilidad del joven frente a contenidos nocivos.</div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* EFFECTS */}
        <motion.section id="effects" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="bg-white rounded-2xl shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Efectos</h2>
              <p className="text-gray-700 mb-4">
                Las consecuencias son profundas: erosiona la empatía, fragmenta la sociedad y convierte lo moral en un cálculo frío (hiperracionalización).
              </p>

              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Despersonalización y pérdida de la individualidad del otro.</li>
                <li>Fragmentación social y debilitamiento del sentido comunitario.</li>
                <li>Ceguera moral / adiaforización (Bauman): indiferencia ante actos atroces.</li>
                <li>Afectación en construcción de paz y perpetuación de violencia estructural.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Cita ilustrativa</h3>
              <blockquote className="text-gray-600 italic border-l-4 border-purple-300 pl-4 mb-6">
                “Cuando el dolor pasa a ser ruido de fondo, la humanidad se desdibuja.”
              </blockquote>

              <p className="text-sm text-gray-600">
                Esto repercute en la política, en cómo se clasifican quienes "merecen" consideración moral y en la consolidación de estructuras opresivas.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CONCLUSION & FUTURE */}
        <motion.section id="conclusion" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="bg-white rounded-2xl shadow-md p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Conclusión y retos a futuro</h2>

            <p className="text-gray-700">
              La violencia se normaliza con el crecimiento de redes sociales y la falta de control por parte de responsables. Si no se actúa, la sociedad puede evolucionar hacia la aceptación de la agresión como rutina, debilitando marcos éticos y favoreciendo violencia estructural.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                <div className="font-semibold text-purple-800">Riesgo</div>
                <div className="text-sm text-gray-700 mt-2">Normalización casi absoluta de la agresión.</div>
              </div>

              <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                <div className="font-semibold text-purple-800">Impacto social</div>
                <div className="text-sm text-gray-700 mt-2">Comunidades más fragmentadas e indiferentes.</div>
              </div>

              <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                <div className="font-semibold text-purple-800">Política</div>
                <div className="text-sm text-gray-700 mt-2">Mayor consolidación de sistemas autoritarios y opresivos.</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CALL TO ACTION / ARTISTIC CLOSURE */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="rounded-2xl p-8">
          <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-2xl p-12 shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">Siente. Reacciona. Cambia.</h3>
              <p className="text-white/90 mb-6">
                Recuperar la empatía es el primer paso para construir sociedades más
                seguras y justas. Cada acción cuenta: informa, acompaña y denuncia.
              </p>
            </div>

            <div className="flex-1 text-center">
              <img
                src="./public/mano.png"
                alt="hands"
                className="mx-auto w-64 sm:w-80 opacity-95 drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} — Proyecto sobre desensibilización a la violencia · Diseño: Jordy
        </div>
      </footer>
    </div>
    </>
  );
}