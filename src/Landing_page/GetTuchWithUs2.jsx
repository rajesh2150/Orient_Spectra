import Img6 from "../assets/Asset 4@2x (5).png";
import Img7 from "../assets/Asset 2@2x.png";
import Img8 from "../assets/Asset 5@2x.png";
import Img9 from "../assets/Asset 3@2x.png";
import Button from "../Component/Common/Button";
import { motion } from "framer-motion";

import useInViewport from "../Component/Hooks/useInViewport";
import "./index.css";

const GetTuchWithUs = () => {
  const isAnimated = useInViewport();
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="section StudyAbroad">
          <div className="studySection useInViewcard">
            <p>Get in touch </p>
            <p className={`Getcontent ${isAnimated ? "animated" : ""}`}>
              With Us
            </p>
          </div>
          <Button
            arrow={true}
            className={`GetTuchArrow ${isAnimated ? "buttonfadeIn" : ""}`}
          />
        </div>
      </motion.div>
    </>
  );
};

export default GetTuchWithUs;
