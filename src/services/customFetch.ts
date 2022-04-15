import { CustomFetchType } from "types";

async function customFetch({
  method,
  url,
  credentials,
  purpose,
}: CustomFetchType): Promise<any | Blob> {
  const _credentials = credentials ?? {};
  const _method = method.toUpperCase();

  const resp = await fetch(url, {
    credentials: "include",
    method: _method,
    body: _method !== "GET" ? JSON.stringify(_credentials) : null,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  switch (purpose) {
    case "download":
      const body = resp.clone().json();
      return [body, resp.blob()];
    default:
      return resp.json();
  }
}

export default customFetch;
