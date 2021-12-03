import React, { useRef, useEffect, useState } from "react";

const Highlighter = (props) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const canvasRef = useRef(null);
  //To render image on canvas
  useEffect(() => {
    setIsImgLoaded(false);
    let canvasContext = canvasRef.current.getContext("2d");

    //clear previous images if any
    canvasContext.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    //draw the image on canvas
    let img = new Image();
    img.onload = function () {
      //adjust canvas dimensions
      canvasRef.current.height = this.height;
      canvasRef.current.width = this.width;

      canvasContext.drawImage(img, 0, 0);
      setIsImgLoaded(true);
    };
    img.src = props.imgSrc;
  }, [props.imgSrc]);

  useEffect(() => {
    if (isImgLoaded) {
      // Start drawing rect everytime image is loaded or co-ords are changed
      // Out of bounds highlighting can also be handled from here
      let canvasContext = canvasRef.current.getContext("2d");

      props.highLightZones.forEach((highlightZone) => {
        const { x, y, h, w } = highlightZone;
        canvasContext.beginPath();
        canvasContext.lineWidth = "1";
        canvasContext.strokeStyle = "red";
        canvasContext.rect(x, y, w, h);
        canvasContext.stroke();
      });
    }
  }, [isImgLoaded, props.highLightZones]);

  return (
    <div className="image-highlighter">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default React.memo(Highlighter);
