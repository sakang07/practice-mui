import { ThemeProvider } from '@mui/material/styles';

import theme from './ui/Theme';
import Header from './ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello d d
    </ThemeProvider>
  );
}

export default App;
