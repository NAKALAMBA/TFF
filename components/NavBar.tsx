"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/auth/login', label: 'Login' },
  { href: '/auth/register', label: 'Register' },
  { href: '/dashboards/artist', label: 'Artist' },
  { href: '/dashboards/dealer', label: 'Dealer' },
  { href: '/dashboards/user', label: 'User' },
  { href: '/ai-hub', label: 'AI Hub' },
]

export function NavBar() {
  const pathname = usePathname()
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 glass rounded-full px-4 py-2 flex items-center justify-between shadow-lg">
          <Link href="/" className="font-display text-xl text-brand-700">
            Artisan.ai
          </Link>
          <ul className="hidden md:flex gap-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    'px-3 py-1 rounded-full transition-colors',
                    pathname === l.href
                      ? 'bg-brand-600 text-white'
                      : 'hover:bg-brand-100 text-brand-800'
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <Link href="/menu" className="px-3 py-1 rounded-full bg-brand-600 text-white">
              Menu
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

