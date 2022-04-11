import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const apiKey = process.env.API_ROUTE_SECRET;

const checkAuthorized = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.query.API_ROUTE_SECRET !== apiKey) {
      return res.status(404).json({ message: "not authorized" });
    }

    return handler(req, res);
  };
};

export default checkAuthorized;
