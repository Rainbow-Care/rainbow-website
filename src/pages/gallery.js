import Activity from '@/components/Activity';
import Amenities from '@/components/Amenities';
import HappyMembers from '@/components/HappyMembers';
import Navbar from '@/components/Navbar';

const TITLE = 'Life at Rainbow';

const Gallery = () => {
  return (
    <div className='container mx-auto pb-8 px-4'>
      <Navbar />
      <main className='grid grid-cols-12'>
        <div className='col-span-12 justify-self-center mt-20'>
          <h1>{TITLE}</h1>
        </div>
        <Amenities className='col-span-12 mt-20' />
        <Activity className='col-span-12 mt-20' />
        <HappyMembers className='col-span-12 mt-20' />
      </main>
    </div>
  );
};

export default Gallery;
