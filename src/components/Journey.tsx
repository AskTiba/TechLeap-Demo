import arrow from "../assets/images/arrow.png";
import click from "../assets/images/click.png";
const Journey = () => {
  return (
    <>
      <main className="grid grid-cols-2 place-items-center mt-20 bg-white py-20">
        <section className="text-[32px] font-medium">
          <p className="flex flex-col">
            Ready to embark on your <br /> Learning Journey?
          </p>
          <button className="text-white text-[24px] bg-[--primary-color] py-[10px] px-[60px] my-5 rounded-[4px]">
            Get Started
          </button>
          <img src={arrow} alt="" className="w-[75px] ml-[300px] justify-self-end" />
        </section>
        <section className="">
          <img src={click} alt="" className="h-[470px]" />
        </section>
      </main>
    </>
  );
};

export default Journey;
