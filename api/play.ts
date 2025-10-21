// api/play.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const userFid = req.body?.untrustedData?.fid;
  console.log("User FID:", userFid);

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Tap to Earn Tokens" />
        <meta property="og:image" content="https://your-app.vercel.app/game-image.png" />
        <meta name="fc:frame:button:1" content="Try Again 🔁" />
        <meta name="fc:frame:post_url" content="https://your-app.vercel.app/api/play" />
      </head>
      <body>
        <p>You earned X tokens!</p>
      </body>
    </html>
  `);
}
