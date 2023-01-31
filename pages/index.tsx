import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Grid, Input, Loading, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleInputChange = (value: string) => {
    const publicationId = value.split('/').pop() ?? ''
    if (/0x[0-9a-f]+-0x[0-9a-f]+/i.test(publicationId)) {
      setLoading(true)
      router.push(`/posts/${publicationId}`)
    }
  }

  return (
    <>
      <Head>
        <title>Download Lens Media 🌿</title>
        <meta name="description" content="Download Lens videos and audios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ marginBottom: 48 }}>
        <Grid.Container justify="center" css={{ my: 36 }}>
          <Text
            h1
            size={60}
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
              mr: 8,
            }}
            weight="bold"
          >
            Download
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: '45deg, $purple600 -20%, $pink600 100%',
              mr: 8,
            }}
            weight="bold"
          >
            Lens
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
              mr: 8,
            }}
            weight="bold"
          >
            video or audio
          </Text>{' '}
          <Text h1 size={60}>
            🌿
          </Text>
        </Grid.Container>
        <Row justify="center" align="center" css={{ maxW: 600, px: 20 }}>
          <Input
            labelPlaceholder={loading ? 'Loading...' : 'Paste a Lens publication URL here'}
            fullWidth
            status="primary"
            onChange={(e) => handleInputChange(e.target.value)}
            {...(loading ? { contentRight: <Loading size="xs" /> } : {})}
          />
        </Row>
      </main>
    </>
  )
}
