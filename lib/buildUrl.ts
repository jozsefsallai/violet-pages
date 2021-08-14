const buildUrl = (path: string = ''): string => {
  const pathWithSlash = path.startsWith('/') ? path : `/${path}`;

  const baseUrl = typeof window !== 'undefined'
    ? `${window.location.protocol}//${window.location.host}`
    : process.env.NEXT_PUBLIC_CANONICAL_URL;

  return `${baseUrl}${pathWithSlash}`;
};

export default buildUrl;
