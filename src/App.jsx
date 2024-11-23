import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './main/main';
import { Box } from '@mui/material';

function App() {
  return (
    <>
    <Box sx={{ height: '100vh', margin: '-8px'}}>
    <Home />
    </Box>
    </>
  );
}

export default App;
