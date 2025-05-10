import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}