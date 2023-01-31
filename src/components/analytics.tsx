import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GoogleAnalyticsService } from '../service/GoogleAnalyticsService'
import { MixPanelService } from '../service/MixPanelService'

export function Analytics() {
  const router = useRouter()

  useEffect(() => {
    GoogleAnalyticsService.trackPage(router.asPath)
    MixPanelService.trackPage(router.asPath)
  }, [router])

  return <></>
}
