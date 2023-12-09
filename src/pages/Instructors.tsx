import ImageStack from "../components/ImageStack";
import samuel from "../assets/images/samuel.jpg";
import vazh from "../assets/images/vazhnik.jpg";
import zemu from "../assets/images/zemu.jpg";
import gitz from "../assets/images/gitz.jpg";
import PortraitRow from "../components/PortraitRow";
const images = [samuel, zemu, vazh, gitz];

const Instructors = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Portrait Row Component</h1>
        <PortraitRow images={images} width={0} height={0} gap={2} />
      </div>
      <div className="">
        <ImageStack />
      </div>
    </>
  );
};

export default Instructors;
