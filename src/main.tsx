import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './constants/globalStyle';
import { darkTheme, lightTheme } from './constants/theme';
import useStored from './store/useStored';
// import './index.css'


function JSONTrack() {
  const lightmode = useStored(state => state.lightmode);
  return <ThemeProvider theme={lightmode ? lightTheme : darkTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <JSONTrack />
)
