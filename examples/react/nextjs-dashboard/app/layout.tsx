import './ui/global.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div>
        <ul>

          <li><Link href="/">Home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/settings">Settings</Link></li>
          <li><Link href="/profile">Profile</Link></li>

        </ul>
      </div>
      <body>{children}</body>
    </html>
  );
}
