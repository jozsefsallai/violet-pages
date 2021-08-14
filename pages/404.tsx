import Meta from '@/components/Meta';
import VioletPage from '@/components/VioletPage';

const Violet404 = () => (
  <>
    <Meta title="404 - VIOLET" url="/" />

    <VioletPage
      type={{
        jp: '未検出',
        en: 'not found.'
      }}
      code={404}
      passage="The requested page could not be found. Please try again later."
    />
  </>
);

export default Violet404;
