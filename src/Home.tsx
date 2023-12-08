import Courses from "./components/Courses";
import Experience from "./components/Experience";
import Questions from "./components/FAQ";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <main className="">
        <Hero />
        <Experience />
        <Offer />
        <Courses />
        <Testimonials />
        <Questions />
        <Journey />
      </main>
    </>
  );
};

export default Home;
