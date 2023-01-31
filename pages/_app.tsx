import { Layout } from '@/src/components/layout'
import '@/styles/globals.css'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import '@/styles/libs/video-react.css'
import { Analytics } from '@/src/components/analytics'

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#5503bb',
      secondary: '#ff9c00',
      // error: '#FCC5D8',
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <NextUIProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </>
  )
}
