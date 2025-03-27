import {Metadata} from "next";

export const metadata:Metadata={
  title:{
    default:"Global title",
    template:"%s | My Website"

  },
  description:"this is layout metadata",
}



export default function root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', textAlign: 'center' }}>
        <h1>My Website</h1>
        <p>Welcome to my awesome website!</p>
      </header>
      <body>
        <nav style={{ backgroundColor: '#f4f4f4', padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
          <a href="/" style={{ textDecoration: 'none', color: '#333' }}>Main</a>
          <a href="/about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
          <a href="/profile" style={{ textDecoration: 'none', color: '#333' }}>Profile</a>
        </nav>
        <main>{children}</main>
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', textAlign: 'center' }}>
          <p>© 2025 My Website</p>
          <p>Follow us on:
            <a href="https://twitter.com" style={{ color: '#1DA1F2', marginLeft: '10px' }}>Twitter</a>,
            <a href="https://facebook.com" style={{ color: '#4267B2', marginLeft: '10px' }}>Facebook</a>
          </p>
        </footer>
      </body>
    </html>
  );
}