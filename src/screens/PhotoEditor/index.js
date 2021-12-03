import Highlighter from "components/Highlighter";
import React, { useMemo } from "react";
import "./photo-editor.scss";

const zones = [
  { x: 0, y: 0, h: 10, w: 10 },
  { x: 30, y: 30, h: 20, w: 20 },
  { x: 20, y: 40, h: 20, w: 20 },
];

const PhotoEditor = () => {
  const highlightZones = useMemo(() => zones, []);
  return (
    <div id="photo-editor-screen">
      <Highlighter
        imgSrc={"https://picsum.photos/200/300"}
        highLightZones={highlightZones}
      />
    </div>
  );
};

export default PhotoEditor;
