import Button from "./Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div class="grid grid-flow-col w-full">
      <div class="flex flex-col w-2/5">
        <div>
          <h1 class="font-bold text-lg">
            A place that makes our silver citizens happy
          </h1>
          <p>
            Rainbow Daycare is a safe space designed for your elderly parents
            and wards to unwind, socialize and learn with their peers
          </p>
        </div>
        <div class="flex h-fit flex-row justify-between">
          <Button
            props={{
              text: "Schedule an appointment",
              textColorPrimary: false,
              backgroundPrimary: true,
            }}
          />
          <Button
            props={{
              text: "Learn More",
              textColorPrimary: true,
              backgroundPrimary: false,
            }}
          />
        </div>
      </div>
      <div class="grid w-3/5">
        <div class="grid grid-cols-2 w-fit">
          <Image
            src="/images/RainbowDayCareHeroSectionImage1.svg"
            width={291}
            height={212}
            alt="Logo of Rainbow Day Care"
          ></Image>
          <Image
            src="/images/RainbowDayCareHeroSectionImage2.svg"
            width={108}
            height={144}
            alt="Logo of Rainbow Day Care"
          ></Image>
          <Image
            src="/images/RainbowDayCareHeroSectionImage3.svg"
            width={203}
            height={132}
            alt="Logo of Rainbow Day Care"
          ></Image>
          <Image
            src="/images/RainbowDayCareHeroSectionImage4.svg"
            width={175}
            height={202}
            alt="Logo of Rainbow Day Care"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
