import { CssBaseline } from '@nextui-org/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
        <script defer data-domain="chainjet.io,lensverse.web" src="https://plausible.io/js/script.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
