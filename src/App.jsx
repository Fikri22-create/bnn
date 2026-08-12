import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Profil from './pages/Profil.jsx'
import Fasilitas from './pages/Fasilitas.jsx'
import Tupoksi from './pages/Tupoksi.jsx'
import Kontak from './pages/Kontak.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/tupoksi" element={<Tupoksi />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
