import '../styles/globals.css'
import Crypto from './Crypto'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html >
      <head>
        <title>Grant's Website</title>
      </head>
      <body>
        <Header />
        <main className='flex'>
          <div>
            {/* @ts-ignore */}
            <Crypto />
          </div>
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}
