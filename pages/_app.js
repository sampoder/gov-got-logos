
import { ThemeProvider } from 'theme-ui'

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
  );
}

export default MyApp;
