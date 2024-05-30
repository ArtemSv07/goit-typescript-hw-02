import { ImageData } from "../../types";

export interface ImageModalProps {
  data: ImageData;
  modalIsOpen: boolean;
  closeModal: () => void;
}
