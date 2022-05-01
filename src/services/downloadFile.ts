import { API } from "src/constants";
import customFetch from "./customFetch";

async function downloadFile(token: string | string[] | undefined) {
  const url = `${API}/download/${token}`;
  try {
    const result = await customFetch({
      method: "GET",
      url,
      purpose: "download",
    });
    return [result, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
}

export default downloadFile;
