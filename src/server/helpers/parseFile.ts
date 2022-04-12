import type { NextApiRequest } from "next";
import formidable, { Options, Fields, Files } from "formidable";
import fs from "fs";

interface ParseFile {
  fields: Fields;
  files: Files;
}

const formOptions: Options = {
  keepExtensions: true,
  encoding: "utf-8",
  maxFieldsSize: 3 * 1024 ** 2,
  uploadDir: "",
  multiples: true,
};

const parseFile = (req: NextApiRequest): Promise<ParseFile> => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm(formOptions);

    form.on("fileBegin", (name, file) => {
      file.filepath = __dirname + file.originalFilename;
      console.log(file);
      fs.createReadStream(file.filepath)
        .pipe(fs.createWriteStream(__dirname + file.originalFilename))
        .on("finish", () => {
          fs.unlink(file.filepath, () => {
            return "d";
          });
        });
    });

    form.parse(req, (error, fields, files) => {
      if (error) {
        return reject(error);
      }
      return resolve({ fields, files });
    });
  });
};

export default parseFile;
