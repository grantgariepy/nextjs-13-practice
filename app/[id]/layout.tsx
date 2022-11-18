
import Crypto from '../Crypto'
import Navbar from '../Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    
    <body className=''>
              <div className='max-h-screen'>
          <div className='min-h-min' id='homePage'>
            <div className="drawer ">

              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content ">
              <Navbar />
                <div>
                  {children}
                </div>
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
              </div>
      </body>
    
  )
}