import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Artisan AI + Blockchain Marketplace',
  description: 'Empowering local artisans with AI & blockchain',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-gradient-to-br from-candy.purple/20 to-candy.pink/20 font-playful antialiased">
        <div className="relative min-h-screen">
          <NavBar />
          <main className="pt-20">{children}</main>
        </div>
      </body>
    </html>
  )
}

