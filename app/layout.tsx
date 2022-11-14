import '../styles/globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='dark'>
      <head>
        <title>Grant's Website</title>
      </head>
      <body className='dark:bg-slate-700'>
        <Header />
        {children}
        </body>
    </html>
  )
}
