import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import TrustMarkers from '@/components/TrustMarkers';
import MediaCoverage from '@/components/MediaCoverage';
import Services from '@/components/Services';
import ReasonToChoose from '@/components/ReasonToChoose';
import Reviews from '@/components/Reviews';
import Overview from '@/components/Overview';
import Team from '@/components/Team';

export default function Home() {
  return (
    <div className='container mx-auto pb-8 px-4'>
      <Navbar />
      <main className='grid grid-cols-12 gap-4'>
        <section className='col-span-12'>
          <div className='w-full h-[450px] bg-gray-100'>
            <HeroSection />
          </div>
        </section>
        <TrustMarkers className='col-span-12' />
        <MediaCoverage className='col-span-12 mt-20' />
        <Services className='col-span-12 mt-20' />
        <ReasonToChoose className='col-span-12 mt-20' />
        <Reviews className='col-span-12 mt-20' />
        <Overview className='col-span-12 mt-20' />
        <Team className='col-span-12 mt-20' />
      </main>
    </div>
  );
}
