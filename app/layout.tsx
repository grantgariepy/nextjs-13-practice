import '../styles/globals.css';
import Crypto from './components/Crypto';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en-us'>
      <head />
      <body>
        <div className='drawer'>
          <input
            id='my-drawer'
            type='checkbox'
            className='drawer-toggle'
          />
          <div className='drawer-content'>
            <Navbar />

            <section>
              <div>{children}</div>
            </section>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 w-fit bg-base-100 text-base-content'>
              {/* @ts-ignore */}
              <Crypto />
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
