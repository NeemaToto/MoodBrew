import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({

});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
  <Component {...pageProps} />
  </MantineProvider>
  )
}
