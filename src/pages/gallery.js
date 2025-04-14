import Activity from '@/components/Activity';
import Amenities from '@/components/Amenities';
import HappyMembers from '@/components/HappyMembers';
import Navbar from '@/components/Navbar';

const TITLE = 'Life at Rainbow';

const Gallery = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <main className='flex flex-col'>
        <div className='text-center mt-20'>
          <h1>{TITLE}</h1>
        </div>
        <Amenities className='col-span-12 mx-[16px] mt-20' />
        <Activity className='col-span-12 mx-[16px] mt-20' />
        <HappyMembers className='col-span-12 mx-[16px] mt-20' />
      </main>
    </div>
  );
};

export default Gallery;
