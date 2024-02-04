import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  
});


/*fontFamily: 'Satoshi, sans-serif',
primaryColor: 'taupe',
colors: {
  sage: ['rgba(181, 201, 127, 1)'],
  taupe: ['rgba(63, 57, 53, 1)'],
  dun: ['rgba(230, 204, 178, 1)'],
  seasalt: ['rgba(247, 247, 249, 1)'],
},
fontSizes: {
  sm: '0.78rem',
  md: '1rem',
  lg: '1.33rem',
  xl: '2.33rem',
  display: '3.56rem',
  h1:'2.33rem',
  h2: '2rem',
  h3: '1.33rem'
},
fontWeights: {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}*/


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
    <Component {...pageProps} />
    </MantineProvider>
  )
}
