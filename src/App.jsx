import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import InsurancePartners from './components/InsurancePartners'
import renderRoutes from './routes'
import './App.css'
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        
        <main>
          <Routes>
            {renderRoutes()}
          </Routes>
      <InsurancePartners />
    <HowItWorks />
        </main>
      </div>
    </Router>
  );
}

export default App;
