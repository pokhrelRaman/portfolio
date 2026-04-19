"use client";

import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";

// TEMP: no gallery usage anymore
const images: never[] = [];

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {images.map((_, index) => (
        <SmartImage
          key={index}
          priority={index < 10}
          sizes="100vw"
          radius="m"
          aspectRatio="16 / 9"
          src=""
          alt=""
          className={styles.gridItem}
        />
      ))}
    </Masonry>
  );
}