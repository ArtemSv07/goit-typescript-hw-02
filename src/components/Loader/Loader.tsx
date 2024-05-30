import { ColorRing } from "react-loader-spinner";
import "./Loader.css";
import { FC, ReactElement } from "react";
import { LoaderProps } from "./loaderProps";

const Loader: FC<LoaderProps> = ({ loader }): ReactElement | null => {
  if (!loader) return null;
  return (
    loader && (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperClass="color-ring-wrapper"
        colors={["#283048", "#859398", "#f8b26a", "#283048", "#859398"]}
      />
    )
  );
};

export default Loader;
