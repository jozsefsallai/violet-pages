export enum VioletPageType {
  MONOLOGUE,
  BELIEF
};

export interface CustomVioletPageType {
  en: string;
  jp: string;
};

const DEFAULT_PAGE_TYPES: CustomVioletPageType[] = [
  {
    en: 'a monologue.',
    jp: '独白'
  },
  {
    en: 'Belief.',
    jp: '信心'
  }
];

export const DEFAULT_PASSAGES = Object.freeze({
  PROVERBS_10_12: 'Hatred stirs up dissension, but love covers over all wrongs.',
  JOB_23_10: 'But he knows the way I take, when he has tested me, I will come forth as gold.',
  MATTHEW_11_28: 'Come to me, all  you who are weary and burdened, and I will give you rest.',
  CORINTHIANS_13_13: 'And now these three remain: faith, hope and love.But the greatest of these is love.',
  TIMOTHY_6_7: 'For we brought nothing into the world, and we can take nothing out of it.'
});

export interface VioletPageProps {
  type: VioletPageType | CustomVioletPageType;
  code: number;
  omitDot?: boolean;
  passage: string;
  illustration?: string;
  illustrationPosition?: 'left' | 'right';
};

const VioletPage = ({ type, code, omitDot, passage, illustration, illustrationPosition }: VioletPageProps) => {
  const finalType = type === VioletPageType.MONOLOGUE || type === VioletPageType.BELIEF
    ? DEFAULT_PAGE_TYPES[type]
    : type;

  const finalCode = omitDot ? `${code}` : `${code}.`;

  const styles = illustration
    ? {
      backgroundImage: `url(${illustration})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPositionX: illustrationPosition
    }
    : {};

  return (
    <div className="h-screen bg-black-faint flex flex-col justify-between items-center text-center p-10" style={styles}>
      <div className="text-white-leading tracking-[0.2em] text-2xl">
        <div className="mb-2">{finalType.jp}</div>
        <div>{finalType.en}</div>
      </div>

      <div className="text-white-faint text-8xl font-serif-alt shake">
        {finalCode}
      </div>

      <div className="text-white-trailing text-xl tracking-[0.3em] whitespace-pre-wrap">
        {passage}
      </div>
    </div>
  );
};

export default VioletPage;
