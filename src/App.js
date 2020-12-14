import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './extensions/history';
import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from './theme/globalStyle';
import theme from './theme/MuiTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
