
import React from 'react';
import cn from "classnames";

const imageList = [
  '/images/RainbowDayCareHeroSectionImage1.jpg',
  '/images/RainbowDayCareHeroSectionImage3.jpg',
  '/images/RainbowDayCareHeroSectionImage2.jpg',
  '/images/RainbowDayCareHeroSectionImage4.jpg'
]


const HeroImage = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* left column images */}
      <div className=" col-span-2 flex flex-col items-end gap-2 max-h-[28rem]">
        <div className="aspect-[310/230] grow h-[55%]" >
          <img src='/images/RainbowDayCareHeroSectionImage1.jpg' className="h-full object-contain rounded-md" />
        </div>
        <div className="aspect-[210/132] grow self-end flex justify-end w-3/5">
          <img src='/images/RainbowDayCareHeroSectionImage3.jpg' className="h-full object-scale-contain rounded-md" />
        </div>
      </div>

      {/* right column images */}
      <div className="flex flex-col col-span-1 gap-2">
        <div className="aspect-[310/230] h-[45%]" >
          <img src='/images/RainbowDayCareHeroSectionImage2.jpg' className="h-full object-contain rounded-md" />
        </div>
        <div className="aspect-[210/132] grow self-end flex justify-end max-w-[100%]">
          <img src='/images/RainbowDayCareHeroSectionImage4.jpg' className="h-full object-contain rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
