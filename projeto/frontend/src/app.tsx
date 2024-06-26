import { BrowserRouter } from 'react-router-dom';
import { Router } from './core/router/router';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <BrowserRouter>
        <CssBaseline />
        <Router />
        <ToastContainer />
    </BrowserRouter>
  );
}
