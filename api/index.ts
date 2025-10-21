// api/index.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="🚀 Tap Game" />
        <meta property="og:image" content="https://your-app.vercel.app/thumbnail.png" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:button:1" content="Play ▶️" />
        <meta name="fc:frame:post_url" content="https://your-app.vercel.app/api/play" />
      </head>
      <body>
        <h1>Tap Game Frame</h1>
      </body>
    </html>
  `);
}
