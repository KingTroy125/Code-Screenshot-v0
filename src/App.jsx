import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <div className="dark bg-neutral-950 min-h-screen w-full">
      <div className="relative z-10">
        <Toaster richColors position="top-center" />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
