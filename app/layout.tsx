import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'National Digital Investigation Support Centre',
  description: 'राष्ट्रीय डिजिटल जांच सहायता केंद्र - Government of India, Ministry of Home Affairs'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="d-flex flex-column min-vh-100">{children}</body>
    </html>
  )
}
