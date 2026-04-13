import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-8 p-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          nulegal
        </h1>
        <p className="text-slate-600">
          React + Vite + Tailwind CSS
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Count is {count}
        </button>
        <p className="text-sm text-slate-500">
          Edit <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-800">src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
