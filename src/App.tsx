import './App.css'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Header } from './common/Header'
import { Footer } from './common/Footer'

function App() {

  return (
    <div className='text-[#2F2F2F] overflow-hidden'>
     <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
      <div className='bg-black text-white px-2 font-serif py-2'>
        <p>This was designed in VSCODE, and styled with TailwindCss by Ayodeji.</p>
      </div>
     </Router>
    </div>
  )
}

export default App
