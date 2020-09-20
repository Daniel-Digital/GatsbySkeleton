import axios from 'axios';

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Config = {
  url: string;
  data?: unknown;
};

async function apiCall(method: Methods, { url, data }: Config) {
  const response = await axios({
    method,
    url: `${process.env.API_URL || 'http://localhost:1337'}${url}`,
    data,
  });

  return response.data;
}

export default class HttpFetch {
  static get = apiCall.bind(null, 'GET');
  static put = apiCall.bind(null, 'PUT');
  static post = apiCall.bind(null, 'POST');
  static delete = apiCall.bind(null, 'DELETE');
}
