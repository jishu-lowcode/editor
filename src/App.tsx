import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}

export default App
