import React from "react";
import ImageCarousal from "./ImageCarousal";
import image1 from "../src/assets/image1.webp";
import image2 from "../src/assets/image2.webp";
import image3 from "../src/assets/image3.webp";
const images = [image1, image2, image3];
const App = () => {
  return (
    <div>
      <ImageCarousal images={images} />
    </div>
  );
};

export default App;
