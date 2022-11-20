import head from 'next/head';

export default function Head() {
  return (
    <>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <title>Grant's Website</title>
        <meta
          name='description'
          content='Practicing NextJS 13'
        />
      </head>
    </>
  );
}
