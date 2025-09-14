import { Routes, Route, Navigate } from 'react-router-dom'
import { TRPCReactProvider } from './trpc/react'
import { Toaster } from './components/ui/toaster'
import DrawPage from './pages/DrawPage'

function App() {
  return (
    <TRPCReactProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/draw" replace />} />
        <Route path="/draw" element={<DrawPage />} />
      </Routes>
      <Toaster />
    </TRPCReactProvider>
  )
}

export default App