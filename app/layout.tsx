import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OSINT',
  description: 'Created by Srinjoy Roy'

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
