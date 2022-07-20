import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Account, Contact, Downloads, Register, Login } from './pages'
import { Navigation, Footer } from './components'

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/account' element={<Account />}/>
          <Route exact path='/contact' element={<Contact />}/>
          <Route exact path='/downloads' element={<Downloads />}/>
          <Route exact path='/register' element={<Register />}/>
          <Route exact path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
