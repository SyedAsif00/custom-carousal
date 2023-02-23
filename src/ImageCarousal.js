import "./App.css";
import { useEffect, useState } from "react";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

function ImageCarousal({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((e) => (e === images.length - 1 ? 0 : e + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
  const handleRight = () =>
    // currentindex reprsents a new picture. each time the icon is clicked the index is changed.
    // we set a condition by saying if currentindex is 3 then shift it back to 0. if not 3 then increase it to + 1. so in this case a loop continues and the icon works.
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  const handleLeft = () =>
    // currentindex if 0 then shift that index to 3.means move it to the very the last photo. if not leveldown the index by 1 and a loop continues.
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

  const handleSelect = (index) => setCurrentIndex(index || 0);

  return (
    console.log(currentIndex),
    (
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
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={currentIndex === index ? "image-active" : "image"}
                  src={img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ImageCarousal;
