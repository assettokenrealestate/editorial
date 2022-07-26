import { NextApiRequest, NextApiResponse } from "next";
import { create } from "ipfs-core";

export default async function store(req: NextApiRequest, res: NextApiResponse) {
  const node = await create({repo: 'ok' + Math.random()});
  const metadata = node.cat(
    "bafkreialalpon3l3t5pmgm7wy4icfswigwq4qwssjc5cmwbnk3bv3dqjqa"
  );
  const decoder = new TextDecoder();
  let data = "";

  for await (const chunk of metadata) {
    data += decoder.decode(chunk, { stream: true });
  }
  res.status(200).json(data);
}
