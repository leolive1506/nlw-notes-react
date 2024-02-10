import { useState } from 'react'
import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export interface Note {
  id: string
  date: Date,
  content: string
}
export function App() {
  const [notes, setNotes] = useState<Note[]>([])

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }
    setNotes(prev => [newNote, ...prev])
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Experts"/>
      <form className="w-full">
        <input
          type="text"
          placeholder='Busque por suas notas'
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {notes.map(note => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  )
}