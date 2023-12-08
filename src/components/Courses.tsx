import CustomButton from "./Button";
import ImageStack from "./ImageStack";
import img1 from "../assets/images/image1.png"
import img2 from "../assets/images/image2.png"
import img3 from "../assets/images/image3.png"

const Courses = () => {
  const handleButtonClick = () => {
    // Add your button click logic here
  };
  return (
    <main className="mt-10 mx-20">
      <section className="flex flex-col justify-center items-center">
        <p className="text-[28px] mb-3">Our Courses</p>
        <p className="font-semibold text-[40px] text-center">
          Get Started Elevate <br /> your skills
        </p>
      </section>
      <section className="grid grid-cols-3 gap-5 justify-items my-10 mx-20">
        <div className="bg-white rounded-md p-4">
          <div className="flex">
            <span className=""><img className="w-[24px]" src={img1} alt="" /></span>
            <p className="">Hello</p>
            <ImageStack />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold my-2">Product Design</p>
            <p className="">
              Our platform fosters a vibrant <br /> community of learners where
              you can <br />
              connect, collaborate
            </p>
            <input className="my-4 accent-[#006C00]" type="range" />
            <p className="">50 spots left</p>
          </div>
          <button className="flex my-5">
            <p className="mr-2 text-[rgba(95,187,224,0.87)]">Enroll Now </p>
            <span className="">➡️</span>
          </button>
        </div>
        <div className="bg-white rounded-md p-4">
          <div className="flex ">
            <span className=""><img className="w-[24px]" src={img2} alt="" /></span>
            <p className="">Hello</p>
            <ImageStack />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold my-2">Front End Development</p>
            <p className="">
              Our platform fosters a vibrant <br /> community of learners where
              you can <br />
              connect, collaborate
            </p>
            <input className="my-4 accent-[#006C00]" type="range" />
            <p className="">50 spots left</p>
          </div>
          <button className="flex my-5">
            <p className="mr-2 text-[rgba(95,187,224,0.87)]">Enroll Now </p>
            <span className="">➡️</span>
          </button>
        </div>
        <div className="bg-white rounded-md p-4">
          <div className="flex">
            <span className=""><img className="w-[24px]" src={img3} alt="" /></span>
            <p className="">Hello</p>
            <ImageStack />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold my-2">Product Management</p>
            <p className="">
              Our platform fosters a vibrant <br /> community of learners where
              you can <br />
              connect, collaborate
            </p>
            <input className="my-4 accent-[#006C00]" type="range" />
            <p className="">50 spots left</p>
          </div>
          <button className="flex my-3">
            <p className="mr-2 text-[rgba(95,187,224,0.87)]">Enroll Now </p>
            <span className="">➡️</span>
          </button>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <CustomButton onClick={handleButtonClick}>View More</CustomButton>
      </section>
    </main>
  );
};

export default Courses;
