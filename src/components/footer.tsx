// components/Footer.js
export default function Footer() {
  return (
    <footer className="py-4 text-center bg-gray-800 text-white">
      <p>
        &copy; {new Date().getFullYear()} Mon Site Web. Tous droits réservés.
      </p>
    </footer>
  );
}
