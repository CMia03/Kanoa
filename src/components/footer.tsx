// components/Footer.js
export default function Footer() {
    return (
      <footer>
        <p>&copy; {new Date().getFullYear()} Mon Site Web. Tous droits réservés.</p>
        <style jsx>{`
          footer {
            padding: 1rem;
            text-align: center;
            background: #333;
            color: white;
          }
        `}</style>
      </footer>
    );
  }
  