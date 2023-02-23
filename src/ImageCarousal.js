import "./App.css";
import { useEffect, useState } from "react";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

function ImageCarousal({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   console.log(currentIndex);
  //   setTimeout(() => {
  //     setCurrentIndex((e) => (e === images.length - 1 ? 0 : e + 1));
  //   }, 2000);
  // }, [currentIndex]);
  const handleRight = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  const handleLeft = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

  const handleSelect = (index) => setCurrentIndex(index || 0);

  return (
    <div className="App">
      <div className="image-container">
        <div className="wrapper">
          <div style={{ display: "flex" }}>
            <KeyboardDoubleArrowLeftOutlinedIcon
              onClick={handleLeft}
              className="carousal-icon"
            />
            <img className="image-large" src={images[currentIndex]} />
            <KeyboardDoubleArrowRightOutlinedIcon
              onClick={handleRight}
              className="carousal-icon"
            />
          </div>
          <div className="small-images">
            {images.map((img, index) => (
              <img
                onClick={() => handleSelect(index)}
                className={currentIndex === index ? "image-active" : "image"}
                src={img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousal;
