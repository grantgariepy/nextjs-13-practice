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
        <main >
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* <!-- Page content here --> */}
              {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
              <div className="flex-1">{children}</div>
            </div> 
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                {/* @ts-ignore */}
                <Crypto />
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
