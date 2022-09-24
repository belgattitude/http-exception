import type { IncomingMessage } from 'node:http';
import type { HttpException } from '@belgattitude/http-exception';
import { isHttpException } from '@belgattitude/http-exception';
import { toJson } from '@belgattitude/http-exception/serializer';
import type { NextApiRequest, NextApiResponse } from 'next';

const logHttpException = (e: HttpException, req: IncomingMessage): void => {
  if (e.statusCode !== 404) {
    // Could be pino, sentry...
    console.log(`Exception: ${e.name}`, req.headers['host'], toJson(e));
  }
};

export const withErrorHandler =
  (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>
  (req: NextApiRequest, res: NextApiResponse) => {
    try {
      handler(req, res);
    } catch (e) {
      if (isHttpException(e)) {
        // Call the logger
        logHttpException(e, req);
        res.status(e.statusCode).json({
          success: false,
          error: {
            // Choose what is useful to expose
            message: e.message,
          },
        });
      }
    }
  };
