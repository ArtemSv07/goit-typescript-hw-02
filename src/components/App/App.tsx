import SearchBar from "../SearchBar/SearchBar";
import { getPictures } from "../../unsplash-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { ImageData } from "../../types";
const App = () => {
  const [images, setImages] = useState<ImageData[] | []>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>("");
  const [modalData, setModalData] = useState<ImageData | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal(data: ImageData): void {
    setModalData(data);
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
    setModalData(null);
  }

  const nextPage = (): void => {
    setPage(page + 1);
  };

  const queryValue = (value: string): void => {
    setImages([]);
    setInputValue(value);
  };

  useEffect((): void => {
    const handleSearch = async () => {
      setLoader(true);
      if (inputValue === "") {
        setLoader(false);
        return;
      }
      try {
        const data = await getPictures(inputValue, page);
        setImages((prevImage) => [...prevImage, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleSearch();
  }, [inputValue, page]);

  return (
    <div>
      <SearchBar onSearch={queryValue} />

      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery openModal={openModal} imageData={images} />
      )}
      <Loader loader={loader} />
      {images.length !== 0 && <LoadMoreBtn nextPage={nextPage} />}
      {modalIsOpen && modalData && (
        <ImageModal
          closeModal={closeModal}
          data={modalData}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
};
export default App;
