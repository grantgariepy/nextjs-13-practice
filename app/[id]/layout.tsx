
import Crypto from '../Crypto'
import Navbar from '../Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <div>
      {children}
    </div>
    
  )
}
