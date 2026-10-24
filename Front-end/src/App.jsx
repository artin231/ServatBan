import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import { FuncProvider } from './context/MoneyContext';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {

  return (
    <>
      <FuncProvider>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/signup' element={<SignUpPage/>} />
          </Routes>
        </Router>
      </FuncProvider>

    </>
  )
}

export default App
