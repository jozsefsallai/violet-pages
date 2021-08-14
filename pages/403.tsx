import Meta from '@/components/Meta';
import VioletPage, { DEFAULT_PASSAGES, VioletPageType } from '@/components/VioletPage';

const Violet403 = () => (
  <>
    <Meta title="403 - VIOLET" url="/403" />

    <VioletPage
      type={VioletPageType.MONOLOGUE}
      code={403}
      passage={DEFAULT_PASSAGES.PROVERBS_10_12}
    />
  </>
);

export default Violet403;
