import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "../global-style";

const theme = {
  colors: {
      primary: '#e00009',
      secondary: '#e00009',
      white: "#fff",
      gray: '#9b9b9b',
      darkgray: `#2d2b2b`
  },
}

export default function App({ Component, pageProps }) {
  return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
  )
}