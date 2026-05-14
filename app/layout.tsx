import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TimeBill AI — Stop Losing Billable Hours',
  description: 'AI-powered time tracking that detects when you forget to start or stop your timer. Never lose billable hours again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="089f912a-58f0-4b65-a7c7-391a1455b8c6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
