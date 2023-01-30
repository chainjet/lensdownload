import { Card, Row, Text, Button, Loading, Progress } from '@nextui-org/react'
import { useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import useDownloader from 'react-use-downloader'
import { capitalize } from '../utils/string'
import { parseBytes } from '../utils/units'
import mime from 'mime-types'
import { Player } from 'video-react'
// import '~video-react/dist/video-react.css'

interface Props {
  media: {
    original: {
      url: string
      mimeType: string
    }
  }
  publicationId: string
  publicationTitle: string
}

export function LensMedia({ media, publicationId, publicationTitle }: Props) {
  const fileUrl = media.original.url.replace('ipfs://', 'https://ipfs.io/ipfs/')
  const { size, elapsed, percentage, download, cancel, error: downloadError, isInProgress } = useDownloader()

  let type: string
  let content: JSX.Element
  if (media.original.mimeType.startsWith('video')) {
    type = 'video'
    content = (
      <div style={{ width: 560 }}>
        <Player width={560}>
          <source src={fileUrl} />
        </Player>
      </div>
    )
  } else if (media.original.mimeType.startsWith('image')) {
    type = 'image'
    content = <img src={fileUrl} width={560} alt={publicationTitle} />
  } else if (media.original.mimeType.startsWith('audio')) {
    type = 'audio'
    content = <ReactAudioPlayer src={fileUrl} autoPlay controls />
  } else {
    type = 'file'
    content = <></>
  }

  const handleDownload = async () => {
    download(fileUrl, `${type}.${mime.extension(media.original.mimeType)}`)
  }

  return (
    <div style={{ marginBottom: '24px' }}>
      <Row justify="center" align="center" css={{ mb: 24 }}>
        {content}
      </Row>
      <Row justify="center" align="center">
        <div>
          <Button onPress={handleDownload}>
            {isInProgress ? (
              <>
                <div style={{ marginRight: '6px' }}>Downloading</div>
                <div>
                  <Loading type="points" color="currentColor" size="sm" />
                </div>
              </>
            ) : (
              `Download ${capitalize(type)}`
            )}
          </Button>
          {isInProgress && (
            <div style={{ marginTop: '16px' }}>
              <div>
                <Progress value={percentage} color="gradient" />
              </div>
              {size > 0 && (
                <div>
                  {parseBytes((size / 100) * percentage)} / {parseBytes(size)}
                  {elapsed > 0 && <> - {parseBytes(((size / 100) * percentage) / elapsed)}/s</>}
                </div>
              )}
            </div>
          )}
        </div>
      </Row>
      <Row justify="center" align="center" style={{ marginTop: 24, fontSize: 14 }}>
        {type === 'video' ? (
          <a href={`https://lenstube.xyz/watch/${publicationId}`} target="_blank" rel="noopener noreferrer">
            Open on Lenstube
          </a>
        ) : (
          <a href={`https://lenster.xyz/posts/${publicationId}`} target="_blank" rel="noopener noreferrer">
            Open on Lenster
          </a>
        )}
      </Row>
    </div>
  )
}
