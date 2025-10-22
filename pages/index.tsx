import Head from 'next/head';

export async function getServerSideProps() {
  return {
    props: {
      taps: 0, // default tap count
    },
  };
}

export default function Home({ taps }: { taps: number }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Farcaster Tap to Earn" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`https://fartap.vercel.app/api/og?taps=${taps}`} />
        <meta property="fc:frame:button:1" content="👆 Tap to Earn" />
        <meta property="fc:frame:post_url" content="https://fartap.vercel.app/api/frame" />
      </Head>
      <main>
        <h1>Tap Frame</h1>
        <p>Visible only in Warpcast.</p>
      </main>
    </>
  );
}
