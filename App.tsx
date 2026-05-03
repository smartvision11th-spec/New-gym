import { useEffect } from 'react'
import Home from './pages/Home'

export default function App() {
  useEffect(() => {
    document.title = 'IRON PULSE Fitness'
  }, [])

  return <Home />
}
