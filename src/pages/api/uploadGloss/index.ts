import parseFile from "src/server/helpers/parseFile";
import type { NextApiRequest, NextApiResponse } from "next";
import { checkAuthorized } from "src/server/middleware/index";

const handleUploadFile = async (req: NextApiRequest, res: NextApiResponse) => {

  const result: any = await parseFile(req);
  console.log("first", result);

  return res.status(200).json({ msg: "123" });
};

export default checkAuthorized(handleUploadFile);

export const config = {
  api: {
    bodyParser: false,
  },
};
