export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">main</a>
          <a href="/about">About</a>
          <a href="/profile">profile</a>

        </nav>
        <main>{children}</main>
        <footer>© 2025 My Website</footer>
      </body>
    </html>
  );
}
