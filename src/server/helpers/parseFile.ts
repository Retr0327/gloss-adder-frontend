import fs from "fs";
import type { NextApiRequest } from "next";
import { UPLOAD_DIR, getUploadFileDir } from "src/constants/constants";
import formidable, { Options, Fields, Files } from "formidable";

type FormDataType = {
  fileName: string | null;
  value: number[] | Buffer;
};

interface ParseFile {
  fields?: Fields;
  // files?: Files;
  status: boolean;
  // formData: FormDataType;
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

    let formData: FormDataType;

    form.on("file", (formname, file) => {
      const token = formname.match(/^\d*(?=\-)/g);

      const fileName = file.originalFilename;
      const buffer = fs.readFileSync(file.filepath);

      formData = {
        fileName: file.originalFilename,
        value: fs.readFileSync(file.filepath),
      };
      //   do cache here

      console.log("formname", formname);
      console.log("formData", formData);
      //  fs.createWriteStream(UPLOAD_DIR + "/" + file.originalFilename).write(buffer);

      fs.unlink(file.filepath, (error) => {
        console.log(error);
      });
    });

    form.parse(req, (error, fields, files) => {
      const hasNoFields = !Object.keys(fields);
      const hasNoFiles = !Object.keys(files);

      if (error || (hasNoFields && hasNoFiles)) {
        return reject(error);
      }

      return resolve({ status: true, fields });
    });
  });
};

export default parseFile;
