import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/techleap.png";
const Header = () => {
  return (
    <>
      <main className="mx-20 py-5">
        <section className="flex justify-between">
          <div className="">
            <Link to="/" className="flex">
              <img src={logo} className="h-[40px]" alt="Logo" />
            </Link>
          </div>
          <div className="flex gap-40">
            <nav className="flex gap-10">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-[--primary-color]"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-[--primary-color] lg:p-0`
                }
              >
                About
              </NavLink>
              <NavLink
                to="courselist"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-[--primary-color]"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-[--primary-color] lg:p-0`
                }
              >
                Courses
              </NavLink>
              <NavLink
                to="instructors"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-[--primary-color]"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-[--primary-color] lg:p-0`
                }
              >
                FAQ
              </NavLink>
            </nav>
            <div className="">
              <Link
                to="auth"
                className="text-white bg-[--primary-color]  hover:bg-[#0046B8] focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 lg:px-5 py-1.5 mr-2 focus:outline-none"
              >
                Enroll
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Header;
