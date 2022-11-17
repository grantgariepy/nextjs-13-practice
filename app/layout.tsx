

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
      <body>
        <Header />
        <main >
          <div className="drawer ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* <!-- Page content here --> */}
              {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
              <div className="">{children}</div>
            </div> 
            <div className="drawer-side">
                {/* <!-- Sidebar content here --> */}
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu bg-base-100 w-56 p-2">
                

                  {/* @ts-ignore */}
                  <Crypto/>
                
                
                {/* @ts-ignore */}
                {/* <Search /> */}
                
              </ul>
            </div>
          </div>
          <div>
            
            
          </div>
        </main>
      </body>
    </html>
  )
}
