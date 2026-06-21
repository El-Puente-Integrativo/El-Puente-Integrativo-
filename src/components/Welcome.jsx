export default function Welcome({ onStart }) {
  return (
    <div className="min-h-screen bg-parchment-gradient flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        {/* Cross symbol */}
        <div className="mb-8 flex justify-center">
          <div className="candle-glow w-20 h-20 rounded-full bg-sacred-gradient flex items-center justify-center shadow-2xl">
            <span className="text-4xl text-gold-400">✝</span>
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl font-bold text-sacred-900 mb-3 leading-tight">
          Lectio Divina
        </h1>
        <p className="font-serif italic text-xl text-gold-600 mb-8">
          Lectura Sagrada de la Palabra de Dios
        </p>

        <div className="card mb-8 text-left">
          <p className="text-sacred-800 leading-relaxed mb-4">
            La <strong>Lectio Divina</strong> es una antigua práctica de oración cristiana que consiste
            en la lectura orante de la Sagrada Escritura. No se trata de estudiar el texto,
            sino de escuchar a Dios que nos habla a través de su Palabra.
          </p>
          <p className="text-sacred-700 leading-relaxed">
            Esta práctica, nacida en el siglo IV con los Padres del Desierto y codificada
            por el monje Guigo II en el siglo XII, nos guía a través de cinco momentos
            contemplativos para encontrarnos con el Señor en la profundidad de su Palabra.
          </p>
        </div>

        {/* Steps preview */}
        <div className="grid grid-cols-5 gap-2 mb-8">
          {[
            { icon: '📖', name: 'Lectio', color: 'bg-blue-100 text-blue-800 border-blue-200' },
            { icon: '🌿', name: 'Meditatio', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
            { icon: '🙏', name: 'Oratio', color: 'bg-purple-100 text-purple-800 border-purple-200' },
            { icon: '✨', name: 'Contemplatio', color: 'bg-amber-100 text-amber-800 border-amber-200' },
            { icon: '🕊️', name: 'Actio', color: 'bg-rose-100 text-rose-800 border-rose-200' },
          ].map((step) => (
            <div
              key={step.name}
              className={`rounded-xl border p-3 text-center ${step.color} flex flex-col items-center gap-1`}
            >
              <span className="text-2xl">{step.icon}</span>
              <span className="text-xs font-medium font-serif">{step.name}</span>
            </div>
          ))}
        </div>

        <blockquote className="font-serif italic text-sacred-600 text-lg mb-8 border-l-4 border-gold-500 pl-4 text-left">
          "Tu Palabra es lámpara para mis pasos, luz en mi sendero."
          <footer className="text-sm text-sacred-500 mt-1 not-italic">— Salmo 119, 105</footer>
        </blockquote>

        <button onClick={onStart} className="btn-gold text-lg px-10 py-4 font-serif">
          Comenzar la Lectio Divina
        </button>
      </div>
    </div>
  )
}
