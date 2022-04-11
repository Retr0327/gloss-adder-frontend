import axios from "axios";

async function uploadGlossFile(credentials: any) {
  try {
    const result = await axios.post("/api/uploadGloss", credentials, {
      headers: { "content-type": "multipart/form-data" },
    });

    return [result, null];
  } catch (error) {
    console.error("uploadGlossFile:", error);
    return [null, error];
  }
}

export default uploadGlossFile;
