import { STEPS } from '../data/steps'

export default function Summary({ biblicalText, reference, notes, onNewSession, onBack }) {
  const today = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const handlePrint = () => window.print()

  const handleCopy = () => {
    const lines = [
      `LECTIO DIVINA — ${today}`,
      reference ? `Texto: ${reference}` : '',
      '',
      `"${biblicalText}"`,
      '',
      ...STEPS.flatMap((s) => [
        `── ${s.number}. ${s.name} (${s.subtitle}) ──`,
        notes[s.id] || '(sin notas)',
        '',
      ]),
    ]
    navigator.clipboard.writeText(lines.filter(Boolean).join('\n'))
      .then(() => alert('¡Reflexión copiada al portapapeles!'))
      .catch(() => alert('No se pudo copiar. Selecciona el texto manualmente.'))
  }

  return (
    <div className="min-h-screen bg-parchment-gradient px-4 py-12">
      <div className="max-w-2xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="candle-glow w-16 h-16 rounded-full bg-sacred-gradient flex items-center justify-center shadow-2xl mx-auto mb-5">
            <span className="text-3xl text-gold-400">✦</span>
          </div>
          <h2 className="font-serif text-4xl font-bold text-sacred-900 mb-2">
            Mi Reflexión
          </h2>
          <p className="text-sacred-500 capitalize">{today}</p>
        </div>

        {/* Biblical text */}
        <div className="card mb-6 border-l-4 border-gold-500 bg-parchment-100">
          {reference && (
            <p className="font-serif text-sm font-bold text-gold-700 mb-2">{reference}</p>
          )}
          <p className="font-serif text-sacred-800 leading-loose italic text-lg">
            "{biblicalText}"
          </p>
        </div>

        {/* Steps summary */}
        <div className="space-y-4 mb-8">
          {STEPS.map((step) => {
            const noteText = notes[step.id]
            return (
              <div key={step.id} className={`card border-l-4 ${step.borderColor}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-full ${step.accentColor} flex items-center justify-center
                                   text-white font-bold text-sm flex-shrink-0`}>
                    {step.number}
                  </div>
                  <div>
                    <p className={`font-serif font-bold ${step.textColor}`}>{step.name}</p>
                    <p className={`text-xs ${step.textColor} opacity-70`}>{step.subtitle}</p>
                  </div>
                  <span className="ml-auto text-xl">{step.icon}</span>
                </div>
                {noteText?.trim() ? (
                  <p className="font-serif text-sacred-700 leading-relaxed pl-12">
                    {noteText}
                  </p>
                ) : (
                  <p className="text-sacred-400 text-sm pl-12 italic">
                    Sin notas para este paso
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* Closing quote */}
        <blockquote className="font-serif italic text-sacred-600 text-base mb-8 border-l-4 border-gold-500 pl-4">
          "La Palabra de Dios es viva, eficaz y más cortante que una espada de dos filos."
          <footer className="text-sm text-sacred-500 mt-1 not-italic">— Hebreos 4, 12</footer>
        </blockquote>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-4">
          <button onClick={handleCopy} className="btn-secondary flex-1 flex items-center justify-center gap-2">
            <span>📋</span> Copiar
          </button>
          <button onClick={handlePrint} className="btn-secondary flex-1 flex items-center justify-center gap-2">
            <span>🖨️</span> Imprimir
          </button>
        </div>
        <div className="flex gap-3">
          <button onClick={onBack} className="btn-secondary flex-1">
            ← Revisar pasos
          </button>
          <button onClick={onNewSession} className="btn-gold flex-1 font-serif">
            Nueva Lectio ✦
          </button>
        </div>
      </div>
    </div>
  )
}
