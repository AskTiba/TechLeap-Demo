import dave from "../assets/images/samson.png";
import girl from "../assets/images/girl.png";
import hat from "../assets/images/hatman.png";
const Testimonials = () => {
  return (
    <>
      <main className="">
        <section className="my-10 mx-20">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[24px]">Testimonials</p>
            <p className="text-[40px]">See what people say about us</p>
          </div>
          <div className="grid grid-cols-3 justify-around">
            <div className="my-10 bg-white rounded-[20px] p-3 mr-5">
              <div className="flex">
                <img
                  className="rounded-full w-[80px] p-2 mr-2"
                  src={dave}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-[28px] font-[500]">Samson Adedeji</p>
                  <span className="text-[24px]">Product Design</span>
                </div>
              </div>
              <hr className="w-full mt-5" />
              <p className="text-[24px] text-[#828282] my-5">
                I had the opportunity to <br /> connect with fellow learners{" "}
                <br /> and receive guidance from <br /> both instructors and
                peers.
              </p>
              <span className="">
                <span className="font-bold">5</span> ⭐⭐⭐⭐⭐
              </span>
            </div>
            <div className="my-10 bg-white rounded-[20px] p-3 mr-5">
              <div className="flex">
                <img
                  className="rounded-full w-[80px] p-2 mr-2"
                  src={girl}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-[28px] font-[500]">Samson Adedeji</p>
                  <span className="text-[24px]">Back-End Dev</span>
                </div>
              </div>
              <hr className="w-full mt-5" />
              <p className="text-[24px] text-[#828282] my-5">
                I had the opportunity to <br /> connect with fellow learners{" "}
                <br /> and receive guidance from <br /> both instructors and
                peers.
              </p>
              <span className="">
                <span className="font-bold">5</span> ⭐⭐⭐⭐⭐
              </span>
            </div>
            <div className="my-10 bg-white rounded-[20px] p-3">
              <div className="flex">
                <img
                  className="rounded-full w-[80px] p-2 mr-2"
                  src={hat}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-[28px] font-[500]">Samson Adedeji</p>
                  <span className="text-[24px]">Front-End Dev</span>
                </div>
              </div>
              <hr className="w-full mt-5" />
              <p className="text-[24px] text-[#828282] my-5">
                I had the opportunity to <br /> connect with fellow learners{" "}
                <br /> and receive guidance from <br /> both instructors and
                peers.
              </p>
              <span className="">
                <span className="font-bold">5</span> ⭐⭐⭐⭐⭐
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Testimonials;
