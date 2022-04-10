import { NextApiRequest, NextApiResponse } from "next";
import cors, { CorsOptions, CorsOptionsDelegate } from "cors";

function initMiddleware(middleware: typeof cors) {
  const func = (
    req: NextApiRequest,
    res: NextApiResponse,
    options?: CorsOptions | CorsOptionsDelegate
  ) =>
    new Promise((resolve, reject) => {
      middleware(options)(req, res, (result: Error | unknown) => {
        if (result instanceof Error) {
          return reject(result);
        }

        return resolve(result);
      });
    });

  return func;
}

const customCors = initMiddleware(cors);

// await customCors(req, res, corsOptions);

export default customCors;
