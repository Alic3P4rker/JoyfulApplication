import axios from 'axios';

type FailedRequest = {
  resolve: (value: string) => void;
  reject: (reason?: any) => void;
};

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

function processQueue(error: Error | null, token?: string) {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else if (token) {
      resolve(token);
    }
  });
  failedQueue = [];
}

export async function handleTokenRefresh(): Promise<string> {
  if (isRefreshing) {
    return new Promise<string>((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    });
  }

  isRefreshing = true;

  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');

  if (!refreshToken || !accessToken) {
    isRefreshing = false;
    processQueue(new Error('Missing tokens'));
    window.location.href = '/login';
    throw new Error('Missing tokens');
  }

  try {
    const response = await axios.post('http://localhost:5133/api/Token/refresh', {
      accessToken,
      refreshToken,
    });

    console.log(response);

    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;

    localStorage.setItem('accessToken', newAccessToken);
    localStorage.setItem('refreshToken', newRefreshToken);

    isRefreshing = false;
    processQueue(null, newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error('Token refresh failed:', error);
    isRefreshing = false;
    processQueue(error instanceof Error ? error : new Error('Unknown error'));
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
    throw error;
  }
}

export async function callAuthenticatedApi<T = any>(
  url: string,
  method: string = 'GET',
  data: object | null = null
): Promise<T> {
  let accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    window.location.href = '/login';
    throw new Error('Access token not found.');
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  let options: RequestInit = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    let response = await fetch(url, options);

    if (response.status === 401) {
      console.warn('Token expired. Refreshing...');
      accessToken = await handleTokenRefresh();
      headers['Authorization'] = `Bearer ${accessToken}`;
      response = await fetch(url, { ...options, headers });
    }

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message || 'API error');
    }

    return json;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}
