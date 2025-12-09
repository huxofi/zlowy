import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Home from './pages/Home.tsx'
import StudyAbroad from './pages/StudyAbroad.tsx'
import Courses from './pages/Courses.tsx'
import CampusAmbassador from './pages/CampusAmbassador.tsx'
import ZlowyAccelerator from './pages/ZlowyAccelerator.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/accelerator" element={<ZlowyAccelerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
