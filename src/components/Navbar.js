import Image from "next/image";

const Navbar = () => {
  return (
    <div class="flex flex-row">
      <Image
        src="/images/RainbowDayCareLogo.svg"
        width={200}
        height={200}
        alt="Logo of Rainbow Day Care"
      ></Image>
      <div class="flex flex-row w-full">
        <div class="flex flex-row">
          <a>Home</a>
          <a>Testimonials</a>
          <a>Gallery</a>
          <a>Patient Portal</a>
          <a>About Us</a>
        </div>
        <button class="h-33 w-117" color="#1e85a2">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
