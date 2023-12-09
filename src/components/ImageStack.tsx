import samuel from "../assets/images/samuel.jpg";
import vazh from "../assets/images/vazhnik.jpg";
import zemu from "../assets/images/zemu.jpg";
import gitz from "../assets/images/gitz.jpg";
const images = [samuel, zemu, vazh, gitz];

const ImageStack = () => {
  return (
    <div className="relative">
      {images.map((image, index) => (
        <img
          src={image}
          alt=""
          className={`absolute inline-block rounded-full w-20 h-20 top-[${index * 4}] left-[${
            index * 4
          }] z-[${index * 10}]`}
          key={index}
        />
      ))}
    </div>
  );
};

export default ImageStack;
