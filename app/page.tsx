import Header from "@/src/components/Header";
import "./globals.css";
import Landing from "@/src/components/Landing";
import Features from "@/src/components/Features";
import StayProductive from "@/src/components/StayProductive";
import Testimonials from "@/src/components/Testimonials";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials />
    </>
  );
};

export default Home;
