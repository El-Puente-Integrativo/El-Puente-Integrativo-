import { useState } from 'react'
import { STEPS } from '../data/steps'
import Timer from './Timer'

const STEP_BG_GRADIENTS = [
  'from-blue-50 to-parchment-50',
  'from-emerald-50 to-parchment-50',
  'from-purple-50 to-parchment-50',
  'from-amber-50 to-parchment-50',
  'from-rose-50 to-parchment-50',
]

export default function StepGuide({ biblicalText, reference, notes, onUpdateNotes, onFinish, onBack }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [showTimer, setShowTimer] = useState(false)
  const [textExpanded, setTextExpanded] = useState(false)

  const step = STEPS[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep === STEPS.length - 1
  const allNotesComplete = STEPS.every((s) => (notes[s.id] || '').trim().length > 0)

  const goNext = () => {
    if (!isLast) {
      setCurrentStep((c) => c + 1)
      setShowTimer(false)
      setTextExpanded(false)
    }
  }

  const goPrev = () => {
    if (!isFirst) {
      setCurrentStep((c) => c - 1)
      setShowTimer(false)
      setTextExpanded(false)
    } else {
      onBack()
    }
  }

  const previewText = biblicalText.length > 200 && !textExpanded
    ? biblicalText.slice(0, 200) + '…'
    : biblicalText

  return (
    <div className={`min-h-screen bg-gradient-to-br ${STEP_BG_GRADIENTS[currentStep]} flex flex-col`}>
      {/* Top progress bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-parchment-200 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-sacred-600">
              Paso {currentStep + 1} de {STEPS.length}
            </span>
            <span className="text-xs text-sacred-500">
              {STEPS.filter((s) => (notes[s.id] || '').trim()).length} / {STEPS.length} completados
            </span>
          </div>
          <div className="flex gap-1.5">
            {STEPS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setCurrentStep(i); setShowTimer(false); setTextExpanded(false) }}
                title={s.name}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  i < currentStep
                    ? 'bg-sacred-700'
                    : i === currentStep
                      ? 'bg-gold-500'
                      : 'bg-parchment-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 animate-slide-up">
        {/* Step header */}
        <div className="text-center mb-6">
          <div className={`inline-flex items-center gap-3 ${step.bgColor} ${step.borderColor}
                          border px-5 py-2.5 rounded-2xl mb-4`}>
            <span className="text-2xl">{step.icon}</span>
            <div className="text-left">
              <p className={`font-serif text-xl font-bold ${step.textColor}`}>{step.name}</p>
              <p className={`text-xs font-medium ${step.textColor} opacity-70`}>{step.subtitle}</p>
            </div>
          </div>
          <p className="text-sacred-600 text-sm leading-relaxed max-w-lg mx-auto">
            {step.description}
          </p>
        </div>

        {/* Biblical text */}
        <div className="card mb-5 border-l-4 border-gold-500">
          <div className="flex items-center justify-between mb-2">
            {reference && (
              <p className="font-serif text-sm font-bold text-gold-700">{reference}</p>
            )}
            {biblicalText.length > 200 && (
              <button
                onClick={() => setTextExpanded(!textExpanded)}
                className="text-xs text-sacred-500 hover:text-sacred-700 transition-colors"
              >
                {textExpanded ? 'Ver menos ▲' : 'Ver todo ▼'}
              </button>
            )}
          </div>
          <p className="font-serif text-sacred-800 leading-loose text-lg italic">
            "{previewText}"
          </p>
        </div>

        {/* Tip */}
        <div className={`${step.bgColor} rounded-xl p-4 mb-5 border ${step.borderColor} flex gap-3`}>
          <span className="text-lg flex-shrink-0">💡</span>
          <p className={`text-sm leading-relaxed ${step.textColor}`}>
            <strong>Sugerencia:</strong> {step.tip}
          </p>
        </div>

        {/* Timer */}
        <div className="mb-5">
          {!showTimer ? (
            <button
              onClick={() => setShowTimer(true)}
              className="text-sacred-600 hover:text-sacred-800 text-sm font-medium flex items-center gap-2 transition-colors"
            >
              <span>⏱</span> Usar temporizador ({step.duration} min sugeridos)
            </button>
          ) : (
            <div className="animate-fade-in">
              <Timer minutes={step.duration} />
            </div>
          )}
        </div>

        {/* Notes area */}
        <div className="card mb-6">
          <label className={`block font-serif font-semibold ${step.textColor} mb-2`}>
            {step.instruction}
          </label>
          <textarea
            value={notes[step.id] || ''}
            onChange={(e) => onUpdateNotes(step.id, e.target.value)}
            placeholder={step.prompt}
            rows={5}
            className="w-full border border-parchment-200 rounded-xl px-4 py-3 text-sacred-800
                       focus:outline-none focus:ring-2 focus:ring-sacred-400 focus:border-transparent
                       bg-parchment-50 font-serif leading-relaxed placeholder-sacred-300 text-base"
          />
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button onClick={goPrev} className="btn-secondary px-5">
            ←
          </button>
          {isLast ? (
            <button
              onClick={onFinish}
              className={`flex-1 font-serif font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md
                ${allNotesComplete
                  ? 'bg-gold-600 hover:bg-gold-700 text-white hover:shadow-lg active:scale-95'
                  : 'bg-sacred-700 hover:bg-sacred-800 text-white hover:shadow-lg active:scale-95'
                }`}
            >
              Ver mi reflexión completa ✦
            </button>
          ) : (
            <button onClick={goNext} className="btn-primary flex-1 font-serif">
              Siguiente: {STEPS[currentStep + 1].name} →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
