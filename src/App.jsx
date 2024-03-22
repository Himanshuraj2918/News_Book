import React from 'react'
import News from './component/News'
import Navbar from './component/Navbar'
import { Footer } from './component/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<News key="home" country="in" type="general" />} />
        <Route path="/business" element={<News key="business" country="in" type="business" />} />
        <Route path="/entertainment" element={<News key="entertainment" country="in" type="entertainment" />} />
        <Route path="/general" element={<News key="general" country="in" type="general" />} />
        <Route path="/health" element={<News key="health" country="in" type="health" />} />
        <Route path="/science" element={<News key="science" country="in" type="science" />} />
        <Route path="/sports" element={<News key="sports" country="in" type="sports" />} />
        <Route path="/technology" element={<News key="technology" country="in" type="technology" />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App








