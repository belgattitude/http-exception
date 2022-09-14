import type { HttpException } from '@belgattitude/http-exception';
import {
  HttpNotFound,
  HttpRequestTimeout,
  serializeHttpException,
} from '@belgattitude/http-exception';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type ApiData =
  | {
      success: true;
      data: {
        id: string;
      };
    }
  | {
      success: false;
      error: string;
    };

type Props = {
  apiData: ApiData;
};

export default function MonitorSentrySsrRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { apiData } = props;
  return (
    <div>
      <h1>Unexpected error</h1>
      <p>{JSON.stringify(apiData)}</p>
    </div>
  );
}

const fetchApiDataAlwaysRequestTimeout = async (): Promise<
  Props['apiData']
> => {
  throw new HttpRequestTimeout({
    message: 'Fake request timeout',
    url: 'http://localhost:3001',
  });
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  _context
) => {
  let apiData: ApiData;
  try {
    apiData = await fetchApiDataAlwaysRequestTimeout();
  } catch (e) {
    if (e instanceof HttpNotFound) {
      return {
        notFound: true,
      };
    }
    const serialized = JSON.stringify(
      serializeHttpException(e as unknown as HttpException)
    );
    apiData = {
      success: false,
      error: serialized,
    };
  }
  return {
    props: {
      apiData,
    },
  };
};
