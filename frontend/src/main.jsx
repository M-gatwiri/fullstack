import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from './components/ui/sonner'
const queryClient = new QueryClient({defaultOptions:{
  queries:{
    staleTime:60*1000
  }
}})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position= "bottom-right"/>
      <ReactQueryDevtools initialIsOpen= {false}/>
<App />
    </QueryClientProvider>
    
  </StrictMode>,
)
