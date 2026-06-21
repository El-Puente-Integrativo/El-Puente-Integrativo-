import { useState } from 'react'
import Welcome from './components/Welcome'
import TextInput from './components/TextInput'
import StepGuide from './components/StepGuide'
import Summary from './components/Summary'

const SCREENS = {
  WELCOME: 'welcome',
  TEXT_INPUT: 'textInput',
  STEPS: 'steps',
  SUMMARY: 'summary',
}

const emptyNotes = () => ({
  lectio: '',
  meditatio: '',
  oratio: '',
  contemplatio: '',
  actio: '',
})

export default function App() {
  const [screen, setScreen] = useState(SCREENS.WELCOME)
  const [reference, setReference] = useState('')
  const [biblicalText, setBiblicalText] = useState('')
  const [notes, setNotes] = useState(emptyNotes())

  const handleTextContinue = ({ reference: ref, text }) => {
    setReference(ref)
    setBiblicalText(text)
    setScreen(SCREENS.STEPS)
  }

  const handleUpdateNotes = (stepId, value) => {
    setNotes((prev) => ({ ...prev, [stepId]: value }))
  }

  const handleNewSession = () => {
    setReference('')
    setBiblicalText('')
    setNotes(emptyNotes())
    setScreen(SCREENS.WELCOME)
  }

  return (
    <>
      {screen === SCREENS.WELCOME && (
        <Welcome onStart={() => setScreen(SCREENS.TEXT_INPUT)} />
      )}

      {screen === SCREENS.TEXT_INPUT && (
        <TextInput
          onContinue={handleTextContinue}
          onBack={() => setScreen(SCREENS.WELCOME)}
        />
      )}

      {screen === SCREENS.STEPS && (
        <StepGuide
          biblicalText={biblicalText}
          reference={reference}
          notes={notes}
          onUpdateNotes={handleUpdateNotes}
          onFinish={() => setScreen(SCREENS.SUMMARY)}
          onBack={() => setScreen(SCREENS.TEXT_INPUT)}
        />
      )}

      {screen === SCREENS.SUMMARY && (
        <Summary
          biblicalText={biblicalText}
          reference={reference}
          notes={notes}
          onNewSession={handleNewSession}
          onBack={() => setScreen(SCREENS.STEPS)}
        />
      )}
    </>
  )
}
