import VioletPage, { DEFAULT_PASSAGES, VioletPageType } from '@/components/VioletPage';

import illustration from '@/assets/illustrations/913.png';
import Meta from '@/components/Meta';

const Violet913 = () => (
  <>
    <Meta title="913 - VIOLET" url="/913" />

    <VioletPage
      type={VioletPageType.MONOLOGUE}
      code={913}
      passage={DEFAULT_PASSAGES.MATTHEW_11_28}
      illustration={illustration.src}
      illustrationPosition="left"
    />
  </>
);

export default Violet913;
