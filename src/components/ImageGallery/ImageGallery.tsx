import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "./imageGalleryType";
import css from "./ImageGallery.module.css";

const ImageGallery: FC<ImageGalleryProps> = ({ imageData, openModal }) => {
  return (
    <>
      <ul className={css.listContainer}>
        {imageData.map((element) => (
          <li key={element.id}>
            <ImageCard openModal={openModal} data={element} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
