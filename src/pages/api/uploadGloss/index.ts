import type { NextApiRequest, NextApiResponse } from "next";
import { checkAuthorized } from "src/server/middleware/index";

const handleUploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ msg: "123" });
};

export default checkAuthorized(handleUploadFile);
