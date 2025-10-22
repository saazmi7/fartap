import type { NextApiRequest, NextApiResponse } from 'next';
import { getFrameMessage, isValidFrameMessage } from '@neynar/node';
import { incrementTap, getTaps } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const frame = await getFrameMessage(req.body);

  if (!(await isValidFrameMessage(frame))) {
    return res.status(401).send('Invalid Frame');
  }

  const fid = frame?.data?.fid;
  if (!fid) return res.status(400).send('Missing FID');

  await incrementTap(fid);
  const taps = await getTaps(fid);

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://fartap.vercel.app/api/og?taps=${taps}" />
        <meta property="fc:frame:button:1" content="🔥 Tap again" />
        <meta property="fc:frame:post_url" content="https://fartap.vercel.app/api/frame" />
      </head>
    </html>
  `);
}
