import Meta from '@/components/Meta';
import VioletPage from '@/components/VioletPage';

const Violet500 = () => (
  <>
    <Meta title="500 - VIOLET" url="/" />

    <VioletPage
      type={{
        jp: 'サーバ内部エラー',
        en: 'internal server error.'
      }}
      code={500}
      passage="Something went wrong on the server-side. Please try again later."
    />
  </>
);

export default Violet500;
