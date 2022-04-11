import { NextApiRequest, NextApiResponse } from "next";

const handleUploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiKey = process.env.API_ROUTE_SECRET;

  if (req.query.API_ROUTE_SECRET !== apiKey) {
    return res.status(404).json({ message: "not authorized" });
  }

  return res.status(200).json({ msg: "123" });
};

export default handleUploadFile;
