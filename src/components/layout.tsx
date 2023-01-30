import { styled } from '@nextui-org/react'
import { ReactNode } from 'react'
import { Footer } from './footer'
import NavBar from './navbar'

export const Box = styled('div', {
  boxSizing: 'border-box',
})

interface Props {
  children?: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <Box style={{ width: '100%' }}>
      <NavBar />
      {children}
      <Footer />
    </Box>
  )
}
