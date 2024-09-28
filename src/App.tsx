import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './pages/Main';
import Inizio from './pages/Inizio';
import Navbar from './components/navbar/Navbar';
import Delivious from './pages/Delivious';

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <BrowserRouter>
          <Navbar defaultClass="sticky top-0" />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/inizio" element={<Inizio />} />
            <Route path="/delivious" element={<Delivious />} />
            {/* <Route path="/inizio" element={<Inizio />} /> */}
            {/* <Route path="/inizio" element={<Inizio />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
