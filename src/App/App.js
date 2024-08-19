import './App.css';
import Home from '../Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;
