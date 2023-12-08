import logo from "../assets/images/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
const Footer = () => {
  return (
    <>
      <main className="bg-black py-10 px-10">
        <div className="w-full">
          <img src={logo} alt="" className="block w-[200px] py-5 mx-10" />
        </div>
        <article className="flex text-white justify-between mx-10">
          <section className="flex">
            <div className="flex flex-col">
              <div className="">
                <p className="text-[20px] font-medium text-[#555]">
                  Stay in the loop
                </p>
                <p className="mt-3">
                  Be the first to get the latest update from <br /> our community
                  of tech ethusiast
                </p>
              </div>
              <div className="flex my-4">
                <input
                  type="text"
                  className="px-2"
                  placeholder="Enter email address"
                />
                <button className="text-white bg-[#ff8000] text-[16px] py-2 px-4">
                  Subscribe
                </button>
              </div>
              <p className="text-[15px] font-medium text-[#555] mt-20">
                ©️2023 CodePlay. All Rights Reserved
              </p>
            </div>
            {/* <div className="w-[2px] h-10 bg-white mt-10 mx-10"></div> */}
          </section>
          
          <section className="flex gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-medium text-[#555]">Quicklinks</p>
              <div className="flex flex-col">
                <a href="" className="text-white">
                  About CodePlay
                </a>
                <a href="" className="text-white">
                  Courses
                </a>
                <a href="" className="text-white">
                  Teach on CodePlay
                </a>
                <a href="" className="text-white">
                  FAQ
                </a>
              </div>
            </div>
            {/* <div className="w-[2px] h-10 bg-white mt-10 mx-10"></div> */}
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-[20px] font-medium text-[#555]">Help Desk</p>
            <a href="#" className="text-white">
              help-desk.codeplay
            </a>
            <p className="mt-5 text-[20px] font-medium text-[#555]">Email</p>
            <p className="">email@codeplay</p>
            <div className="flex gap-2 flex-col mt-20">
              <p className="text-[15px] font-medium text-[#555]">Follow us</p>
              <div className="flex gap-4">
                <Instagram color="white" />
                <Facebook color="white" />
                <Twitter color="white" />
                <Linkedin color="white" />
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Footer;
