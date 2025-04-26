import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Whoami from './pages/Whoami';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-3xl h-[600px] bg-surface rounded-lg border-2 border-dotted border-gray-700 overflow-hidden shadow-xl shadow-black/20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Whoami />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
