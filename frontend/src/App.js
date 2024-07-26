import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import {Box} from '@mui/material';
import Home from './pages/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail';


function App() {
  return (
    <Router>
   <Box width={'400px'} sx={{width :{xl: '1488px'}}} m={'auto'}>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />

   </Box>
  </Router>

  );
}

export default App;
