import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import ThemeContextProvider from './contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeContextProvider>
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </ThemeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
