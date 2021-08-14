import Meta from '@/components/Meta';
import Link from 'next/link';

const IndexPage = () => {
  const codes = [ 403, 520, 913, 1016, 1129 ];

  return (
    <>
      <Meta title="VIOLET" url="/" />

      <div className="bg-black-faint h-screen">
        <div className="pt-32 pl-28 flex flex-col sm:flex-row gap-8">
          {codes.map(code => (
            <Link href={`/${code}`} key={code}>
              <a className="text-5xl text-white-faint border-b-2">{code}</a>
            </Link>
          ))}
        </div>

        <div className="mt-24 pl-28 text-white-faint tracking-widest">
          <div>
            <a href="https://inanis.streamlink.to/VIOLET" target="_blank" rel="noopener noreferrer">
              VIOLET
            </a> by Ninomae Ina'nis
          </div>

          <div>
            Illustration by <a href="https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg" target="_blank" rel="noopener noreferrer">Ninomae Ina'nis</a>
          </div>

          <div>
            Font: <a href="https://www.fontsquirrel.com/fonts/butler" target="_blank" rel="noopener noreferrer">Butler</a>
          </div>

          <div className="mt-10 text-white-trailing">
            fecel, lemienne, phei, seire, lilutia, ei finceq
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
