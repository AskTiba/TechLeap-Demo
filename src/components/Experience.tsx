import clickS from "../assets/images/clickS.png"
const Experience = () => {
  return (
    <>
      <main className="mt-10 bg-black text-white p-20">
        <section className="flex justify-center items-center">
          <p className="text-[22px] font-semibold text-left w-1/2">
            Codeplay is a platform <br /> dedicated to helping individuals{" "}
            <br /> sharpen their skills and elevate <br /> their careers through
            continous <br /> development.
          </p>
          <div className="flex justify-around items-center w-1/2 ">
            <div className="">
              <p className="text-[#827e7e]">
                Our platform is designed to <br /> provide a self-paced learning{" "}
                <br />
                experience for individuals.
              </p>
              <p className="mt-5">⭐⭐⭐⭐⭐</p>
              <p className="mt-1 font-medium">5 Star Experience</p>
            </div>
            <img className="w-[200px]" src={clickS} alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Experience;
