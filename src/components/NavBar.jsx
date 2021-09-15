import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './NavBar.module.css';

export default function NavBar({ children }) {
  const router = useRouter();

  return (
    <div>
      <header>
        <nav>
          <Link href="/">
            <a
              className={
                router.pathname === '/'
                  ? classes.activeLink
                  : classes.inactiveLink
              }
            >
              Shows
            </a>
          </Link>
          <Link href="/liked">
            <a
              className={
                router.pathname === '/liked'
                  ? classes.activeLink
                  : classes.inactiveLink
              }
            >
              Favourites
            </a>
          </Link>
        </nav>
      </header>
      <main className="card">{children}</main>
    </div>
  );
}
