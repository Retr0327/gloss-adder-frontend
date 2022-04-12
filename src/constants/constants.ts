import path from "path";

const UPLOAD_DIR = path.resolve("src", "upload");
const getUploadFileDir = (name: string) => path.resolve(UPLOAD_DIR, name);

export { UPLOAD_DIR, getUploadFileDir };
