import Meta from '@/components/Meta';
import VioletPage, { DEFAULT_PASSAGES, VioletPageType } from '@/components/VioletPage';

const Violet1129 = () => (
  <>
    <Meta title="1129 - VIOLET" url="/1129" />

    <VioletPage
      type={VioletPageType.MONOLOGUE}
      code={1129}
      passage={DEFAULT_PASSAGES.TIMOTHY_6_7}
    />
  </>
);

export default Violet1129;
