import customFetch from "./customFetch";

async function downloadFile(token: string | string[] | undefined) {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/download/${token}`;
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
