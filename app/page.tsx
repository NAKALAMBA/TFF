import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="relative">
      <div className="moving-gradient absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight text-brand-800 drop-shadow-sm">
              Empowering local artisans with AI & blockchain
            </h1>
            <p className="mt-6 text-lg text-brand-900/80 max-w-prose">
              Discover, collect, and champion authentic craft. AI storytelling and Polygon-backed authenticity—built for artists, dealers, and fans.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/auth/register" className="px-6 py-3 rounded-full bg-brand-700 text-white shadow-lg hover:bg-brand-800 transition">
                Get Started
              </Link>
              <Link href="/ai-hub" className="px-6 py-3 rounded-full bg-white text-brand-800 shadow hover:bg-brand-50 transition">
                Explore AI Hub
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-6 w-56 h-56 rounded-full bg-candy.pink/30 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-6 -right-6 w-72 h-72 rounded-full bg-candy.purple/30 blur-3xl animate-float-slow" />
            <div className="glass rounded-3xl p-6 md:p-10 shadow-2xl">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-white/70 shadow-inner" />
                ))}
              </div>
              <p className="mt-4 text-sm text-brand-900/70">
                A glimpse of community artworks. Upload yours today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

