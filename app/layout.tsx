import '../styles/globals.css';
import Crypto from './Crypto';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      {children}
    </div>
  );
}
