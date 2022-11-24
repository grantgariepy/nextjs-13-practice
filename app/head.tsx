import head from 'next/head';

export default function Head() {
  return (
    <>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <title>GG Crypto Info</title>
        <meta
          name='description'
          content='Build with Next.js 13, Vercel, TypeScript, TailwindCSS, Chart.js'
        />
        <meta
          name='author'
          content='Grant Gariepy'
        />
      </head>
    </>
  );
}
