import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const taps = searchParams.get('taps') || 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'black',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 80,
        }}
      >
        👆 You've tapped {taps} times!
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
