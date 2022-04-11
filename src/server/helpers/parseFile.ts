import type { NextApiRequest } from "next";
import formidable, { Options } from "formidable";

const formOptions: Options = {
  keepExtensions: true,
  encoding: "utf-8",
  maxFieldsSize: 3 * 1024 ** 2,
  uploadDir: "",
  multiples: true,
};

const parseFile = (req: NextApiRequest) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm(formOptions);

    form.parse(req, (error, fields, files) => {
      if (error) {
        return reject(error);
      }
      return resolve({ fields, files });
    });
  });
};

export default parseFile;
