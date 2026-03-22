import { useState, useRef, useEffect, KeyboardEvent } from 'react'

type Line = {
  type: 'input' | 'output' | 'error' | 'info'
  text: string
}

const COMMANDS: Record<string, Line[]> = {
  '/whoami': [
    { type: 'output', text: 'Andrew Courter' },
    { type: 'output', text: 'Director of Engineering' },
    { type: 'output', text: '' },
    { type: 'output', text: 'Pragmatic engineering leader with 10+ years building high-performing' },
    { type: 'output', text: 'teams and software across healthcare, finance, defense, and media.' },
    { type: 'output', text: 'Lives in the terminal — Neovim, CLI tools, and the occasional coffee.' },
  ],
  '/help': [
    { type: 'output', text: 'Available commands:' },
    { type: 'output', text: '' },
    { type: 'output', text: '  /whoami   who is this person?' },
    { type: 'output', text: '  /links    social & content links' },
    { type: 'output', text: '  /clear    clear the terminal' },
    { type: 'output', text: '  /help     show this message' },
  ],
  '/links': [
    { type: 'output', text: 'GitHub    → github.com/exosyphon' },
    { type: 'output', text: 'LinkedIn  → linkedin.com/in/andrew-courter-79126836' },
    { type: 'output', text: 'Twitter   → twitter.com/Exosyphon' },
    { type: 'output', text: 'YouTube   → youtube.com/channel/UCx3Vist13GWLzRPvhUxQ3Jg' },
    { type: 'output', text: 'Medium    → medium.com/@ascourter' },
    { type: 'output', text: 'Substack  → andrewcourter.substack.com' },
  ],
}

const INITIAL: Line[] = [
  { type: 'info', text: 'Welcome. Type /help to see available commands.' },
]

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(INITIAL)
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim()
    if (!cmd) return

    const newLines: Line[] = [...lines, { type: 'input', text: cmd }]

    if (cmd === '/clear') {
      setLines([])
    } else if (COMMANDS[cmd]) {
      setLines([...newLines, ...COMMANDS[cmd]])
    } else {
      setLines([
        ...newLines,
        { type: 'error', text: `command not found: ${cmd}` },
        { type: 'error', text: 'try /help' },
      ])
    }

    setCmdHistory(prev => [cmd, ...prev])
    setHistoryIdx(-1)
    setInput('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIdx = Math.min(historyIdx + 1, cmdHistory.length - 1)
      setHistoryIdx(newIdx)
      if (cmdHistory[newIdx] !== undefined) setInput(cmdHistory[newIdx])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIdx = Math.max(historyIdx - 1, -1)
      setHistoryIdx(newIdx)
      setInput(newIdx === -1 ? '' : cmdHistory[newIdx])
    }
  }

  return (
    <div
      className="flex flex-col h-full bg-zinc-900 border-t border-zinc-800 font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-zinc-800 flex-none select-none">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-zinc-500">guest@andrewcourter.com — bash</span>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-0.5 min-h-0">
        {lines.map((line, i) => (
          <div key={i} className="leading-5">
            {line.type === 'input' && (
              <span>
                <span className="text-green-400 mr-2 select-none">$</span>
                <span className="text-zinc-200">{line.text}</span>
              </span>
            )}
            {line.type === 'output' && (
              <span className="text-zinc-400 pl-4">{line.text || '\u00A0'}</span>
            )}
            {line.type === 'error' && (
              <span className="text-red-400 pl-4">{line.text}</span>
            )}
            {line.type === 'info' && (
              <span className="text-zinc-500 italic">{line.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center px-4 py-2.5 border-t border-zinc-800 flex-none"
      >
        <span className="text-green-400 mr-2 select-none">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-zinc-200 outline-none caret-green-400 placeholder-zinc-600"
          placeholder="type a command..."
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </form>
    </div>
  )
}
