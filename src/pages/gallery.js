import Activity from '@/components/Activity';
import Amenities from '@/components/Amenities';
import HappyMembers from '@/components/HappyMembers';
import Navbar from '@/components/Navbar';

const TITLE = 'Life at Rainbow';

const Gallery = () => {
  return (
    <div className='flex flex-col pb-8 px-4'>
      <Navbar />
      <main className='flex flex-col'>
        <div className='text-center mt-10'>
          <h1>{TITLE}</h1>
        </div>
        <Amenities className='md:container md:mx-auto col-span-12 mx-[16px] mt-20' />
        <Activity className='md:container md:mx-auto col-span-12 mx-[16px] mt-20' />
        <HappyMembers className='md:container md:mx-auto col-span-12 mx-[16px] mt-20' />
      </main>
    </div>
  );
};

export default Gallery;
