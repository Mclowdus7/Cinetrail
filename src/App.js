import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import ThemeContextProvider from './contexts/ThemeContext';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/Users/SignUp';
import SignIn from './Pages/Users/SignIn';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserContextProvider>
      <ThemeContextProvider>
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/moviedetails/:movieId" element={<MovieDetails />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </ThemeContextProvider>
      </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
