import React, { useState } from "react";
import styles from "./Movie.module.css";

import Bookmark from "../Bookmark/Bookmark";
import Details from "../UI/Details/Details";
import PlayButton from "../UI/PlayButton/PlayButton";
import Overlay from "../UI/Overlay/Overlay";
import Card from "../UI/Card/Card";
import Image from "../UI/Image/Image";

const Movie = ({ item, image, title, trending, width }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Card mouseOver={handleMouseOver} mouseOut={handleMouseOut}>
      {isHovering && (
        <Overlay>
          <PlayButton />
        </Overlay>
      )}
      <Image title={title} image={image} />
      <Bookmark item={item} />
    </Card>
  );
};

export default Movie;
