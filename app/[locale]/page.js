import dynamic from 'next/dynamic';
const Main = dynamic(() => import('@/components/Main/Main'));
const FAQ = dynamic(() => import('@/components/FAQ/FAQ'));
const Improveus = dynamic(() => import('@/components/Improveus/Improveus'), { ssr: false })


export default async function Home({ params: { locale } }) {

  return (
    <main>
      <Main />
      <Improveus />
      <FAQ />
    </main>
  );
}
