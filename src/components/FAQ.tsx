import plus from "../assets/images/plus.png";
const Questions = () => {
  return (
    <main className="mx-20">
      <section className="flex flex-col justify-center items-center gap-5">
        <p className="text-[28px] font-[500]">FAQs</p>
        <p className="text-[40px]">
          You have got questions? We have got answers
        </p>
        <p className="text-[24px] text-center mb-5">
          Here are popular questions asked by <br /> previous CodePlay students.
        </p>
      </section>
      <section className="flex flex-col justify-center items-center mx-20">
        <div className="flex text-[28px] justify-between items-center font-[500] bg-white p-4 w-full my-3">
          <p className="">How can I enroll on codeplay?</p>
          <img className="w-[28px]" src={plus} alt="" />
        </div>
        <div className="flex text-[28px] justify-between items-center font-[500] bg-white p-4 w-full my-3">
          <p className="">Who can enroll on Codeplay?</p>
          <img className="w-[28px]" src={plus} alt="" />
        </div>
        <div className="flex text-[28px] justify-between items-center font-[500] bg-white p-4 w-full my-3">
          <p className="">How long does it take to complete a track?</p>
          <img className="w-[28px]" src={plus} alt="" />
        </div>
        <div className="flex text-[28px] justify-between items-center font-[500] bg-white p-4 w-full my-3">
          <p className="">How do I know if I'm making progress on Codeplay??</p>
          <img className="w-[28px]" src={plus} alt="" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <p className="text-[24px] text-center my-5">
          Still have questions that aren't covered? visit <br /> our help desk
          today and get the answers <br /> you need.
        </p>
        <button className="w-[500px] bg-[#ff8000] text-[24px] font-[500] rounded-sm my-5 py-[16px]">
          Visit our help desk
        </button>
      </section>
    </main>
  );
};

export default Questions;
