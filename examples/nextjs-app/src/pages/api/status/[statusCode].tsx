import {
  createHttpException,
  HttpBadRequest,
  isHttpErrorStatusCode,
} from '@belgattitude/http-exception';
import { toJson } from '@belgattitude/http-exception/serializer';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ZodTypeAny } from 'zod';
import { z } from 'zod';

export const statusCode = (schema: ZodTypeAny) =>
  z.preprocess(
    (a) => (typeof a === 'string' ? parseInt(a, 10) : undefined),
    schema
  );

const reqSchema = z.object({
  query: z.object({
    statusCode: statusCode(z.number().min(100).max(599)),
  }),
});

export default function statusCodehandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const parsed = reqSchema.safeParse(req, {});
  const status = parsed.success
    ? parsed.data.query.statusCode
    : HttpBadRequest.STATUS;

  if (isHttpErrorStatusCode(status)) {
    const e = createHttpException(status, {
      url: req.headers['host'],
    });
    res.status(status).json({
      success: false,
      error: {
        status: e.statusCode,
        name: e.name,
        message: e.message,
        url: e.url,
        serialized: JSON.parse(toJson(e)),
      },
    });
    return;
  }

  res.status(status).json({
    success: true,
    data: {
      message: `All good: ${status} is not an http status error code`,
    },
  });
}
