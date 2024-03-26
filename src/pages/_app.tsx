import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import localFont from "next/font/local";
import Head from "next/head";

const satoshi = localFont({ src: "/satoshi/Satoshi.ttf" });
import { Header } from "../components/Header";
import Footer from "../components/Footer";

const theme = createTheme({
  primaryColor: "sage",
  colors: {
    sage: [
      "#f5fae7",
      "#ebf2d9",
      "#d7e1b7",
      "#c0d191",
      "#adc371",
      "#a1ba5d",
      "#9bb651",
      "#86a040",
      "#778f37",
      "#647b28",
    ],
    taupe: [
      "#f6f5f4",
      "#e7e7e7",
      "#cdcdcd",
      "#b1b1b1",
      "#9b9b9b",
      "#8c8b8a",
      "#3F3935",
      "#75716e",
      "#696460",
      "#5e554f",
    ],
    dun: [
      "#fff4e8",
      "#f5e7d8",
      "#e7cdb4",
      "#d8b28b",
      "#cd9a69",
      "#c58b53",
      "#c28446",
      "#ab7138",
      "#99652e",
      "#865624",
    ],
    seasalt: [
      "#f3f3f6",
      "#e4e4e6",
      "#c7c7cc",
      "#a8a8b5",
      "#8d8da0",
      "#7c7c93",
      "#F7F7F9",
      "#62627b",
      "#57566f",
      "#4a4a63",
    ],
    isabelline: [
      "#fcf4ed",
      "#eee7e0",
      "#daccc1",
      "#c6b19f",
      "#b59981",
      "#ab896e",
      "#a78263",
      "#926e52",
      "#836247",
      "#735339",
    ],
  },
  fontFamily: satoshi.style.fontFamily,
  headings: {
    sizes: {
      h1: {
        fontSize: "4rem",
        fontWeight: "900",
      },
      h2: {
        fontSize: "2.625rem",
        fontWeight: "500",
      },
      h3: {
        fontSize: "2.25rem",
        fontWeight: "500",
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: "500",
      },
    },
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
      <div
        style={{
          paddingLeft: rem(52),
          paddingRight: rem(52),
          color: "rgba(63, 57, 53, 1)",
        }}
      >
        <Head>
          <title>MoodBrew</title>
        </Head>
        <Header />
        <Component className={satoshi.className} {...pageProps} />
      </div>
      <Footer />
    </MantineProvider>
  );
}
