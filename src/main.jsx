import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader'

const RootComponent = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      // Add a small delay for better UX
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <>
      {loading && <Loader />}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
)

export default RootComponent