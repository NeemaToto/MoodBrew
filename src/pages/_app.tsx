import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, rem } from '@mantine/core';

const theme = createTheme({
  primaryColor: "sage",
  colors: {
    sage: ["#f5fae7", "#ebf2d9", "#d7e1b7", "#c0d191", "#adc371", "#a1ba5d", "#9bb651", "#86a040", "#778f37", "#647b28"],
    taupe: ["#f6f5f4", "#e7e7e7", "#cdcdcd", "#b1b1b1", "#9b9b9b", "#8c8b8a", "#888481", "#75716e", "#696460", "#5e554f"],
    dun: ["#fff4e8", "#f5e7d8", "#e7cdb4", "#d8b28b", "#cd9a69", "#c58b53", "#c28446", "#ab7138", "#99652e", "#865624"],
    seasalt: ["#f3f3f6", "#e4e4e6", "#c7c7cc", "#a8a8b5", "#8d8da0", "#7c7c93", "#74748e", "#62627b", "#57566f", "#4a4a63"]
  },
  fontFamily: 'Satoshi, sans-serif',
  headings: {
    sizes: {
      h1: {
        fontSize: '3.56rem',
        fontWeight: '700',
      },
      h2: {
        fontSize: '2.33rem',
        fontWeight: '500',
      },
      h3: {
        fontSize: '2rem',
        fontWeight: '500',
      },
      h4: {
        fontSize: '1.33rem',
        fontWeight: '500',
      },

    }
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(14),
    md: rem(18),
    lg: rem(24),
    xl: rem(20),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
