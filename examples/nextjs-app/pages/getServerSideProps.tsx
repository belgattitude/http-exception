import type { HttpException } from '@belgattitude/http-exception';
import {
  HttpNotFound,
  HttpRequestTimeout,
  serializeHttpException,
  unserializeHttpException,
} from '@belgattitude/http-exception';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Scenarios } from '../components/Scenarios';

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
  const error: Error | null = apiData.success
    ? null
    : unserializeHttpException(apiData.error);
  console.log('apiData', apiData);
  return (
    <div>
      <h1>Should display the error below</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <div>{JSON.stringify(apiData)}</div>
      <Scenarios />
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
    apiData = {
      success: false,
      error: serializeHttpException(e as HttpException),
    };
  }
  return {
    props: {
      apiData,
    },
  };
};
