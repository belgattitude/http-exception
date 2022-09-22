import {
  createHttpException,
  HttpBadRequest,
  isHttpErrorStatusCode,
} from '@belgattitude/http-exception';
import { toJson } from '@belgattitude/http-exception/serializer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { statusCode = null } = req.query;

  const status =
    typeof statusCode === 'string'
      ? Number.parseInt(statusCode, 10)
      : HttpBadRequest.STATUS;

  if (isHttpErrorStatusCode(status)) {
    const e = createHttpException(status);
    res.status(status).json({
      success: false,
      error: toJson(e),
    });
  }

  res.status(status).json({
    success: true,
    data: {
      message: `All good: ${status} is not an http status error code`,
    },
  });
}
