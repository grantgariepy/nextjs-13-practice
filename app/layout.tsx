

import '../styles/globals.css'
import Coin from './Coin'
import Crypto from './Crypto'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{
  return (
    <html >
      <head>
        <title>Grant's Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className='overflow-y-auto sm:overflow-y-hidden'>
        <Header />
        <main className="">
          <div >{children}</div>
        </main>
      </body>
    </html>
  )
}
