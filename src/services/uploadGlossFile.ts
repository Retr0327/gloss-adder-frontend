import React from "react";
import { API } from "src/constants";
import axios, { AxiosRequestConfig } from "axios";

async function uploadGlossFile(
  credentials: FormData,
  setUploadPercentage: React.Dispatch<React.SetStateAction<number>>
): Promise<any[]> {
  try {
    const config: AxiosRequestConfig = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        setUploadPercentage(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
      },
    };

    const url = `${API}/uploadGloss`;

    const result = await axios.post(url, credentials, config);

    return [result, null];
  } catch (error) {
    console.error("uploadGlossFile:", error);
    return [null, error];
  }
}

export default uploadGlossFile;
