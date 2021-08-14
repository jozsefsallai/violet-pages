import Meta from '@/components/Meta';
import VioletPage from '@/components/VioletPage';

const Violet137 = () => (
  <>
    <Meta title="137 - VIOLET" url="/137" />

    <VioletPage
      type={{
        jp: '黙示録',
        en: 'revelation.'
      }}
      code={137}
      omitDot
      passage="Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away."
    />
  </>
);

export default Violet137;
