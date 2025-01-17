import Img1 from "../../assets/Property 1=Default (1).png";
import Quote from "../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./Country.css";

const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why United States</h1>

      <div className="aboutstateCard">
        <div className="unitedImge">
          <img src={Img1} alt="" />
        </div>
        <div className="StudyingCard">
          <div className="quoteImge">
            <img src={Quote} alt="" />
          </div>
          <p>
            Studying abroad offers a world of opportunities, and the USA stands
            out as a premier destination for overseas education.{" "}
          </p>
        </div>
        <div className="ReadMoreCard">
          <p>Read More</p>

          <ArrowForwardIcon className="rightArrowBlog" />
        </div>
      </div>
    </div>
  );
};

export default UnitedState;
