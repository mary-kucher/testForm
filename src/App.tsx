import { Route, Routes } from 'react-router-dom';
import './App.css'
import { LoginPage } from './components/Pages/LoginPage.tsx';
import { Container } from '@mui/material';
import { FirstStepPage } from './components/Pages/FirstStepPage.tsx';
import { SecondStepPage } from './components/Pages/SecondStepPage.tsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'EB Garamond, sans-serif',
    fontSize: 16,
  },
  palette: {
    primary: {
      main: '#1f2544',
      contrastText: '#fff'
    },
  }
});
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{
        display: 'flex',
        width: '100%',
        maxHeight: '800px',
        border: '1px solid #1f2544',
        borderRadius: 5,
        p: '25px 0',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="step1" element={<FirstStepPage/>} />
          <Route path="step2" element={<SecondStepPage/>} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
};
