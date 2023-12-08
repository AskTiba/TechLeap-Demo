import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const Layout = () => {
  return (
    <main className="bg-[#f7f7f7]">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
