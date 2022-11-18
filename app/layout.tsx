import '../styles/globals.css'
import Crypto from './Crypto'
import Navbar from './Navbar'
import Footer from './Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="en" className='scroll-smooth '>
      <head />
        
      <body className=''>
          <div className='' >
            <div className="drawer ">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content ">
              <Navbar />
                <div className=''>
                  {children}
                </div>
              <Footer />
              </div>
              <div className="drawer-side">
                {/* <!-- Sidebar content here --> */}
                <label htmlFor="my-drawer" className="drawer-overlay overflow-y-hidden"></label>
                <ul className="menu bg-base-100 w-56 p-2">
                    {/* @ts-ignore */}
                    <Crypto />
                  {/* @ts-ignore */}
                  {/* <Search /> */}
                  </ul>
              </div> 
            </div>
          </div> 
      </body>
    </html>
  )
}
