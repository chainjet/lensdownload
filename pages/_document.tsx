import { CssBaseline } from '@nextui-org/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
        <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
