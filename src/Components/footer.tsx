export default function Footer() {
    return (
      <footer className="w-full bg-var(--color-bg) text-gray-300 text-sm py-6 text-center">
        <span>© {new Date().getFullYear()} Gen — All rights reserved.</span>
      </footer>
    );
  }