import Counselors from "../../Landing_page/Counselors";
import Events from "../../Landing_page/Events";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Testimonial from "../../Landing_page/Testimonial";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import AboutCountry from "./AboutCountry";
import Awarded from "./Awarded";
import Consectetuer from "./Consectetuer";
import Founders from "./Founders";
import Hero from "./Hero";
import Story from "./Story";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Counselors />
      <Consectetuer />
      <Founders />
      {/* <AboutCountry /> */}
      <Awarded />
      <Events />
      <Testimonial />
      <GetTuchWithUs />
      <Footer />
    </>
  );
};

export default About;
