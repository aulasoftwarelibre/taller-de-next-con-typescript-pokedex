'use client'

import './globals.css'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Navbar position="static">
            <NavbarBrand>
              <Link href="/" className="font-bold text-2xl">
                Pokedex
              </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
              <NavbarItem>
                <ThemeSwitcher />
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          {children}
        </Providers>
      </body>
    </html>
  )
}
