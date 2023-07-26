import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllProducts } from "@lib/product"
import { getConfig } from '@lib/api/config';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const config = getConfig()
  
  const {val,reverse} = JSON.parse(req.body);

  const result = await getAllProducts(config, val, reverse);
  console.log(result)
  res.status(200).json(result)
}
