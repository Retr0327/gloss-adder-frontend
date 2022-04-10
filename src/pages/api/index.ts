import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  status: string;
  ip: string | string[] | undefined;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  return res.status(200).json({ status: "success", ip });
};

export default handler;
