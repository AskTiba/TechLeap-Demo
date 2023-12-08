import CustomButton from "./Button";

const Offer = () => {
  const handleButtonClick = () => {
    // Add your button click logic here
  };
  return (
    <main className="flex flex-col mt-20 mx-20 justify-center items-center">
      <section className="grid grid-cols-3 gap-32 justify-items-center">
        <div className="">
          <div className="flex items-center">
            <span className="pr-2">🎓</span>
            <p className="font-semibold text-left">
              Professional <br /> Tutors
            </p>
          </div>
          <p className="mt-2">
            Our platform brings together <br /> top notch tech tutors who <br />{" "}
            are industry professionals
          </p>
        </div>
        <div className="">
          <div className="flex items-center">
            <span className="pr-2">📖</span>
            <p className="font-semibold text-left">
              Interactive Learning <br /> & Feedback
            </p>
          </div>
          <p className="mt-2">
            Our tutors provide ongoing <br /> support and timely feedback to{" "}
            <br /> help you overcome challenges <br /> and refine your skills.
          </p>
        </div>
        <div className="">
          <div className="flex items-center">
            <span className="pr-2">🤝</span>
            <p className="font-semibold text-left">
              Community <br /> Collaboration
            </p>
          </div>
          <p className="mt-2">
            Our platform fosters a vibrant <br /> community of learners where{" "}
            <br /> you can connect, collaborate
          </p>
        </div>
      </section>
      <section className="my-5">
        <CustomButton onClick={handleButtonClick}>Start Learning</CustomButton>
      </section>
    </main>
  );
};

export default Offer;
