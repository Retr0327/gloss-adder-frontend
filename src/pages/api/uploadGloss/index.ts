import fs from "fs";
import { UPLOAD_DIR } from "src/constants/constants";
import parseFile from "src/server/helpers/parseFile";
import type { NextApiRequest, NextApiResponse } from "next";
import { checkAuthorized } from "src/server/middleware/index";

const handleUploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR);
  }

  const result = await parseFile(req);
  console.log("first", result);

  return res.status(200).json({ msg: "123" });
};

export default checkAuthorized(handleUploadFile);

export const config = {
  api: {
    bodyParser: false,
  },
};
