// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/welcome">Accueil</Link>
        </li>
        <li>
          <Link href="/about">À propos</Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          padding: 1rem;
          background: #333;
          color: white;
        }
        ul {
          list-style-type: none;
          display: flex;
        }
        li {
          margin-right: 20px;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
