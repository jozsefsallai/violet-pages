import buildUrl from '@/lib/buildUrl';
import Head from 'next/head';

export interface IMetaProps {
  title: string;
  description?: string;
  image?: string;
  url: string;
};

const Meta = ({ title, description, url }: IMetaProps) => {
  url = buildUrl(url);
  description = description || 'Flash cards from the MV of VIOLET by Ninomae Ina\'nis.';

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
    </Head>
  );
};

export default Meta;
