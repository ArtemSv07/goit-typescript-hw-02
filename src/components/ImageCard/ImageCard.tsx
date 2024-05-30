import { FC } from "react";
import { ImageCardProps } from "./imageCardProps";
import css from "./ImageCard.module.css";

const ImageCard: FC<ImageCardProps> = ({ data, openModal }) => {
  return (
    <div className={css.container}>
      <img
        className={css.img}
        onClick={() => openModal(data)}
        src={data.urls.small}
        alt={data.slug}
      />
    </div>
  );
};

export default ImageCard;
