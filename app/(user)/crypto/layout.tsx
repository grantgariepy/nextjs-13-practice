import Crypto from "./Crypto"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex">
      <div >
        {/* @ts-ignore */}
        <Crypto />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  )
}