import Meta from '@/components/Meta';
import VioletPage, { DEFAULT_PASSAGES, VioletPageType } from '@/components/VioletPage';

const Violet520 = () => (
  <>
    <Meta title="520 - VIOLET" url="/520" />

    <VioletPage
      type={VioletPageType.MONOLOGUE}
      code={520}
      omitDot
      passage={DEFAULT_PASSAGES.JOB_23_10}
    />
  </>
);

export default Violet520;
