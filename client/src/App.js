import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutoresTable from './views/AutoresTable/AutoresTable';
import AutoresForm from './views/AutoresForm/AutoresForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/autores" element={<AutoresTable />} />
          <Route path='/crear-autor' element={<AutoresForm/>} />
          <Route path='/editar-autor/:id' element={<AutoresForm/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
