import Activity from '@/components/Activity';
import Amenities from '@/components/Amenities';
import HappyMembers from '@/components/HappyMembers';

export const metadata = {
  title: 'Life at Rainbow | Gallery',
  description:
    'Browse photos of activities, amenities, and happy members at Rainbow Day Care Centre in Pune.',
  alternates: {
    canonical: 'https://rainbowdaycarecentre.org/gallery',
  },
  openGraph: {
    title: 'Life at Rainbow | Gallery — Rainbow Day Care Centre',
    description:
      'Browse photos of activities, amenities, and happy members at Rainbow Day Care Centre in Pune.',
    url: 'https://rainbowdaycarecentre.org/gallery',
  },
};

export default function Gallery() {
  return (
    <div className='flex flex-col pb-8 px-4'>
      <main className='flex flex-col'>
        <div className='text-center mt-10'>
          <h1>Life at Rainbow</h1>
        </div>
        <Amenities className='md:container md:mx-auto col-span-12 mx-[16px] mt-20' />
        <Activity className='md:container md:mx-auto col-span-12 mx-[16px] mt-20' />
        <HappyMembers className='md:container md:mx-auto col-span-12 mx-[16px] mt-20' />
      </main>
    </div>
  );
}
