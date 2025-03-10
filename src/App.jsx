import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import Editor from './pages/Editor';

export default function App() {
  return (
    <div className="dark bg-neutral-950 min-h-screen w-full">
      <div className="relative z-10">
        <Toaster richColors position="top-center" />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
