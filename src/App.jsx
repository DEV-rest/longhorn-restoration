import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import renderRoutes from './routes'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            {renderRoutes()}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
