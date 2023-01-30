import { LensMedia } from '@/src/components/lens-media'
import { useLensPublication } from '@/src/hooks/lens-hooks'
import { Container, Card, Row, Text, Loading } from '@nextui-org/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useDownloader from 'react-use-downloader'

export default function PostPage() {
  const router = useRouter()
  const { publication, loading, error } = useLensPublication(
    Array.isArray(router.query.id) ? router.query.id[0] : router.query.id ?? '',
  )

  let notReadyElement: JSX.Element | null = null
  if (loading) {
    notReadyElement = <Loading />
  } else if (error) {
    notReadyElement = <>Error ocurred: {error.message}</>
  } else if (!publication) {
    notReadyElement = <>Unexpected error ocurred. Please try again</>
  }
  if (notReadyElement) {
    return (
      <Container style={{ marginTop: 16 }}>
        <Row justify="center" align="center">
          {notReadyElement}
        </Row>
      </Container>
    )
  }

  const publicationTitle = publication.metadata.name

  return (
    <>
      <Head>
        <title>{publicationTitle}</title>
      </Head>
      <Container>
        <Card>
          <Card.Body>
            <Row justify="center" align="center" css={{ mb: 16 }}>
              <Text h6 size={15} color="white">
                <strong>{publicationTitle}</strong>
              </Text>
            </Row>
            {publication.metadata.media.map((media: any, i: number) => (
              <LensMedia key={i} media={media} publicationId={publication.id} publicationTitle={publicationTitle} />
            ))}
            {!publication.metadata.media.length && (
              <Row justify="center" align="center">
                <>This post does not have any media to download.</>
              </Row>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
