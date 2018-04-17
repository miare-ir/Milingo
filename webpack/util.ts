export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};

export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const isTesting = (): boolean => {
  return process.env.NODE_ENV === 'testing';
};

export const getGoogleMapsKey = (): string  => {
  return (
    process.env.GOOGLE_MAPS_KEY || '\'AIzaSyB0iEZsO13IGlvb9SeQiZkFbEEfs4BqoCE\''
  );
};

const getUrl = (type: string): string => {
  const mockServerPort = parseInt(process.env.MOCK_SERVER_PORT, 10);
  if (type !== 'websocket' && !!mockServerPort) {
    return `'http://localhost:${mockServerPort}/${type}'`;
  }

  const hosts = {
    go: process.env.API_HOST || 'localhost:8456',
    websocket: process.env.WEBSOCKET_HOST || 'localhost:8456',
    django: process.env.DJANGO_HOST || 'localhost:8000',
  };

  const safe = process.env.API_SAFE === 'true';
  const proto = safe ?
    (type === 'websocket' ? 'wss://' : 'https://') :
    (type === 'websocket' ? 'ws://' : 'http://');

  return `'${proto}${hosts[type]}'`;
};

export const getWebSocketUrl = (): string => getUrl('websocket');

export const getDjangoUrl = (): string => getUrl('django');

export const getApiUrl = (): string => getUrl('go');

export const getEntries = (): string[] => {
  const entries = process.env.ENTRIES;
  return entries ? entries.split(',') : [];
};
