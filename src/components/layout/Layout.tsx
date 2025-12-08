import { Link, NavLink, Outlet } from 'react-router-dom'
import { Button } from '../ui/Button'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Study Abroad', to: '/study-abroad' },
  { label: 'Courses', to: '/courses' },
  { label: 'Campus Ambassador', to: '/campus-ambassador' },
]

const Layout = () => {
  return (
    <div className="min-h-screen bg-zlowy-bg text-black">
      <header className="sticky top-0 z-50 border-b-2 border-black bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
            ZLOWY
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-body text-sm uppercase tracking-[0.15em] ${
                    isActive ? 'text-black' : 'text-neutral-500 hover:text-black'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button className="hidden md:inline-flex" asChild>
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <Outlet />
      </main>

      <footer className="mt-16 border-t-2 border-black bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">ZLOWY</p>
            <p className="mt-2 max-w-sm text-sm text-neutral-600">
              High-energy education consultancy helping ambitious students go global.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold uppercase tracking-widest">Explore</p>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-black/70">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm">
            <p className="font-semibold uppercase tracking-widest">Stay in loop</p>
            <p className="mt-3 text-neutral-600">
              Subscribe for scholarships, visa intel, and campus ambassador drops.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-2 border-black bg-transparent px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none"
              />
              <Button type="submit">Join</Button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
