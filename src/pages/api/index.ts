import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  status: string;
  ip: string | string[] | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  return res.status(200).json({ status: "success", ip });
}
