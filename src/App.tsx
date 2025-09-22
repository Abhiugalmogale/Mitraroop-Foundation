import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FinancialAid from './pages/FinancialAid';
import Donate from './pages/Donate';
import StudentPrograms from './pages/StudentPrograms';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/financial-aid" element={<FinancialAid />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/student-programs" element={<StudentPrograms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;