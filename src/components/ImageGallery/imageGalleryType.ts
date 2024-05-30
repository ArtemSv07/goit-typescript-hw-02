import { ImageData } from "../../types";

export interface ImageGalleryProps {
  imageData: ImageData[];
  openModal: (data: ImageData) => void;
}
