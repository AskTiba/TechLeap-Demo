import dave from "../assets/images/dave.jpg"
import ed from "../assets/images/ed.jpg"
import comp from "../assets/images/compsci.jpg"
const Hero = () => {
  const handleButtonClick = () => {
    // Add your button click logic here
  };
  return (
    <>
      <main className="mt-20">
        <section className="flex gap-20 items-center mx-20">
          <p className="w-1/2 text-[45px] font-bold">
            Unlock your potential <br /> with CodePlay: Learn, <br /> Grow,
            Succeed.
          </p>
          <div className="">
            <p className="text-[18px]">
              Fostering a vibrant community of learners <br /> where you can
              connect, collaborate.
            </p>
            <button
              className="text-white bg-[--primary-color] px-3 py-1 rounded-sm mt-5"
              onClick={handleButtonClick}
            >
              Get Started
            </button>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-3 mx-20 mt-10">
          <img className="rounded-md" src={ed} alt="" />
          <img className="rounded-md" src={comp} alt="" />
          <img className="rounded-md" src={dave} alt="" />
        </section>
        <section className="flex gap-10 justify-between mx-40 mt-10">
          <div className="flex flex-col gap-2">
            <p className="">
              <span className="mr-2 ml-[-2]">🚀</span>1.2K
            </p>
            <p className="">Enroll in 2023</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">
              <span className="mr-2">🗨️</span>1.2K
            </p>
            <p className="">Wonderful reviews</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">
              <span className="mr-2">📖</span>1.2K
            </p>
            <p className="">Active courses</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
