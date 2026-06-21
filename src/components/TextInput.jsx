import { useState } from 'react'
import { SUGGESTED_TEXTS } from '../data/steps'

export default function TextInput({ onContinue, onBack }) {
  const [reference, setReference] = useState('')
  const [text, setText] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSuggestion = (suggestion) => {
    setReference(suggestion.reference)
    setText(suggestion.text)
    setShowSuggestions(false)
  }

  const canContinue = text.trim().length > 20

  return (
    <div className="min-h-screen bg-parchment-gradient flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full animate-slide-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-sacred-gradient flex items-center justify-center shadow-lg">
              <span className="text-2xl">📖</span>
            </div>
          </div>
          <h2 className="font-serif text-3xl font-bold text-sacred-900 mb-2">
            El Texto Sagrado
          </h2>
          <p className="text-sacred-600">
            Elige o escribe el pasaje bíblico con el que deseas orar hoy
          </p>
        </div>

        <div className="card mb-4">
          {/* Reference input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-sacred-700 mb-1">
              Referencia bíblica
            </label>
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="Ej: Juan 15, 1-8"
              className="w-full border border-parchment-300 rounded-xl px-4 py-3 text-sacred-800
                         focus:outline-none focus:ring-2 focus:ring-sacred-500 focus:border-transparent
                         bg-parchment-50 font-serif placeholder-sacred-400"
            />
          </div>

          {/* Text area */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-sacred-700 mb-1">
              Texto bíblico
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Escribe o pega aquí el texto bíblico que deseas orar..."
              rows={8}
              className="w-full border border-parchment-300 rounded-xl px-4 py-3 text-sacred-800
                         focus:outline-none focus:ring-2 focus:ring-sacred-500 focus:border-transparent
                         bg-parchment-50 font-serif text-lg leading-relaxed placeholder-sacred-400"
            />
            <p className="text-xs text-sacred-500 mt-1 text-right">
              {text.length} caracteres
            </p>
          </div>
        </div>

        {/* Suggestions toggle */}
        <div className="mb-6">
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="text-sacred-600 hover:text-sacred-800 text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <span>{showSuggestions ? '▲' : '▼'}</span>
            {showSuggestions ? 'Ocultar sugerencias' : 'Ver textos sugeridos'}
          </button>

          {showSuggestions && (
            <div className="mt-3 space-y-2 animate-fade-in">
              {SUGGESTED_TEXTS.map((suggestion) => (
                <button
                  key={suggestion.reference}
                  onClick={() => handleSuggestion(suggestion)}
                  className="w-full text-left card hover:border-sacred-300 hover:shadow-lg
                             transition-all duration-200 group cursor-pointer p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-gold-500 text-lg mt-0.5">✦</span>
                    <div>
                      <p className="font-serif font-semibold text-sacred-800 group-hover:text-sacred-900 mb-1">
                        {suggestion.reference}
                      </p>
                      <p className="text-sacred-600 text-sm line-clamp-2 leading-relaxed">
                        {suggestion.text}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button onClick={onBack} className="btn-secondary flex-1">
            ← Volver
          </button>
          <button
            onClick={() => onContinue({ reference, text: text.trim() })}
            disabled={!canContinue}
            className={`flex-2 font-serif font-medium py-3 px-8 rounded-xl transition-all duration-200 shadow-md
              ${canContinue
                ? 'bg-sacred-700 hover:bg-sacred-800 text-white hover:shadow-lg active:scale-95'
                : 'bg-parchment-200 text-sacred-400 cursor-not-allowed'
              }`}
          >
            Iniciar la Lectio →
          </button>
        </div>
      </div>
    </div>
  )
}
