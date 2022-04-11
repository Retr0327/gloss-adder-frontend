import React from "react";
import axios, { AxiosRequestConfig } from "axios";

async function uploadGlossFile(
  credentials: FormData,
  setUploadPercentage: React.Dispatch<React.SetStateAction<number>>
) {
  try {
    const config: AxiosRequestConfig = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        setUploadPercentage(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
      },
    };

    const url = `api/uploadGloss?API_ROUTE_SECRET=${process.env.NEXT_PUBLIC_API_ROUTE_SECRET}`;

    const result = await axios.post(url, credentials, config);

    return [result, null];
  } catch (error) {
    console.error("uploadGlossFile:", error);
    return [null, error];
  }
}

export default uploadGlossFile;
