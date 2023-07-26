import { API_URL } from '@lib/const';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req)
    if (req.method === 'POST') {
    try {
      const data = req.body;
      const apiUrl = API_URL ?? "";  
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: req.body,
      });

      const responseData = await response.json();

      res.status(200).json(responseData);
    } catch (error) {
      console.error('Error forwarding request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Sadece POST isteklerine izin veriyoruz, diğer istekleri reddediyoruz
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
