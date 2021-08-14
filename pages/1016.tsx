import VioletPage, { DEFAULT_PASSAGES, VioletPageType } from '@/components/VioletPage';

import illustration from '@/assets/illustrations/1016.png';
import Meta from '@/components/Meta';

const Violet1016 = () => (
  <>
    <Meta title="1016 - VIOLET" url="/1016" />

    <VioletPage
      type={VioletPageType.BELIEF}
      code={1016}
      passage={DEFAULT_PASSAGES.CORINTHIANS_13_13}
      illustration={illustration.src}
      illustrationPosition="right"
    />
  </>
);

export default Violet1016;
