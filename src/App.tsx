import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './pages/Main';
import Inizio from './pages/Main';

function App() {
  return (
    <div className="min-h-full w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/inizio" element={<Inizio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
