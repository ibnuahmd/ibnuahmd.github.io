import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ibnu Ahmad Yuswandana | Portfolio',
  description: 'System Information Graduate & Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-background text-foreground transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  )
}

