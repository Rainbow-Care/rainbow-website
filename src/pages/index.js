import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import TrustMarkers from '@/components/TrustMarkers';
import MediaCoverage from '@/components/MediaCoverage';
import Services from '@/components/Services';
import ReasonToChoose from '@/components/ReasonToChoose';
import Reviews from '@/components/Reviews';
import Overview from '@/components/Overview';
import Team from '@/components/Team';
import Questions from '@/components/Questions';
import Contact from '@/components/Contact';
import Questions from '@/components/Questions';

export default function Home() {
  return (
    <div className='mx-auto pb-8 px-4'>
      <Navbar />
      <main>
        <HeroSection />
        <TrustMarkers className='' />
        <MediaCoverage className='mt-20' />
        <Services className='col-span-12 mt-20' />
        <ReasonToChoose className='col-span-12 mt-20' />
        <Reviews className='col-span-12 mt-20' />
        <Overview className='col-span-12 mt-20' />
        <Team className='col-span-12 mt-20' />
        <Questions className='col-span-12 mt-20' />
        <Contact className='col-span-12 mt-20' />
      </main>
    </div>
  );
}
