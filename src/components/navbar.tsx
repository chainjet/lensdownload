import React from 'react'
import { Navbar, Button, Link, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Link href="/">
          <Text b color="inherit" hideIn="xs" style={{ color: 'white' }}>
            Download Lens Media 🌿
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive={router.asPath === '/'} href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="https://chainjet.io">ChainJet</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto flat as={Link} href="https://discord.gg/QFnSwqj9YH" target="_blank" rel="noopener noreferrer">
            Discord
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
