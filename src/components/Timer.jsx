import { useState, useEffect, useRef } from 'react'

export default function Timer({ minutes = 5 }) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    setSecondsLeft(minutes * 60)
    setRunning(false)
    setFinished(false)
  }, [minutes])

  useEffect(() => {
    if (running && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            clearInterval(intervalRef.current)
            setRunning(false)
            setFinished(true)
            return 0
          }
          return s - 1
        })
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [running])

  const reset = () => {
    clearInterval(intervalRef.current)
    setSecondsLeft(minutes * 60)
    setRunning(false)
    setFinished(false)
  }

  const toggle = () => {
    if (finished) return
    setRunning((r) => !r)
  }

  const mins = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60
  const total = minutes * 60
  const progress = ((total - secondsLeft) / total) * 100
  const circumference = 2 * Math.PI * 28

  return (
    <div className="flex items-center gap-4 bg-parchment-100 rounded-xl p-3 border border-parchment-200">
      {/* Circle progress */}
      <div className="relative w-16 h-16 flex-shrink-0">
        <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32" cy="32" r="28"
            fill="none"
            stroke="#e5e6c0"
            strokeWidth="4"
          />
          <circle
            cx="32" cy="32" r="28"
            fill="none"
            stroke={finished ? '#16a34a' : '#486581'}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * progress) / 100}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xs font-bold font-serif ${finished ? 'text-green-700' : 'text-sacred-700'}`}>
            {finished ? '✓' : `${mins}:${String(secs).padStart(2, '0')}`}
          </span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs text-sacred-600 mb-1">
          {finished
            ? 'Tiempo completado'
            : running
              ? 'Temporizador activo'
              : 'Temporizador sugerido'}
        </p>
        <p className="text-sm font-medium text-sacred-800">
          {minutes} minutos de {minutes === 5 ? 'oración' : 'contemplación'}
        </p>
      </div>

      <div className="flex gap-2 flex-shrink-0">
        <button
          onClick={toggle}
          disabled={finished}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all
            ${finished
              ? 'bg-green-100 text-green-700 cursor-default'
              : running
                ? 'bg-sacred-700 text-white hover:bg-sacred-800'
                : 'bg-sacred-600 text-white hover:bg-sacred-700'
            }`}
        >
          {finished ? '✓' : running ? '⏸' : '▶'}
        </button>
        <button
          onClick={reset}
          className="w-9 h-9 rounded-full bg-parchment-200 hover:bg-parchment-300 text-sacred-600
                     flex items-center justify-center text-sm transition-all"
          title="Reiniciar"
        >
          ↺
        </button>
      </div>
    </div>
  )
}
