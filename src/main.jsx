import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../home.jsx'
import Register from '../register.jsx'
import './index.css'

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = React.useState(false)
  const [error, setErrorMsg] = React.useState('')

  React.useEffect(() => {
    const handler = (event) => {
      console.error('Error caught:', event.error)
      setHasError(true)
      setErrorMsg(event.error?.message || 'Unknown error')
    }
    window.addEventListener('error', handler)
    return () => window.removeEventListener('error', handler)
  }, [])

  if (hasError) {
    return (
      <div style={{ all: 'initial', display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px', fontFamily: 'monospace', background: '#1a1a1a', color: '#ff6b6b', minHeight: '100vh' }}>
        <h1>❌ Error Loading App</h1>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', padding: '20px', background: '#0a0a0a', borderRadius: '4px' }}>{error}</pre>
        <details>
          <summary>Check browser console (F12) for more details</summary>
        </details>
      </div>
    )
  }

  return children
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
