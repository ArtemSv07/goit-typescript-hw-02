import { ImageData } from "../../types";

export type ImageCardProps = {
  data: ImageData;
  openModal: (data: ImageData) => void;
};
