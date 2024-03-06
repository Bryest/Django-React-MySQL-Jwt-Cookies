import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [name, setName] = useState('');

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user',
          {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          });

        const content = await response.json();

        setName(content.name || '');
      }
    )();
  });
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName}/>

        <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path="/" element={<Home name={name}/>} />
            <Route path="/login" element={<Login setName={setName}/>} />
            <Route path="/register" Component={Register} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
